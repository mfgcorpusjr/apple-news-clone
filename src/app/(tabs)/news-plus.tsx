import { useState } from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Header from "@/components/Header";
import Dropdown from "@/components/Dropdown";
import Magazine from "@/components/Magazine";

import featuredMagazines from "@assets/data/featured-magazines.json";
import newestMagazines from "@assets/data/newest-magazines.json";
import popularMagazines from "@assets/data/popular-magazines.json";

export default function NewsPlusScreen() {
  const [selectedMagazineType, setSelectedMagazineType] = useState("Featured");

  const magazines =
    selectedMagazineType === "Featured"
      ? featuredMagazines
      : selectedMagazineType === "Newest"
      ? newestMagazines
      : popularMagazines;

  return (
    <SafeAreaView style={{ flex: 1 }} edges={["top"]}>
      <View style={styles.container}>
        <FlatList
          data={magazines}
          ListHeaderComponent={
            <View>
              <Header title="News+" subTitle="Discover" />
              <View style={styles.dropdownContainer}>
                <Text style={styles.dropdownLabel}>Showing:</Text>
                <Dropdown
                  options={["Featured", "Newest", "Popular"]}
                  value={selectedMagazineType}
                  onChange={(option: string) => setSelectedMagazineType(option)}
                />
              </View>
            </View>
          }
          renderItem={({ item }) => <Magazine magazine={item} />}
          contentContainerStyle={{ gap: 12 }}
          columnWrapperStyle={{ gap: 12 }}
          numColumns={2}
          showsVerticalScrollIndicator={false}
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
  dropdownContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  dropdownLabel: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
