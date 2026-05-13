import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="rescenseur/dashboard" />
      <Stack.Screen name="rescenseur/recensement" />
    </Stack>
  );
}