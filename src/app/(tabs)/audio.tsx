import { StyleSheet, View, Text } from "react-native";

export default function AudioScreen() {
  return (
    <View style={styles.container}>
      <Text>Audio Screen</Text>
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
