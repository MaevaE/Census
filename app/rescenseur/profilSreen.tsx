import { Image, StyleSheet, Text, View } from "react-native";

export default function ProfilScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://i.pravatar.cc/150",
        }}
        style={styles.image}
      />

      <Text style={styles.name}>Maeva Ewolo</Text>

      <Text style={styles.info}>Rôle : Rescenseur</Text>

      <Text style={styles.info}>
        Email : maeva@gmail.com
      </Text>

      <Text style={styles.info}>
        Téléphone : 670000000
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 50,
    backgroundColor: "#fff",
  },

  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
  },

  name: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 10,
  },

  info: {
    fontSize: 18,
    marginBottom: 10,
  },
});