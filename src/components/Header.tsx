import { StyleSheet, View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

type HeaderProps = {
  title: string;
  subTitle: string;
};

export default function Header({ title, subTitle }: HeaderProps) {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Ionicons name="logo-apple" size={40} color="black" />
        <Text style={styles.text}>{title}</Text>
      </View>

      <Text style={[styles.text, { color: "grey" }]}>{subTitle}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 24,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
  },
  text: {
    fontSize: 28,
    fontWeight: "800",
  },
});
