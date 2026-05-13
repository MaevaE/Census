import { Ionicons } from "@expo/vector-icons";
import { usePathname, useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const PRIMARY = "#1D8C9C";

export default function BottomNavbar() {
  const router = useRouter();
  const pathname = usePathname();

  const tabs = [
    { label: "Accueil", icon: "home", route: "/rescenseur/dashboard" },
    { label: "Mission", icon: "map-outline", route: "/rescenseur/MissionScreen" },
    { label: "Synchronisation",  icon: "sync-outline", route: "/rescenseur/Sync" },
    { label: "Formulaire", icon: "create", route: "/rescenseur/recensement" },
  ];

  return (
    <View style={styles.container}>
      {tabs.map((tab, i) => {
        const active = pathname === tab.route;

        return (
          <TouchableOpacity
            key={i}
            style={styles.navItem}
            onPress={() => router.push(tab.route as any)}
          >
            <View
              style={[
                styles.iconBox,
                active && styles.iconBoxActive,
              ]}
            >
              <Ionicons
                name={tab.icon as any}
                size={22}
                color={active ? "#fff" : "#64748b"}
              />
            </View>

            <Text
              style={[
                styles.label,
                active && styles.labelActive,
              ]}
            >
              {tab.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 18,
    left: 15,
    right: 15,

    flexDirection: "row",
    justifyContent: "space-around",

    backgroundColor: "#fff",
    borderRadius: 25,
    paddingVertical: 12,

    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 8,
  },

  navItem: {
    alignItems: "center",
  },

  iconBox: {
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: "center",
    alignItems: "center",
  },

  iconBoxActive: {
    backgroundColor: PRIMARY,
  },

  label: {
    marginTop: 4,
    fontSize: 11,
    color: "#64748b",
  },

  labelActive: {
    color: PRIMARY,
    fontWeight: "600",
  },
});