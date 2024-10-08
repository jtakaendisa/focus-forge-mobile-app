import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import { router, usePathname } from 'expo-router';
import { Image, StyleSheet, Text, View } from 'react-native';
import { TabRoute } from '../entities';
import useCustomColors from '../hooks/useCustomColors';
import { useAuthStore } from '../store';
import DrawerItemIcon from './tabs/DrawerItemIcon';

const CustomDrawerContent = (props: DrawerContentComponentProps) => {
  const pathname = (usePathname().substring(1) || 'home') as TabRoute;

  const authUser = useAuthStore((s) => s.authUser);

  const { customGray1, customRed1, customRed4 } = useCustomColors();

  const routes = [
    {
      label: 'Home',
      icon: 'home',
      isSelected: pathname === 'home',
      onNavigate: () => router.push('/(drawer)/(tabs)'),
    },
    {
      label: 'Habits',
      icon: 'habits',
      isSelected: pathname === 'habits',
      onNavigate: () => router.push('/(drawer)/(tabs)/habits'),
    },
    {
      label: 'Tasks',
      icon: 'tasks',
      isSelected: pathname === 'tasks',
      onNavigate: () => router.push('/(drawer)/(tabs)/tasks'),
    },
    {
      label: 'Timer',
      icon: 'timer',
      isSelected: pathname === 'timer',
      onNavigate: () => router.push('/(drawer)/(tabs)/timer'),
    },
    {
      label: 'Settings',
      icon: 'settings',
      isSelected: pathname === 'settings',
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

        const color = isSelected ? customRed1 : customGray1;
        const backgroundColor = isSelected ? customRed4 : 'transparent';

        return (
          <DrawerItem
            key={label}
            pressColor={customRed4}
            icon={({ size }) => (
              <View style={styles.iconContainer}>
                <DrawerItemIcon
                  icon={icon}
                  size={size}
                  fill={color}
                  variant={isSelected ? 'solid' : 'outline'}
                />
              </View>
            )}
            label={label}
            labelStyle={[styles.label, { color }]}
            style={[
              styles.drawerItem,
              {
                backgroundColor,
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
    borderColor: 'white',
    overflow: 'hidden',
  },
  infoContainer: {
    gap: 4,
  },
  username: {
    fontSize: 20,
    color: 'white',
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
