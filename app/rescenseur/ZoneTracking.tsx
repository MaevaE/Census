import { Ionicons } from "@expo/vector-icons";
import * as Location from "expo-location";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";

import {
  ActivityIndicator,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import MapView, {
  Circle,
  Marker,
  Polyline,
} from "react-native-maps";

const PRIMARY = "#1D8C9C";

export default function ZoneTrackingScreen() {
  const router = useRouter();

  const [location, setLocation] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const [routeCoords, setRouteCoords] = useState<any[]>([]);

  // =========================
  // ZONE ASSIGNÉE
  // =========================

  const assignedZone = {
    zoneName: "Zone A12",
    city: "Yaoundé",
    district: "Bastos",
    supervisor: "M. Ndzi",
    households: 128,
    completed: 42,

    latitude: 3.8936,
    longitude: 11.5167,

    radius: 500,
  };

  useEffect(() => {
    let subscriber: any;

    const startTracking = async () => {
      try {
        const { status } =
          await Location.requestForegroundPermissionsAsync();

        if (status !== "granted") {
          alert("Permission GPS refusée");
          return;
        }

        subscriber =
          await Location.watchPositionAsync(
            {
              accuracy:
                Location.Accuracy.High,
              timeInterval: 5000,
              distanceInterval: 5,
            },
            (newLocation) => {
              const coords = newLocation.coords;

              setLocation(coords);

              setRouteCoords((prev) => [
                ...prev,
                {
                  latitude: coords.latitude,
                  longitude: coords.longitude,
                },
              ]);
            }
          );
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    startTracking();

    return () => {
      if (subscriber) {
        subscriber.remove();
      }
    };
  }, []);

  // =========================
  // LOADING
  // =========================

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator
          size="large"
          color={PRIMARY}
        />

        <Text style={styles.loadingText}>
          Chargement de la mission...
        </Text>
      </View>
    );
  }

  // =========================
  // MAIN UI
  // =========================

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      {/* ================= TOP BAR ================= */}

      <View style={styles.topBar}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Ionicons
            name="arrow-back"
            size={24}
            color="#0f172a"
          />
        </TouchableOpacity>

        <View>
          <Text style={styles.pageTitle}>
            Mission Active
          </Text>

          <Text style={styles.pageSubtitle}>
            Suivi GPS du recenseur
          </Text>
        </View>
      </View>

      {/* ================= ZONE CARD ================= */}

      <View style={styles.zoneCard}>
        <View style={styles.zoneHeader}>
          <View>
            <Text style={styles.zoneLabel}>
              Zone assignée
            </Text>

            <Text style={styles.zoneName}>
              {assignedZone.zoneName}
            </Text>
          </View>

          <View style={styles.badge}>
            <Text style={styles.badgeText}>
              ACTIF
            </Text>
          </View>
        </View>

        <View style={styles.infoRow}>
          <View style={styles.infoItem}>
            <Ionicons
              name="business-outline"
              size={18}
              color={PRIMARY}
            />

            <Text style={styles.infoTitle}>
              Ville
            </Text>

            <Text style={styles.infoValue}>
              {assignedZone.city}
            </Text>
          </View>

          <View style={styles.infoItem}>
            <Ionicons
              name="location-outline"
              size={18}
              color={PRIMARY}
            />

            <Text style={styles.infoTitle}>
              Quartier
            </Text>

            <Text style={styles.infoValue}>
              {assignedZone.district}
            </Text>
          </View>
        </View>

        <View style={styles.progressSection}>
          <View style={styles.progressTop}>
            <Text style={styles.progressLabel}>
              Progression
            </Text>

            <Text style={styles.progressValue}>
              {assignedZone.completed}/
              {assignedZone.households}
            </Text>
          </View>

          <View style={styles.progressBar}>
            <View
              style={[
                styles.progressFill,
                {
                  width: `${
                    (assignedZone.completed /
                      assignedZone.households) *
                    100
                  }%`,
                },
              ]}
            />
          </View>
        </View>
      </View>

      {/* ================= GPS STATUS ================= */}

      <View style={styles.gpsCard}>
        <View style={styles.gpsLeft}>
          <View style={styles.liveDot} />

          <Text style={styles.gpsText}>
            GPS connecté
          </Text>
        </View>

        <Text style={styles.coordText}>
          {location?.latitude?.toFixed(4)}
          {"  •  "}
          {location?.longitude?.toFixed(4)}
        </Text>
      </View>

      {/* ================= MAP ================= */}

      <View style={styles.mapWrapper}>
        <MapView
          style={styles.map}
          showsUserLocation
          showsMyLocationButton
          mapType="standard"
          initialRegion={{
            latitude:
              assignedZone.latitude,
            longitude:
              assignedZone.longitude,
            latitudeDelta: 0.008,
            longitudeDelta: 0.008,
          }}
        >
          {/* ZONE */}

          <Circle
            center={{
              latitude:
                assignedZone.latitude,
              longitude:
                assignedZone.longitude,
            }}
            radius={assignedZone.radius}
            strokeWidth={2}
            strokeColor="rgba(29,140,156,0.9)"
            fillColor="rgba(29,140,156,0.15)"
          />

          {/* CENTRE */}

          <Marker
            coordinate={{
              latitude:
                assignedZone.latitude,
              longitude:
                assignedZone.longitude,
            }}
            title={assignedZone.zoneName}
            description={
              assignedZone.district
            }
            pinColor="#ef4444"
          />

          {/* USER */}

          {location && (
            <Marker
              coordinate={{
                latitude:
                  location.latitude,
                longitude:
                  location.longitude,
              }}
              title="Votre position"
              description="Recenseur actif"
              pinColor={PRIMARY}
            />
          )}

          {/* TRAJET */}

          {routeCoords.length > 1 && (
            <Polyline
              coordinates={routeCoords}
              strokeWidth={5}
              strokeColor={PRIMARY}
            />
          )}
        </MapView>
      </View>

      {/* ================= BUTTONS ================= */}

      <View style={styles.bottomActions}>
        <TouchableOpacity
          style={styles.primaryButton}
        >
          <Ionicons
            name="play"
            size={20}
            color="#fff"
          />

          <Text style={styles.primaryText}>
            Continuer
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.secondaryButton}
        >
          <Ionicons
            name="checkmark-done"
            size={20}
            color={PRIMARY}
          />

          <Text style={styles.secondaryText}>
            Terminer
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F8FA",
  },

  loaderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },

  loadingText: {
    marginTop: 14,
    color: "#64748b",
    fontSize: 15,
  },

  topBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: PRIMARY,
    paddingHorizontal: 16,
    paddingTop: 50,
    paddingBottom: 18,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },

  backButton: {
    width: 46,
    height: 46,
    borderRadius: 23,
    backgroundColor: "#fff",

    justifyContent: "center",
    alignItems: "center",

    marginRight: 15,

    elevation: 4,
  },

  pageTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#fff",
  },

  pageSubtitle: {
    fontSize: 12,
    color: "#d1f7ff",
    marginTop: 2,
  },

  zoneCard: {
    backgroundColor: "#fff",
    marginHorizontal: 18,
    borderRadius: 28,
    padding: 22,
    elevation: 4,
  },

  zoneHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  zoneLabel: {
    color: "#64748b",
    fontSize: 13,
  },

  zoneName: {
    marginTop: 5,
    fontSize: 28,
    fontWeight: "700",
    color: "#0f172a",
  },

  badge: {
    backgroundColor: "#dcfce7",
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 30,
  },

  badgeText: {
    color: "#16a34a",
    fontWeight: "700",
    fontSize: 12,
  },

  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 24,
  },

  infoItem: {
    width: "48%",
    backgroundColor: "#f8fafc",
    borderRadius: 18,
    padding: 16,
  },

  infoTitle: {
    marginTop: 8,
    color: "#64748b",
    fontSize: 13,
  },

  infoValue: {
    marginTop: 5,
    fontWeight: "700",
    fontSize: 15,
    color: "#0f172a",
  },

  progressSection: {
    marginTop: 24,
  },

  progressTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },

  progressLabel: {
    color: "#64748b",
    fontWeight: "600",
  },

  progressValue: {
    color: "#0f172a",
    fontWeight: "700",
  },

  progressBar: {
    height: 12,
    backgroundColor: "#e2e8f0",
    borderRadius: 20,
    overflow: "hidden",
  },

  progressFill: {
    height: "100%",
    backgroundColor: PRIMARY,
  },

  gpsCard: {
    marginHorizontal: 18,
    marginTop: 16,
    marginBottom: 16,

    backgroundColor: "#0f172a",
    borderRadius: 22,

    paddingHorizontal: 18,
    paddingVertical: 16,

    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  gpsLeft: {
    flexDirection: "row",
    alignItems: "center",
  },

  liveDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#22c55e",
    marginRight: 10,
  },

  gpsText: {
    color: "#fff",
    fontWeight: "600",
  },

  coordText: {
    color: "#cbd5e1",
    fontSize: 12,
  },

  mapWrapper: {
    flex: 1,
    marginHorizontal: 18,
    borderRadius: 30,
    overflow: "hidden",
    elevation: 6,
    marginBottom: 12,
  },

  map: {
    flex: 1,
  },

  bottomActions: {
    flexDirection: "row",
    paddingHorizontal: 18,
    paddingBottom: 18,
    gap: 12,
  },

  primaryButton: {
    flex: 1,
    backgroundColor: PRIMARY,
    borderRadius: 20,
    paddingVertical: 18,

    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },

  primaryText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 15,
  },

  secondaryButton: {
    flex: 1,
    borderWidth: 1.5,
    borderColor: PRIMARY,
    borderRadius: 20,
    paddingVertical: 18,

    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,

    backgroundColor: "#fff",
  },

  secondaryText: {
    color: PRIMARY,
    fontWeight: "700",
    fontSize: 15,
  },
});