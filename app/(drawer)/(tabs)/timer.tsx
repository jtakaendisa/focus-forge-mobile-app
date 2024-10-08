import CircularCarousel from '@/app/components/tabs/timer/CircularCarousel';
import { SCREEN_WIDTH, TIMER_LIST_ITEM_WIDTH } from '@/app/constants';
import useContainerHeight from '@/app/hooks/useContainerHeight';
import useTimerAnimation from '@/app/hooks/useTimerAnimation';
import useTimerCountdown from '@/app/hooks/useTimerCountdown';
import { useCallback, useMemo, useState } from 'react';
import Animated, { FadeIn, FadeOut, useDerivedValue } from 'react-native-reanimated';
import { ReText } from 'react-native-redash';
import { styled, Text, View } from 'tamagui';

const TimerScreen = () => {
  const [timerDuration, setTimerDuration] = useState(25);

  const { containerHeight, handleLayout } = useContainerHeight();

  const {
    remainingTime,
    isCountdownPaused,
    isCountingDown,
    startCountdown,
    pauseCountdown,
    resumeCountdown,
    resetCountdown,
  } = useTimerCountdown(timerDuration);

  const { countdownSheetAnimation, resetButtonAnimation, startButtonAnimation } =
    useTimerAnimation(
      isCountingDown,
      isCountdownPaused,
      remainingTime,
      timerDuration,
      containerHeight
    );

  const timers = useMemo(() => [...Array(13).keys()].map((i) => i * 5).slice(1), []);

  const handleTimerDurationSelect = useCallback(
    (index: number) => setTimerDuration(timers[index]),
    []
  );

  // Derived value to calculate minutes and seconds
  const remainingTimeText = useDerivedValue(() => {
    const minutes = Math.floor(remainingTime.value / 60);
    const seconds = Math.floor(remainingTime.value % 60);
    return `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  });

  return (
    <Container onLayout={handleLayout}>
      {!!containerHeight && (
        <AnimatedInnerContainer
          entering={FadeIn}
          exiting={FadeOut}
          height={containerHeight}
        >
          <AnimatedCountdownSheet
            height={containerHeight}
            style={countdownSheetAnimation}
          />
          <TextContainer height={(2 * containerHeight) / 3}>
            <ReText
              style={{
                fontSize: 72,
                color: 'white',
              }}
              text={remainingTimeText}
            />
          </TextContainer>
          <CircularCarousel
            containerHeight={containerHeight}
            timers={timers}
            isCountingDown={isCountingDown || isCountdownPaused}
            onSelect={handleTimerDurationSelect}
          />
          <AnimatedResetButton
            bottom={containerHeight / 6}
            onPress={resetCountdown}
            style={resetButtonAnimation}
          >
            <ButtonText>reset</ButtonText>
          </AnimatedResetButton>
          <AnimatedStartButton
            bottom={containerHeight / 6}
            onPress={
              isCountingDown
                ? pauseCountdown
                : isCountdownPaused
                ? resumeCountdown
                : startCountdown
            }
            style={startButtonAnimation}
          >
            <ButtonText>
              {isCountingDown ? 'pause' : isCountdownPaused ? 'resume' : 'start'}
            </ButtonText>
          </AnimatedStartButton>
        </AnimatedInnerContainer>
      )}
    </Container>
  );
};

const Container = styled(View, {
  flex: 1,
  backgroundColor: '$customBlack1',
});

const InnerContainer = styled(View, {
  width: SCREEN_WIDTH,
});

const CountdownSheet = styled(View, {
  position: 'absolute',
  top: 0,
  left: 0,
  width: SCREEN_WIDTH,
});

const TextContainer = styled(View, {
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center',
});

const StartButton = styled(View, {
  position: 'absolute',
  alignSelf: 'center',
  justifyContent: 'center',
  alignItems: 'center',
  borderWidth: 2,
  backgroundColor: '$customGreen3',
  borderColor: '$customGreen2',
});

const ResetButton = styled(View, {
  position: 'absolute',
  alignSelf: 'center',
  justifyContent: 'center',
  alignItems: 'center',
  width: TIMER_LIST_ITEM_WIDTH * 0.8,
  height: TIMER_LIST_ITEM_WIDTH * 0.8,
  borderRadius: TIMER_LIST_ITEM_WIDTH * 0.8,
  borderWidth: 2,
  backgroundColor: '$customRed8',
});

const ButtonText = styled(Text, {
  fontSize: 14,
  textTransform: 'uppercase',
});

const AnimatedInnerContainer = Animated.createAnimatedComponent(InnerContainer);
const AnimatedCountdownSheet = Animated.createAnimatedComponent(CountdownSheet);
const AnimatedStartButton = Animated.createAnimatedComponent(StartButton);
const AnimatedResetButton = Animated.createAnimatedComponent(ResetButton);

export default TimerScreen;
