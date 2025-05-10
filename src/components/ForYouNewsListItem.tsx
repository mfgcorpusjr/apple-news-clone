import { StyleSheet, Pressable, View, Text, Image } from "react-native";
import { Link } from "expo-router";

import NewsFooter from "@/components/NewsFooter";

import { News } from "@/types";

type ForYouNewsListItemProps = {
  news: News;
};

export default function ForYouNewsListItem({ news }: ForYouNewsListItemProps) {
  return (
    <Link href={`/news/${news.id}`} asChild>
      <Pressable style={styles.container}>
        <View style={styles.contentContainer}>
          <View style={{ flexShrink: 1 }}>
            <Image
              style={styles.logo}
              source={require("@assets/images/logo.png")}
              resizeMode="contain"
            />
            <Text style={styles.title}>{news.title}</Text>
          </View>

          <Image style={styles.image} source={{ uri: news.image }} />
        </View>

        <NewsFooter createdAt={news.created_at} author={news.author} />
      </Pressable>
    </Link>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 12,
    padding: 12,
    gap: 28,
  },
  contentContainer: {
    flexDirection: "row",
    gap: 8,
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
  image: {
    width: 120,
    aspectRatio: 1,
    borderRadius: 12,
  },
});
