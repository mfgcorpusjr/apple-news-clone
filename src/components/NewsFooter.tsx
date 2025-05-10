import { StyleSheet, View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { formatDistanceToNow } from "date-fns";

import { Author } from "@/types";

type NewsFooterProps = {
  createdAt: string;
  author: Author;
};

export default function NewsFooter({ createdAt, author }: NewsFooterProps) {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          {formatDistanceToNow(createdAt, { addSuffix: true })}
        </Text>
        <Text style={styles.text}>&middot;</Text>
        <Text style={styles.text}>{author.name}</Text>
      </View>

      <Ionicons
        style={styles.icon}
        name="ellipsis-horizontal-sharp"
        size={24}
        color="grey"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  textContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  text: {
    color: "grey",
    fontSize: 12,
    fontWeight: "500",
  },
  icon: {
    marginLeft: "auto",
  },
});
