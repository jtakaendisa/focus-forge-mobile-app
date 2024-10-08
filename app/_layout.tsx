import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { TamaguiProvider, View } from 'tamagui';

import { LogBox } from 'react-native';
import config from '../tamagui.config';
import { useAuth } from './hooks/useAuth';
import useCompletionDates from './hooks/useCompletionDates';
import useCustomColors from './hooks/useCustomColors';

LogBox.ignoreAllLogs(true); // Ignore all logs (warnings and errors)

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const { loadedAuth } = useAuth();

  const { loadedCompletionDates } = useCompletionDates();

  const [loadedFonts, error] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterLight: require('@tamagui/font-inter/otf/Inter-Light.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
  });

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loadedFonts && loadedAuth && loadedCompletionDates) {
      SplashScreen.hideAsync();
    }
  }, [loadedFonts, loadedAuth]);

  if (!loadedFonts || !loadedAuth || !loadedCompletionDates) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const { customBlack1 } = useCustomColors();

  return (
    <TamaguiProvider config={config}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <View style={{ flex: 1, backgroundColor: customBlack1 }}>
          <BottomSheetModalProvider>
            <Stack
              screenOptions={{
                headerShown: false,
                contentStyle: { backgroundColor: customBlack1 },
              }}
            >
              <Stack.Screen name="onboarding" />
              <Stack.Screen name="(auth)" />
              <Stack.Screen name="(drawer)" />
              <Stack.Screen name="newHabit" options={{ presentation: 'modal' }} />
              <Stack.Screen name="newTask" options={{ presentation: 'modal' }} />
              <Stack.Screen name="habitDetails" options={{ presentation: 'modal' }} />
              <Stack.Screen name="taskDetails" options={{ presentation: 'modal' }} />
            </Stack>
            <StatusBar style="light" />
          </BottomSheetModalProvider>
        </View>
      </GestureHandlerRootView>
    </TamaguiProvider>
  );
}
