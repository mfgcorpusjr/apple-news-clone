import { useState } from "react";
import { StyleSheet, View, Text, Image } from "react-native";

import FollowButton from "@/components/FollowButton";

import { Magazine as TMagazine } from "@/types";

type MagazineProps = {
  magazine: TMagazine;
};

export default function Magazine({ magazine }: MagazineProps) {
  const [isFollowing, setIsFollowing] = useState(magazine.isFollowing);

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: magazine.image }} />

      <View style={{ gap: 4 }}>
        <Text style={styles.title}>{magazine.title}</Text>

        <FollowButton
          isFollowing={isFollowing}
          onPress={() => setIsFollowing((v) => !v)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxWidth: "50%",
    gap: 8,
    marginBottom: 12,
  },
  image: {
    flex: 1,
    aspectRatio: 3 / 4,
    borderRadius: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
  },
});
