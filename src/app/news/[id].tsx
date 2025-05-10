import { StyleSheet, ScrollView, View, Text, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Stack, useLocalSearchParams, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { format } from "date-fns";
import Markdown from "react-native-markdown-display";

import allNews from "@assets/data/all-news.json";

export default function NewsDetails() {
  const { id } = useLocalSearchParams();

  const news = allNews.find((n) => n.id === id);

  if (!news) {
    return <View />;
  }

  return (
    <SafeAreaView style={{ flex: 1 }} edges={["bottom"]}>
      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        <Stack.Screen
          options={{
            headerLeft: () => (
              <Ionicons
                name="chevron-back-outline"
                size={24}
                color="black"
                onPress={() => router.back()}
              />
            ),
            title: news.publisher.name,
            headerRight: () => (
              <View style={styles.headerRight}>
                <Ionicons
                  style={styles.headerRightIcon}
                  name="share-outline"
                  size={20}
                  color="black"
                />
                <Ionicons
                  style={styles.headerRightIcon}
                  name="ellipsis-horizontal-sharp"
                  size={20}
                  color="black"
                />
              </View>
            ),
          }}
        />

        <Image style={styles.image} source={{ uri: news.image }} />

        <View style={styles.container}>
          <Text style={styles.title}>{news.title}</Text>
          <Text style={styles.subTitle}>
            by {news.author.name}{" "}
            {format(news.created_at, "MMM dd, yyyy hh:mm a")}
          </Text>

          <Markdown style={markdownStyles}>{news.body}</Markdown>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerRight: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  headerRightIcon: {
    backgroundColor: "gainsboro",
    padding: 6,
    borderRadius: 50,
  },
  image: {
    width: "100%",
    aspectRatio: 3 / 2,
  },
  container: {
    padding: 12,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  subTitle: {
    color: "grey",
    marginTop: 8,
    marginBottom: 28,
  },
});

const markdownStyles = StyleSheet.create({
  heading3: {
    marginTop: 12,
  },
});
