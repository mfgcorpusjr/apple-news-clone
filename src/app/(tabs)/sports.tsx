import { StyleSheet, View, Text } from "react-native";

export default function SportsScreen() {
  return (
    <View style={styles.container}>
      <Text>Sports Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
