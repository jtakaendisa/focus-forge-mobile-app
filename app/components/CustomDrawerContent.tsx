import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import { router, usePathname } from 'expo-router';
import { StyleSheet, View, Image, Text } from 'react-native';
import { TabRoute } from '../entities';
import DrawerItemIcon from './tabs/DrawerItemIcon';
import { useAuthStore } from '../store';

const CustomDrawerContent = (props: DrawerContentComponentProps) => {
  const pathname = (usePathname().substring(1) || 'home') as TabRoute;

  const authUser = useAuthStore((s) => s.authUser);

  const isCurrentScreenHome = pathname === 'home';
  const isCurrentScreenHabits = pathname === 'habits';
  const isCurrentScreenTasks = pathname === 'tasks';
  const isCurrentScreenTimer = pathname === 'timer';
  const isCurrentScreenSettings = pathname === 'settings';

  const routes = [
    {
      label: 'Home',
      icon: 'home',
      isSelected: isCurrentScreenHome,
      onNavigate: () => router.push('/(drawer)/(tabs)'),
    },
    {
      label: 'Habits',
      icon: 'habits',
      isSelected: isCurrentScreenHabits,
      onNavigate: () => router.push('/(drawer)/(tabs)/habits'),
    },
    {
      label: 'Tasks',
      icon: 'tasks',
      isSelected: isCurrentScreenTasks,
      onNavigate: () => router.push('/(drawer)/(tabs)/tasks'),
    },
    {
      label: 'Timer',
      icon: 'timer',
      isSelected: isCurrentScreenTimer,
      onNavigate: () => router.push('/(drawer)/(tabs)/timer'),
    },
    {
      label: 'Settings',
      icon: 'settings',
      isSelected: isCurrentScreenSettings,
      onNavigate: () => router.push('/(drawer)/(tabs)/settings'),
    },
  ] as const;

  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.profileContainer}>
        <View style={styles.photoContainer}>
          <Image source={require('@/assets/images/avatar.jpg')} style={styles.photo} />
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.username}>
            {authUser?.username || authUser?.displayName || 'User'}
          </Text>
          <Text style={styles.email}>{authUser?.email}</Text>
        </View>
      </View>
      {routes.map((route) => {
        const { icon, label, isSelected, onNavigate } = route;

        return (
          <DrawerItem
            key={label}
            pressColor="#652533"
            icon={({ size }) => (
              <View style={styles.iconContainer}>
                <DrawerItemIcon
                  icon={icon}
                  size={size}
                  fill={isSelected ? '#C73A57' : '#8C8C8C'}
                />
              </View>
            )}
            label={label}
            labelStyle={[styles.label, { color: isSelected ? '#C73A57' : '#8C8C8C' }]}
            style={[
              styles.drawerItem,
              {
                backgroundColor: isSelected ? '#652533' : 'transparent',
              },
            ]}
            onPress={onNavigate}
          />
        );
      })}
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    marginBottom: 24,
    paddingHorizontal: 12,
    paddingVertical: 24,
    borderBottomWidth: 1,
    borderColor: '#262626',
  },
  photoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: '#fff',
    overflow: 'hidden',
  },
  infoContainer: {
    gap: 4,
  },
  username: {
    fontSize: 20,
    color: '#fff',
  },
  email: {
    fontSize: 14,
    color: '#8C8C8C',
  },
  photo: {
    width: 80,
    height: 80,
  },
  drawerItem: {
    borderRadius: 200,
    marginHorizontal: 12,
    marginVertical: 0,
  },
  iconContainer: {
    paddingLeft: 12,
  },
  label: { fontSize: 16, marginLeft: -20 },
});

export default CustomDrawerContent;
