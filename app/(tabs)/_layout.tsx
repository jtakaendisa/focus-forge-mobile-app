import { Pressable } from 'react-native';
import { Link, Redirect, Tabs } from 'expo-router';
import AntDesign from '@expo/vector-icons/AntDesign';

import { useAuthStore } from '../store';

function TabBarIcon(props: {
  name: React.ComponentProps<typeof AntDesign>['name'];
  color: string;
}) {
  return <AntDesign size={28} style={{ marginBottom: -3 }} {...props} />;
}

const TabLayout = () => {
  const authUser = useAuthStore((s) => s.authUser);

  if (!authUser) {
    return <Redirect href="/(auth)" />;
  }

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#000',
        headerTitleAlign: 'center',
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
          headerRight: () => (
            <Link href="/" asChild>
              <Pressable>
                {({ pressed }) => (
                  <AntDesign
                    name="infocirlceo"
                    size={24}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="todo"
        options={{
          title: 'Todos',
          tabBarIcon: ({ color }) => <TabBarIcon name="checksquareo" color={color} />,
        }}
      />
      <Tabs.Screen
        name="timer"
        options={{
          title: 'Timer',
          tabBarIcon: ({ color }) => <TabBarIcon name="clockcircleo" color={color} />,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          tabBarIcon: ({ color }) => <TabBarIcon name="setting" color={color} />,
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
