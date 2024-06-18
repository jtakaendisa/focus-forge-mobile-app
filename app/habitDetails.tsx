import { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { useLocalSearchParams } from 'expo-router';
import { styled, Text, View } from 'tamagui';

import { useHabitStore } from './store';
import { Habit } from './entities';
import TabBar from './components/habits/TabBar';
import HabitCalendar from './components/habits/HabitCalendar';
import HabitStatistics from './components/habits/HabitStatistics';
import EditHabit from './components/habits/EditHabit';

export type ActiveTab = 'calendar' | 'statistics' | 'edit';

type SearchParams = {
  activeTab: ActiveTab;
  habitId: string;
};

const HabitDetailsScreen = () => {
  const { activeTab: activeTabParam, habitId } = useLocalSearchParams<SearchParams>();

  const habits = useHabitStore((s) => s.habits);

  const [activeTab, setActiveTab] = useState(activeTabParam);
  const [selectedHabit, setSelectedHabit] = useState<Habit | null>(null);

  const handleSelectTab = (activeTab: ActiveTab) => setActiveTab(activeTab);

  useEffect(() => {
    const selectedHabit = habits.find((habit) => habit.id === habitId);
    if (selectedHabit) {
      setSelectedHabit(selectedHabit);
    }
  }, [habits, habitId]);

  if (!selectedHabit) return null;

  return (
    <Container>
      <ScreenLabel>
        <LabelTextLarge>Habit Details</LabelTextLarge>
      </ScreenLabel>
      <TabBar activeTab={activeTab} onSelect={handleSelectTab} />
      {activeTab === 'calendar' && <HabitCalendar selectedHabit={selectedHabit} />}
      {activeTab === 'statistics' && <HabitStatistics selectedHabit={selectedHabit} />}
      {activeTab === 'edit' && (
        <EditHabit habits={habits} selectedHabit={selectedHabit} />
      )}
      <StatusBar style="light" />
    </Container>
  );
};

const Container = styled(SafeAreaView, {
  flex: 1,
  backgroundColor: '#111111',
});

const ScreenLabel = styled(View, {
  alignSelf: 'flex-start',
  paddingHorizontal: 12,
  paddingVertical: 8,
  marginLeft: 8,
  marginBottom: 8,
  borderRadius: 6,
  backgroundColor: '#262626',
});

const LabelTextLarge = styled(Text, {
  fontSize: 18,
  fontWeight: 'bold',
});

export default HabitDetailsScreen;
