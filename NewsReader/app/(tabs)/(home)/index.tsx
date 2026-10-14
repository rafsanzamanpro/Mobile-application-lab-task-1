
import { useState } from "react";
import { router } from "expo-router";
import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ArticleCard from "../../../components/article-card";
import type { Article } from "../../../data/articles";
import { ARTICLES } from "../../../data/articles";

export default function ArticleList() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = [...new Set(ARTICLES.map((article) => article.category))];

  const filteredArticles = selectedCategory
    ? ARTICLES.filter((article) => article.category === selectedCategory)
    : ARTICLES;

  const handlePress = (article: Article) => {
    router.push({
      pathname: "/(tabs)/(home)/[id]",
      params: { id: article.id },
    });
  };

  return (
    <SafeAreaView style={styles.screen} edges={["top"]}>
      <FlatList
        data={filteredArticles}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ArticleCard article={item} onPress={handlePress} />
        )}
        contentContainerStyle={styles.list}
        ListHeaderComponent={
          <View>
            <Text style={styles.heading}>Top Stories</Text>
            <Text style={styles.count}>
              {filteredArticles.length} stories
            </Text>

            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.filters}
            >
              <TouchableOpacity
                style={[
                  styles.pill,
                  selectedCategory === null && styles.activePill,
                ]}
                onPress={() => setSelectedCategory(null)}
              >
                <Text
                  style={[
                    styles.pillText,
                    selectedCategory === null && styles.activePillText,
                  ]}
                >
                  All
                </Text>
              </TouchableOpacity>

              {categories.map((category) => {
                const active = selectedCategory === category;

                return (
                  <TouchableOpacity
                    key={category}
                    style={[styles.pill, active && styles.activePill]}
                    onPress={() => setSelectedCategory(category)}
                  >
                    <Text
                      style={[
                        styles.pillText,
                        active && styles.activePillText,
                      ]}
                    >
                      {category}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </ScrollView>
          </View>
        }
        ListEmptyComponent={
          <Text style={styles.empty}>No articles found.</Text>
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: "#F0F4F8" },
  list: { paddingTop: 12, paddingBottom: 32 },
  heading: {
    fontSize: 25,
    fontWeight: "800",
    color: "#0D1F4E",
    paddingHorizontal: 16,
  },
  count: {
    fontSize: 12,
    color: "#94A3B8",
    paddingHorizontal: 16,
    marginTop: 5,
    marginBottom: 12,
  },
  filters: {
    paddingHorizontal: 14,
    paddingBottom: 16,
    gap: 8,
  },
  pill: {
    paddingHorizontal: 16,
    paddingVertical: 9,
    borderRadius: 22,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#DCE4EC",
  },
  activePill: {
    backgroundColor: "#0D9488",
    borderColor: "#0D9488",
  },
  pillText: { fontSize: 13, color: "#475569", fontWeight: "600" },
  activePillText: { color: "#FFFFFF" },
  empty: {
    textAlign: "center",
    marginTop: 40,
    color: "#64748B",
  },
});
