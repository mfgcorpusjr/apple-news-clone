import { StyleSheet, View, Image, Text } from "react-native";

import NewsFooter from "@/components/NewsFooter";

import { News } from "@/types";

type MainNewsListItemProps = {
  news: News;
};

export default function MainNewsListItem({ news }: MainNewsListItemProps) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: news.image }} />

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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 12,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    aspectRatio: 3 / 2,
  },
  contentContainer: {
    padding: 12,
    gap: 28,
  },
  logo: {
    width: 60,
    height: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
