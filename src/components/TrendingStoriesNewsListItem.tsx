import { StyleSheet, Pressable, View, Text, Image } from "react-native";
import { Link } from "expo-router";

import NewsFooter from "@/components/NewsFooter";

import { News } from "@/types";

type TrendingStoriesNewsListItemProps = {
  number: number;
  news: News;
};

export default function TrendingStoriesNewsListItem({
  number,
  news,
}: TrendingStoriesNewsListItemProps) {
  return (
    <Link href={`/news/${news.id}`} asChild>
      <Pressable style={styles.container}>
        <View style={styles.numberContainer}>
          <Text style={styles.number}>{number}</Text>
        </View>

        <View style={styles.contentContainer}>
          <View>
            <Image
              style={styles.logo}
              source={require("@assets/images/logo.png")}
              resizeMode="contain"
            />
            <Text style={styles.title}>{news.title}</Text>
          </View>

          <NewsFooter createdAt={news.created_at} author={news.author} />
        </View>
      </Pressable>
    </Link>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 16,
  },
  numberContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "orange",
  },
  number: {
    color: "white",
    fontSize: 16,
    fontWeight: "500",
  },
  contentContainer: {
    flexShrink: 1,
    gap: 28,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: "lightgrey",
  },
  logo: {
    width: 60,
    height: 30,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 4,
  },
});
