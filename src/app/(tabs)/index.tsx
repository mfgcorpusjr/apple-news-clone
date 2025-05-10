import { StyleSheet, View, SectionList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import MainNewsListItem from "@/components/MainNewsListItem";

import homeNews from "@assets/data/home-news.json";

export default function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }} edges={["top"]}>
      <View style={{ flex: 1 }}>
        <SectionList
          sections={homeNews}
          renderItem={({ item }) => <MainNewsListItem news={item} />}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.newsContainer}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  newsContainer: {
    paddingHorizontal: 12,
    gap: 12,
  },
});
