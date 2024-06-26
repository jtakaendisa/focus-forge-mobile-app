import { useEffect } from 'react';
import { View, Text, styled } from 'tamagui';

import Animated, {
  SharedValue,
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import { Filter } from '@/app/entities';

interface Props {
  filter: Filter;
  onSelect: (filter: Filter) => void;
}

const FilterBar = ({ filter, onSelect }: Props) => {
  const isSingleTaskSelected = useSharedValue(0);
  const isRecurringTaskSelected = useSharedValue(0);

  const textColorAnimation = (filter: SharedValue<number>) => {
    return useAnimatedStyle(() => ({
      color: interpolateColor(filter.value, [0, 1], ['#8C8C8C', '#fff']),
    }));
  };

  const indicatorOpacityAnimation = (filter: SharedValue<number>) => {
    return useAnimatedStyle(() => ({
      opacity: interpolate(filter.value, [0, 1], [0, 1]),
    }));
  };

  useEffect(() => {
    switch (filter) {
      case 'single':
        isSingleTaskSelected.value = withTiming(1);
        isRecurringTaskSelected.value = withTiming(0);
        break;
      case 'recurring':
        isRecurringTaskSelected.value = withTiming(1);
        isSingleTaskSelected.value = withTiming(0);
        break;
    }
  }, [filter]);

  return (
    <Container>
      <Button onPress={() => onSelect('single')}>
        <TextContainer>
          <AnimatedButtonText style={textColorAnimation(isSingleTaskSelected)}>
            Single Tasks
          </AnimatedButtonText>
          <AnimatedSelectionIndicator
            style={indicatorOpacityAnimation(isSingleTaskSelected)}
          />
        </TextContainer>
      </Button>
      <Button onPress={() => onSelect('recurring')}>
        <TextContainer>
          <AnimatedButtonText style={textColorAnimation(isRecurringTaskSelected)}>
            Recurring Tasks
          </AnimatedButtonText>
          <AnimatedSelectionIndicator
            style={indicatorOpacityAnimation(isRecurringTaskSelected)}
          />
        </TextContainer>
      </Button>
    </Container>
  );
};

const Container = styled(View, {
  flexDirection: 'row',
  height: 48,
  borderBottomWidth: 1,
  borderColor: '#262626',
});

const Button = styled(View, {
  alignItems: 'center',
  width: '50%',
});

const TextContainer = styled(View, {
  position: 'relative',
  justifyContent: 'center',
  height: '100%',
});

const ButtonText = styled(Text, {
  fontSize: 14,
});

const SelectionIndicator = styled(View, {
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  height: 4,
  backgroundColor: '#C33756',
  borderTopLeftRadius: 4,
  borderTopRightRadius: 4,
});

const AnimatedButtonText = Animated.createAnimatedComponent(ButtonText);
const AnimatedSelectionIndicator = Animated.createAnimatedComponent(SelectionIndicator);

export default FilterBar;
