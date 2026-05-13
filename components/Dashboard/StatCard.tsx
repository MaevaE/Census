import { StyleSheet, Text, View } from "react-native";
import Colors from "../../constants/colors";

interface Props {
  title: string;
  value: string;
}

export default function StatCard({ title, value }: Props) {
  return (
    <View style={styles.card}>
      <Text style={styles.value}>{value}</Text>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.white,
    padding: 20,
    borderRadius: 20,
    marginBottom: 15,
    elevation: 3,
     },
  value: {
    fontSize: 28,
    fontWeight: "bold",
    color: Colors.primary,
  },
  title: {
    marginTop: 5,
    color: Colors.gray,
    fontSize: 16,
  },
});