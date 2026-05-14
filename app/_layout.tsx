// import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
// import { Stack } from 'expo-router';
// import { StatusBar } from 'expo-status-bar';
// import 'react-native-reanimated';

// import { useColorScheme } from '@/hooks/use-color-scheme';

// export const unstable_settings = {
//   anchor: '(tabs)',
// };

// export default function RootLayout() {
//   const colorScheme = useColorScheme();

//   return (
//     <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
//       <Stack>
//         <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
//         <Stack.Screen name="modal" options={{ presentation: 'modal', title: 'Modal' }} />
//         <Stack.Screen name="signup" />
//       <Stack.Screen name="dashboard" />
//       </Stack>
      
//       <StatusBar style="auto" />
//     </ThemeProvider>
//   );
// }


// // export default function RootLayout() {
// //   return (
//     // <Stack
//     //   screenOptions={{
//     //     headerShown: false,
//     //     animation: 'fade',
//     //   }}
//     // >
//     //   <Stack.Screen 
//     //     name="index" 
//     //     options={{
//     //       title: 'Welcome',
//     //     }}
//     //   />
//     // </Stack>
// //   );
// // }


// import { Stack } from 'expo-router';

// export default function RootLayout() {
//   return (
//     <Tabs
//       screenOptions={{
//         tabBarActiveTintColor: '#1D8C9C',
//         tabBarInactiveTintColor: '#999',
//         tabBarStyle: {
//           backgroundColor: '#FFFFFF',
//           borderTopColor: '#EEEEEE',
//           height: Platform.OS === 'ios' ? 85 : 65,
//           paddingBottom: Platform.OS === 'ios' ? 25 : 8,
//           paddingTop: 8,
//         },
//         tabBarLabelStyle: {
//           fontSize: 11,
//           fontWeight: '500',
//         },
//         headerShown: false,
//       }}
//     >
//       <Tabs.Screen
//         name="home"
//         options={{
//           title: 'Home',
//           tabBarIcon: ({ color, size }) => (
//             <Feather name="home" size={size} color={color} />
//           ),
//         }}
//       />
      
//       <Tabs.Screen
//         name="form"
//         options={{
//           title: 'Form',
//           tabBarIcon: ({ color, size }) => (
//             <Feather name="file-text" size={size} color={color} />
//           ),
//         }}
//       />
      
//       <Tabs.Screen
//         name="send"
//         options={{
//           title: 'Send',
//           tabBarIcon: ({ color, size }) => (
//             <Feather name="send" size={size} color={color} />
//           ),
//         }}
//       />
      
//       <Tabs.Screen
//         name="settings"
//         options={{
//           title: 'Settings',
//           tabBarIcon: ({ color, size }) => (
//             <Feather name="settings" size={size} color={color} />
//           ),
//         }}
//       />
//     </Tabs>
//     <Stack>
//       {/* Les onglets (bottom nav) */}
//       <Stack.Screen 
//         name="onboarding" 
//         options={{ 
//           headerShown: false,
//           animation: 'fade',
//         }} 
//       />
//       <Stack.Screen 
//         name="(tabs)" 
//         options={{ headerShown: false }} 
//       />
      
//       {/* Écrans d'authentification (sans bottom nav) */}
      
//       {/* <Stack.Screen 
//         name="auth/signup" 
//         options={{ 
//           headerShown: false,
//           presentation: 'card',
//           title: 'Inscription'
//         }} 
//       /> */}

//       <Stack.Screen 
//         name="auth/signupHabitant" 
//         options={{ 
//           headerShown: false,
//           presentation: 'card',
//           title: 'Inscri'
//         }} 
//       />
      
//       <Stack.Screen 
//         name="dashboard" 
//         options={{ 
//           headerShown: false,
//           title: 'Dashboard'
//         }} 
//       />
//     </Stack>
//   );
// }

// import { Stack } from 'expo-router';
// import { Platform } from 'react-native';

// export default function RootLayout() {
//   return (
//     <Stack>
//       {/* Écran d'onboarding */}
//       <Stack.Screen 
//         name="onboarding" 
//         options={{ 
//           headerShown: false,
//           animation: 'fade',
//         }} 
//       />
      
//       {/* Écrans avec bottom navigation (tabs) */}
//       <Stack.Screen 
//         name="(tabs)" 
//         options={{ 
//           headerShown: false,
//         }} 
//       />
      
//       {/* Écrans d'authentification (sans bottom nav) */}
//       <Stack.Screen 
//         name="auth/signupHabitant" 
//         options={{ 
//           headerShown: false,
//           presentation: 'card',
//         }} 
//       />
      
//       <Stack.Screen 
//         name="dashboard" 
//         options={{ 
//           headerShown: false,
//         }} 
//       />
//     </Stack>
//   );
// }


import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      {/* Écran d'onboarding */}
      <Stack.Screen 
        name="onboarding" 
        options={{ 
          headerShown: false,
          animation: 'fade',
        }} 
      />
      
      {/* Écrans avec bottom navigation (tabs) */}
      <Stack.Screen 
        name="(tabs)" 
        options={{ 
          headerShown: false,
        }} 
      />
      
      {/* Écrans d'authentification (sans bottom nav) */}
      <Stack.Screen 
        name="signupHabitant" 
        options={{ 
          headerShown: false,
          presentation: 'card',
        }} 
      />
      
      <Stack.Screen 
        name="dashboard" 
        options={{ 
          headerShown: false,
        }} 
      />
    </Stack>
  );
}