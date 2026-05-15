import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>

      {/* Onboarding */}
      <Stack.Screen
        name="onboarding"
        options={{
          animation: "fade",
        }}
      />

      {/* Tabs Navigation */}
      <Stack.Screen
        name="(tabs)"
      />

      {/* Auth */}
      <Stack.Screen
        name="signupHabitant"
        options={{
          presentation: "card",
        }}
      />

      {/* Dashboard */}
      <Stack.Screen
        name="dashboard"
      />

      {/* Recenseur */}
      <Stack.Screen
        name="rescenseur/dashboard"
      />

      <Stack.Screen
        name="rescenseur/recensement"
      />

    </Stack>
  );
}