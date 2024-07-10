import { MutableRefObject } from 'react';
import { router, usePathname } from 'expo-router';
import {
  BottomSheetModal,
  BottomSheetBackdrop,
  BottomSheetView,
  BottomSheetBackdropProps,
} from '@gorhom/bottom-sheet';
import { BottomSheetModalMethods } from '@gorhom/bottom-sheet/lib/typescript/types';
import { styled, View, Text, getTokenValue } from 'tamagui';

import TaskFrequencyIcon from './TaskFrequencyIcon';

interface Props {
  taskFrequencyRef: MutableRefObject<BottomSheetModalMethods | null>;
}

type Pathname = '/newTask' | '/newHabit';

const renderBackdrop = (props: BottomSheetBackdropProps) => (
  <BottomSheetBackdrop appearsOnIndex={0} disappearsOnIndex={-1} {...props} />
);

const options = [
  {
    heading: 'Habit',
    description:
      'Activity that repeats over time. It has detailed tracking and statistics.',
    icon: 'habit',
    pathname: '/newHabit',
    isRecurring: true,
  },
  {
    heading: 'Recurring Task',
    description: 'Activity that repeats over time without tracking or statistics.',
    icon: 'recurring task',
    pathname: '/newTask',
    isRecurring: true,
  },
  {
    heading: 'Task',
    description: 'Single instance activity without tracking over time.',
    icon: 'single task',
    pathname: '/newTask',
    isRecurring: false,
  },
] as const;

const TaskFrequencyModal = ({ taskFrequencyRef }: Props) => {
  const currentPath = usePathname();

  const handleCreateTask = (pathname: Pathname, isRecurring: boolean) => {
    taskFrequencyRef.current?.dismiss();

    if (pathname === '/newTask') {
      router.push({
        pathname,
        params: { isRecurring: isRecurring.toString(), origin: currentPath },
      });
    } else {
      router.push({ pathname, params: { origin: currentPath } });
    }
  };

  const customGray1 = getTokenValue('$customGray1');
  const customGray3 = getTokenValue('$customGray3');
  const customRed1 = getTokenValue('$customRed1');

  return (
    <BottomSheetModal
      ref={taskFrequencyRef}
      backgroundStyle={{ backgroundColor: customGray3 }}
      handleIndicatorStyle={{ backgroundColor: 'gray' }}
      backdropComponent={renderBackdrop}
      enableDynamicSizing
      enablePanDownToClose
    >
      <BottomSheetView>
        {options.map((option, index) => {
          const { heading, description, icon, pathname, isRecurring } = option;

          return (
            <>
              <CardContainer
                key={heading}
                onPress={() => handleCreateTask(pathname, isRecurring)}
              >
                <IconContainer isTransparent={false}>
                  <TaskFrequencyIcon name={icon} fill={customRed1} />
                </IconContainer>
                <CardTextContainer>
                  <CardHeading>{heading}</CardHeading>
                  <CardDescription>{description}</CardDescription>
                </CardTextContainer>
                <IconContainer>
                  <TaskFrequencyIcon name="proceed" fill={customGray1} />
                </IconContainer>
              </CardContainer>
              {index < options.length - 1 && <Separator />}
            </>
          );
        })}
      </BottomSheetView>
    </BottomSheetModal>
  );
};

const CardContainer = styled(View, {
  flexDirection: 'row',
  alignItems: 'center',
  paddingHorizontal: 12,
  paddingVertical: 16,
});

const IconContainer = styled(View, {
  justifyContent: 'center',
  alignItems: 'center',
  width: 44,
  height: 44,
  borderRadius: 22,
  variants: {
    isTransparent: {
      true: {
        backgroundColor: 'transparent',
      },
      false: {
        backgroundColor: '$customRed6',
      },
    },
  } as const,
});

const CardTextContainer = styled(View, {
  flex: 1,
  paddingHorizontal: 16,
});

const CardHeading = styled(Text, {
  fontSize: 15.5,
  fontWeight: '900',
});

const CardDescription = styled(Text, {
  fontSize: 12,
  color: '$customGray8',
});

const Separator = styled(View, {
  height: 1,
  borderBottomWidth: 1,
  borderColor: '$customGray2',
});

export default TaskFrequencyModal;
