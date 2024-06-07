import { useEffect, useRef, useState } from 'react';
import {
  NativeSyntheticEvent,
  TextInput,
  TextInputChangeEventData,
} from 'react-native';
import { Control, Controller } from 'react-hook-form';
import { useSharedValue, withTiming } from 'react-native-reanimated';
import { styled, View, Text, Accordion } from 'tamagui';

import { SCREEN_WIDTH, SCREEN_HEIGHT } from '@/app/constants';
import { NewHabitData } from '@/app/newHabit';
import CircularCheckbox from '../tabs/CircularCheckbox';
import WeekdayCard from './WeekdayCard';

interface Props {
  control: Control<NewHabitData>;
}

const initialWeekdays = [
  { day: 'Monday', isSelected: false },
  { day: 'Tuesday', isSelected: false },
  { day: 'Wednesday', isSelected: false },
  { day: 'Thursday', isSelected: false },
  { day: 'Friday', isSelected: false },
  { day: 'Saturday', isSelected: false },
  { day: 'Sunday', isSelected: false },
];

const FrequencyListModule = ({ control }: Props) => {
  const [selectionState, setSelectionState] = useState({
    isDailySelected: true,
    isSpecificSelected: false,
    isRepeatSelected: false,
  });
  const [weekdays, setWeekdays] = useState(initialWeekdays);

  const { isDailySelected, isSpecificSelected, isRepeatSelected } = selectionState;

  const setFrequencyRef = useRef<((...event: any[]) => void) | null>(null);

  const isDailyChecked = useSharedValue(isDailySelected ? 1 : 0);
  const isSpecificChecked = useSharedValue(isSpecificSelected ? 1 : 0);
  const isRepeatChecked = useSharedValue(isRepeatSelected ? 1 : 0);

  const handleSelection = (
    selection: 'isDailySelected' | 'isSpecificSelected' | 'isRepeatSelected'
  ) => {
    setSelectionState({
      isDailySelected: false,
      isSpecificSelected: false,
      isRepeatSelected: false,
      [selection]: true,
    });

    if (!isSpecificSelected) {
      setWeekdays(initialWeekdays);
    }
  };

  const handleDaySelect = (day: string) => {
    const updatedWeekdays = weekdays.map((weekday) => {
      if (weekday.day === day) {
        return {
          ...weekday,
          isSelected: !weekday.isSelected,
        };
      } else {
        return weekday;
      }
    });
    setWeekdays(updatedWeekdays);

    const selectedWeekdays = updatedWeekdays.filter(
      (weekday) => weekday.isSelected === true
    );
    const selectedDayNames = selectedWeekdays.map((weekday) => weekday.day);

    setFrequencyRef.current?.({ type: 'specific', isRepeatedOn: selectedDayNames });
  };

  const handleRepeatSelect = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
    const repeatFrequency = e.nativeEvent.text;
    setFrequencyRef.current?.({
      type: 'repeats',
      isRepeatedEvery: parseInt(repeatFrequency),
    });
  };

  useEffect(() => {
    isDailyChecked.value = isDailySelected ? withTiming(1) : withTiming(0);
    isSpecificChecked.value = isSpecificSelected ? withTiming(1) : withTiming(0);
    isRepeatChecked.value = isRepeatSelected ? withTiming(1) : withTiming(0);
  }, [isDailySelected, isSpecificSelected, isRepeatSelected]);

  return (
    <Container>
      <HeadingContainer>
        <Heading>How often do you want to do it?</Heading>
      </HeadingContainer>
      <Accordion overflow="hidden" type="single">
        <Controller
          control={control}
          name="frequency"
          render={({ field: { onChange } }) => {
            setFrequencyRef.current = onChange;

            return (
              <>
                <Accordion.Item value="daily">
                  <AccordionTrigger
                    onPress={() => {
                      handleSelection('isDailySelected');
                      onChange({ type: 'daily' });
                    }}
                  >
                    {({ open }: { open: boolean }) => (
                      <>
                        <CheckboxContainer>
                          <CircularCheckbox isChecked={isDailyChecked} />
                        </CheckboxContainer>
                        <Title>Every day</Title>
                      </>
                    )}
                  </AccordionTrigger>
                </Accordion.Item>

                <Accordion.Item value="specific">
                  <AccordionTrigger
                    onPress={() => handleSelection('isSpecificSelected')}
                  >
                    {({ open }: { open: boolean }) => (
                      <>
                        <CheckboxContainer>
                          <CircularCheckbox isChecked={isSpecificChecked} />
                        </CheckboxContainer>
                        <Title>Specific days of the week</Title>
                      </>
                    )}
                  </AccordionTrigger>
                  <Accordion.HeightAnimator animation="medium">
                    <AccordionContent animation="medium" exitStyle={{ opacity: 0 }}>
                      <WeekdaysContainer>
                        {weekdays.map(({ day, isSelected }) => (
                          <WeekdayCard
                            key={day}
                            day={day}
                            isSelected={isSelected}
                            onSelect={handleDaySelect}
                          />
                        ))}
                      </WeekdaysContainer>
                    </AccordionContent>
                  </Accordion.HeightAnimator>
                </Accordion.Item>

                <Accordion.Item value="repeat">
                  <AccordionTrigger onPress={() => handleSelection('isRepeatSelected')}>
                    {({ open }: { open: boolean }) => (
                      <>
                        <CheckboxContainer>
                          <CircularCheckbox isChecked={isRepeatChecked} />
                        </CheckboxContainer>
                        <Title>Repeat</Title>
                      </>
                    )}
                  </AccordionTrigger>
                  <Accordion.HeightAnimator animation="medium">
                    <AccordionContent animation="medium" exitStyle={{ opacity: 0 }}>
                      <RepeatFieldContainer>
                        <RepeatFieldCard>
                          <Text color="#8C8C8C" fontSize={15}>
                            Every
                          </Text>
                          <DaysInputField
                            keyboardType="numeric"
                            maxLength={3}
                            onChange={handleRepeatSelect}
                          />
                          <Text color="#8C8C8C" fontSize={15}>
                            days
                          </Text>
                        </RepeatFieldCard>
                      </RepeatFieldContainer>
                    </AccordionContent>
                  </Accordion.HeightAnimator>
                </Accordion.Item>
              </>
            );
          }}
        />
      </Accordion>
    </Container>
  );
};

const Container = styled(View, {
  width: SCREEN_WIDTH,
  height: SCREEN_HEIGHT - 60,
});

const HeadingContainer = styled(View, {
  justifyContent: 'center',
  alignItems: 'center',
  height: 94,
});

const Heading = styled(Text, {
  fontSize: 20,
  fontWeight: 'bold',
  color: '#C73A57',
});

const AccordionTrigger = styled(Accordion.Trigger, {
  flexDirection: 'row',
  alignItems: 'center',
  height: 72,
  paddingHorizontal: 6,
  paddingVertical: 12,
  borderTopWidth: 0,
  borderLeftWidth: 0,
  borderRightWidth: 0,
  borderBottomWidth: 1,
  borderColor: '#262626',
});

const AccordionContent = styled(Accordion.Content, {
  paddingHorizontal: 0,
  borderBottomWidth: 1,
  borderColor: '#262626',
});

const CheckboxContainer = styled(View, {
  width: 36,
});

const Title = styled(Text, {
  fontSize: 16,
});

const WeekdaysContainer = styled(View, {
  flexDirection: 'row',
  flexWrap: 'wrap',
});

const RepeatFieldContainer = styled(View, {
  justifyContent: 'center',
  alignItems: 'center',
  width: SCREEN_WIDTH,
});

const RepeatFieldCard = styled(View, {
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#262626',
  gap: 12,
  padding: 16,
  borderRadius: 12,
});

const DaysInputField = styled(TextInput, {
  width: 56,
  textAlign: 'center',
  borderBottomWidth: 2,
  borderColor: '#8C8C8C',
  //@ts-ignore
  fontSize: 16,
  color: 'white',
});

export default FrequencyListModule;
