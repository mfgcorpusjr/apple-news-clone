import { useState } from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Header from "@/components/Header";
import Magazine from "@/components/Magazine";

import featuredMagazines from "@assets/data/featured-magazines.json";
import newestMagazines from "@assets/data/newest-magazines.json";
import popularMagazines from "@assets/data/popular-magazines.json";

type MagazineType = "featured" | "newest" | "popular";

export default function NewsPlusScreen() {
  const [selectedMagazineType, setSelectedMagazineType] =
    useState<MagazineType>("featured");

  const magazines =
    selectedMagazineType === "featured"
      ? featuredMagazines
      : selectedMagazineType === "newest"
      ? newestMagazines
      : popularMagazines;

  return (
    <SafeAreaView style={{ flex: 1 }} edges={["top"]}>
      <View style={styles.container}>
        <FlatList
          data={magazines}
          ListHeaderComponent={<Header title="News+" subTitle="Discover" />}
          renderItem={({ item }) => <Magazine magazine={item} />}
          contentContainerStyle={{ gap: 12 }}
          columnWrapperStyle={{ gap: 12 }}
          numColumns={2}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 12,
  },
});
