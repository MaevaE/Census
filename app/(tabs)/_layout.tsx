// import { Tabs } from 'expo-router';
// import React from 'react';

// import { HapticTab } from '@/components/haptic-tab';
// import { IconSymbol } from '@/components/ui/icon-symbol';
// import { Colors } from '@/constants/theme';
// import { useColorScheme } from '@/hooks/use-color-scheme';

// export default function TabLayout() {
//   const colorScheme = useColorScheme();

//   return (
//     <Tabs
//       screenOptions={{
//         tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
//         headerShown: false,
//         tabBarButton: HapticTab,
//       }}>
//       <Tabs.Screen
//         name="index"
//         options={{
//           title: 'Home',
//           tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
//         }}
//       />
//       <Tabs.Screen
//         name="explore"
//         options={{
//           title: 'Explore',
//           tabBarIcon: ({ color }) => <IconSymbol size={28} name="paperplane.fill" color={color} />,
//         }}
//       />
//     </Tabs>
//   );
// }

// import { Feather } from '@expo/vector-icons';
// import { Tabs } from 'expo-router';
// import { Platform } from 'react-native';

// export default function TabsLayout() {
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
//   );
// }


import { Feather } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import { Platform } from 'react-native';

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#1D8C9C',
        tabBarInactiveTintColor: '#999',
        tabBarStyle: {
          backgroundColor: '#FFFFFF',
          borderTopColor: '#EEEEEE',
          height: Platform.OS === 'ios' ? 85 : 65,
          paddingBottom: Platform.OS === 'ios' ? 25 : 8,
          paddingTop: 8,
        },
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: '500',
        },
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size, focused }) => (
            <Feather 
              name={focused ? "home" : "home"} 
              size={size} 
              color={focused ? '#1D8C9C' : '#999'} 
            />
          ),
        }}
      />
      
      <Tabs.Screen
        name="form"
        options={{
          title: 'Form',
          tabBarIcon: ({ color, size, focused }) => (
            <Feather 
              name={focused ? "file-text" : "file-text"} 
              size={size} 
              color={focused ? '#1D8C9C' : '#999'} 
            />
          ),
        }}
      />
      
      <Tabs.Screen
        name="send"
        options={{
          title: 'Send',
          tabBarIcon: ({ color, size, focused }) => (
            <Feather 
              name={focused ? "send" : "send"} 
              size={size} 
              color={focused ? '#1D8C9C' : '#999'} 
            />
          ),
        }}
      />
      
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          tabBarIcon: ({ color, size, focused }) => (
            <Feather 
              name={focused ? "settings" : "settings"} 
              size={size} 
              color={focused ? '#1D8C9C' : '#999'} 
            />
          ),
        }}
      />
    </Tabs>
  );
}