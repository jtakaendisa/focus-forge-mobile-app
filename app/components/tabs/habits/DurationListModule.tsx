import { useRef } from 'react';
import { Control, Controller } from 'react-hook-form';
import { Text, View, styled } from 'tamagui';

import { SCREEN_HEIGHT, SCREEN_WIDTH } from '@/app/constants';
import { NewActivityData } from '@/app/entities';
import useActivityModals from '@/app/hooks/useActivityModals';
import useCustomColors from '@/app/hooks/useCustomColors';
import useDatePicker from '@/app/hooks/useDatePicker';
import { toFormattedDateString } from '@/app/utils';
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';
import BellSvg from '../../icons/BellSvg';
import BinSvg from '../../icons/BinSvg';
import CalendarEndSvg from '../../icons/CalendarEndSvg';
import CalendarStartSvg from '../../icons/CalendarStartSvg';
import FlagSvg from '../../icons/FlagSvg';
import ModalContainer from '../modals/ModalContainer';
import PriorityModalModule from '../modals/PriorityModalModule';
import RemindersModalModule from '../modals/RemindersModalModule';
import RippleButton from '../RippleButton';

interface Props {
  control: Control<NewActivityData>;
}

const SVG_SIZE = 22;

const DurationListModule = ({ control }: Props) => {
  const {
    isRemindersModalOpen,
    isPriorityModalOpen,
    toggleRemindersModal,
    togglePriorityModal,
  } = useActivityModals();

  const { customGray1, customRed1 } = useCustomColors();

  const setStartDateRef = useRef<((...event: any[]) => void) | null>(null);
  const setEndDateRef = useRef<((...event: any[]) => void) | null>(null);

  const { handleStartDateSelect, handleEndDateSelect, handleEndDateClear } =
    useDatePicker(setStartDateRef, setEndDateRef, true);

  const currentPriority = control?._getWatch('priority');
  const startDate = control?._getWatch('startDate');
  const endDate = control?._getWatch('endDate');
  const reminders = control?._getWatch('reminders');

  return (
    <Container>
      <HeadingContainer>
        <Heading>When do you want to do it?</Heading>
      </HeadingContainer>

      <RippleButton onPress={handleStartDateSelect}>
        <OptionContainer>
          <OptionInfo>
            <CalendarStartSvg size={SVG_SIZE} fill={customRed1} />
            <OptionTitle>Start date</OptionTitle>
          </OptionInfo>
          <Controller
            control={control}
            name="startDate"
            render={({ field: { onChange } }) => {
              setStartDateRef.current = onChange;
              return (
                <OptionLabel>
                  <LabelText>
                    {startDate &&
                      (toFormattedDateString(startDate) ===
                      toFormattedDateString(new Date())
                        ? 'Today'
                        : toFormattedDateString(startDate))}
                  </LabelText>
                </OptionLabel>
              );
            }}
          />
        </OptionContainer>
      </RippleButton>
      <RippleButton onPress={handleEndDateSelect}>
        <OptionContainer>
          <OptionInfo>
            <CalendarEndSvg size={SVG_SIZE} fill={customRed1} />
            <OptionTitle>End date</OptionTitle>
          </OptionInfo>
          <Controller
            control={control}
            name="endDate"
            render={({ field: { onChange } }) => {
              setEndDateRef.current = onChange;
              return (
                <Row>
                  {endDate && (
                    <AnimatedIconContainer
                      onPress={handleEndDateClear}
                      entering={FadeIn}
                      exiting={FadeOut}
                    >
                      <BinSvg size={SVG_SIZE / 1.2} fill={customGray1} />
                    </AnimatedIconContainer>
                  )}
                  <OptionLabel>
                    <LabelText>
                      {endDate
                        ? toFormattedDateString(endDate) ===
                          toFormattedDateString(new Date())
                          ? 'Today'
                          : toFormattedDateString(endDate)
                        : '---'}
                    </LabelText>
                  </OptionLabel>
                </Row>
              );
            }}
          />
        </OptionContainer>
      </RippleButton>
      <RippleButton onPress={toggleRemindersModal}>
        <OptionContainer>
          <OptionInfo>
            <BellSvg size={SVG_SIZE} fill={customRed1} />
            <OptionTitle>Time and reminders</OptionTitle>
          </OptionInfo>
          <OptionLabel>
            <LabelText>
              {!!reminders?.length
                ? reminders.length === 1
                  ? `${reminders.length} reminder`
                  : `${reminders.length} reminders`
                : '---'}
            </LabelText>
          </OptionLabel>
        </OptionContainer>
      </RippleButton>
      <RippleButton onPress={togglePriorityModal}>
        <OptionContainer>
          <OptionInfo>
            <FlagSvg size={SVG_SIZE} fill={customRed1} variant="outline" />
            <OptionTitle>Priority</OptionTitle>
          </OptionInfo>
          <OptionLabel>
            <LabelText>{currentPriority}</LabelText>
          </OptionLabel>
        </OptionContainer>
      </RippleButton>

      <ModalContainer isOpen={isRemindersModalOpen} closeModal={toggleRemindersModal}>
        <RemindersModalModule
          control={control}
          reminders={reminders}
          closeModal={toggleRemindersModal}
        />
      </ModalContainer>
      <ModalContainer isOpen={isPriorityModalOpen} closeModal={togglePriorityModal}>
        <PriorityModalModule
          control={control}
          initialPriority={currentPriority}
          closeModal={togglePriorityModal}
        />
      </ModalContainer>
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
  color: '$customRed1',
});

const OptionContainer = styled(View, {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: 60,
  paddingHorizontal: 8,
  borderBottomWidth: 1,
  borderColor: '$customGray2',
});

const OptionInfo = styled(View, {
  flexDirection: 'row',
  alignItems: 'center',
  gap: 10,
});

const IconContainer = styled(View, {
  justifyContent: 'center',
  alignItems: 'center',
  width: 36,
  height: 36,
});

const OptionTitle = styled(Text, {
  fontSize: 16,
});

const OptionLabel = styled(View, {
  paddingHorizontal: 26,
  paddingVertical: 10,
  borderRadius: 8,
  backgroundColor: '$customRed5',
});

const LabelText = styled(Text, {
  fontSize: 14,
  fontWeight: 'bold',
  color: '$customRed1',
});

const Row = styled(View, {
  flexDirection: 'row',
  alignItems: 'center',
  gap: 8,
});

const AnimatedIconContainer = Animated.createAnimatedComponent(IconContainer);

export default DurationListModule;
