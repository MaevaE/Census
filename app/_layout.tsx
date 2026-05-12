import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="rescenseur/dashboard"
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="rescenseur/menages"
        options={{ title: "Ménages" }}
      />

      <Stack.Screen
        name="rescenseur/ajouter-menage"
        options={{ title: "Ajouter un ménage" }}
      />

      <Stack.Screen
        name="rescenseur/statistiques"
        options={{ title: "Statistiques" }}
      />

      <Stack.Screen
        name="rescenseur/profil"
        options={{ title: "Profil" }}
      />
      
    </Stack>
  );
}