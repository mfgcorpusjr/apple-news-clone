import { StyleSheet, View, Text } from "react-native";

type SectionHeaderProps = {
  title: string;
};

export default function SectionHeader({ title }: SectionHeaderProps) {
  let subTitle = "";
  let color = "orange";

  if (title === "Top Stories") {
    subTitle = "Chosen by the Apple News editors";
    color = "orangered";
  }
  if (title === "For You") {
    subTitle = "Recommendations based on topics & channels you read";
    color = "green";
  }

  return (
    <View style={styles.container}>
      <Text style={[styles.title, { color }]}>{title}</Text>
      {subTitle && <Text style={styles.subTitle}>{subTitle}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: "800",
  },
  subTitle: {
    color: "grey",
  },
});
