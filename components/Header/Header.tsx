import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import {
  Image,
  Platform,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";

const PRIMARY = "#1D8C9C";

export default function Header() {
  return (
    <>
      <StatusBar backgroundColor={PRIMARY} barStyle="light-content" />

      <View style={styles.container}>
        {/* ================= LEFT (LOGO ONLY) ================= */}
        <View style={styles.leftContainer}>
          <Image
            source={require("@/assets/images/logo.png")}
            style={styles.logo}
            resizeMode="contain"
          />
        </View>

        {/* ================= RIGHT (ICONS) ================= */}
        <View style={styles.right}>
          {/* NOTIFICATION */}
          <TouchableOpacity
            style={styles.iconBtn}
            activeOpacity={0.8}
            onPress={() =>
              router.push("/rescenseur/Notification" as any)
            }
          >
            <Ionicons
              name="notifications-outline"
              size={22}
              color="#fff"
            />

            <View style={styles.dot} />
          </TouchableOpacity>

          {/* PROFILE */}
          <TouchableOpacity
            style={styles.profileBtn}
            activeOpacity={0.8}
            onPress={() =>
              router.push("/rescenseur/ProfilScreen" as any)
            }
          >
            <Ionicons name="person-circle" size={34} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingTop:
      Platform.OS === "android"
        ? (StatusBar.currentHeight || 0) + 15
        : 55,
    paddingHorizontal: 20,
    paddingBottom: 18,

    backgroundColor: PRIMARY,

    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.12,
    shadowRadius: 10,
    elevation: 8,
  },

  // LEFT
  leftContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  logo: {
    width: 50,
    height: 50,
  },

  // RIGHT
  right: {
    flexDirection: "row",
    alignItems: "center",
  },

  iconBtn: {
    width: 46,
    height: 46,
    borderRadius: 23,
    backgroundColor: "rgba(255,255,255,0.18)",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
    position: "relative",
  },

  dot: {
    position: "absolute",
    top: 10,
    right: 11,
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#ef4444",
    borderWidth: 2,
    borderColor: PRIMARY,
  },

  profileBtn: {
    justifyContent: "center",
    alignItems: "center",
  },
});