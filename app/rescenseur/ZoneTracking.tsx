import * as Location from "expo-location";
import { useEffect, useState } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import MapView, { Marker } from "react-native-maps";

export default function ZoneTrackingScreen() {
  const [location, setLocation] = useState<any>(null);

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== "granted") return;

      const loc = await Location.getCurrentPositionAsync({});
      setLocation(loc.coords);
    })();
  }, []);

  // 🌐 VERSION WEB (fallback)
  if (Platform.OS === "web") {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          Carte indisponible sur Web
        </Text>

        <Text style={styles.text}>
          Utilise Android / iOS pour voir la géolocalisation temps réel du recenseur.
        </Text>

        <iframe
          width="100%"
          height="400"
          style={{ border: 0, borderRadius: 16 }}
          src={`https://www.openstreetmap.org/export/embed.html?bbox=9.7,4.0,9.9,4.2&layer=mapnik`}
        />
      </View>
    );
  }

  // 📱 VERSION MOBILE (Android/iOS)
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Zone du recenseur
      </Text>

      {location && (
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}
        >
          <Marker
            coordinate={{
              latitude: location.latitude,
              longitude: location.longitude,
            }}
            title="Position recenseur"
          />
        </MapView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: "#f8fafc",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  text: {
    marginBottom: 15,
    color: "#64748b",
  },
  map: {
    flex: 1,
    borderRadius: 16,
  },
});