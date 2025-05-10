import { StyleSheet, View, SectionList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { format } from "date-fns";

import Header from "@/components/Header";
import SectionHeader from "@/components/SectionHeader";
import MainNewsListItem from "@/components/MainNewsListItem";
import TrendingStoriesNewsListItem from "@/components/TrendingStoriesNewsListItem";
import ForYouNewsListItem from "@/components/ForYouNewsListItem";

import { News } from "@/types";

import homeNews from "@assets/data/home-news.json";

export default function HomeScreen() {
  const renderNewsItem = (news: News, index: number, title: string) => {
    if (title === "Top Stories") {
      return index === 0 ? (
        <MainNewsListItem news={news} />
      ) : (
        <ForYouNewsListItem news={news} />
      );
    } else if (title === "Trending Stories") {
      return <TrendingStoriesNewsListItem number={index + 1} news={news} />;
    } else if (title === "For You") {
      return <ForYouNewsListItem news={news} />;
    } else {
      return null;
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }} edges={["top"]}>
      <View style={{ flex: 1 }}>
        <SectionList
          sections={homeNews}
          ListHeaderComponent={
            <Header title="News" subTitle={format(new Date(), "MMM dd")} />
          }
          renderSectionHeader={({ section }) => (
            <SectionHeader title={section.title} />
          )}
          renderItem={({ item, index, section }) =>
            renderNewsItem(item, index, section.title)
          }
          stickySectionHeadersEnabled={false}
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
    gap: 16,
  },
});
