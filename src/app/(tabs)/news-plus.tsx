import { StyleSheet, View, Text } from "react-native";

export default function NewsPlusScreen() {
  return (
    <View style={styles.container}>
      <Text>News Plus Screen</Text>
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
