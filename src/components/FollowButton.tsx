import { StyleSheet, Pressable, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

type FollowButtonProps = {
  isFollowing?: boolean;
  onPress: () => void;
};

export default function FollowButton({
  isFollowing,
  onPress,
}: FollowButtonProps) {
  return (
    <Pressable
      style={[styles.container, !isFollowing && styles.followContainer]}
      onPress={onPress}
    >
      {isFollowing && (
        <Ionicons name="checkmark-outline" size={20} color="grey" />
      )}

      <Text
        style={[
          styles.text,
          isFollowing ? styles.followingText : styles.followText,
        ]}
      >
        {isFollowing ? "Following" : "Follow"}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    height: 20,
  },
  followContainer: {
    borderWidth: 1,
    borderColor: "orangered",
    borderRadius: 50,
    paddingHorizontal: 12,
    alignSelf: "flex-start",
  },
  text: {
    fontSize: 12,
    fontWeight: "600",
    textTransform: "uppercase",
  },
  followingText: {
    color: "grey",
  },
  followText: {
    color: "orangered",
  },
});
