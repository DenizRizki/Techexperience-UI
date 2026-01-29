import { router } from "expo-router";
import {
    ArrowLeft,
    Bookmark,
    CreditCard,
    Heart,
    Home,
    LayoutDashboard,
    Newspaper,
    Play,
    Search,
    Settings,
} from "lucide-react-native";
import React, { useState } from "react";
import {
    Dimensions,
    Image,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const { width } = Dimensions.get("window");

let globalFeaturedNews = [
  {
    id: "f1",
    title: "Arsenal meriamnya diganti",
    author: "Reporter Mas",
    date: "27 Januari 2026",
    image: require("./../assets/images/6-Tips-Belajar-Coding-Otodidak-untuk-Programmer-Pemula-1200x675.jpeg"),
    isBookmarked: false,
    bookmarkCount: 0,
  },
  {
    id: "f2",
    title: "Ryzen comeback, join AE",
    author: "Reporter Mas",
    date: "27 Januari 2026",
    image: require("./../assets/images/images-1.jpg"),
    isBookmarked: false,
    bookmarkCount: 0,
  },
  {
    id: "f3",
    title: "Belajar React Native Mudah",
    author: "Admin News",
    date: "28 Januari 2026",
    image: require("./../assets/images/Tips_Belajar_Programming_Untuk_Pemula_Usia_30+_Wajib_Coba!.png"),
    isBookmarked: false,
    bookmarkCount: 0,
  },
];

let globalTrendingNews = [
  {
    id: "t1",
    category: "Sports",
    title: "Matahari turunin aja, biar king MU yang bersinar",
    date: "26 Januari 2026",
    likes: 0,
    isLiked: false,
    image: require("./../assets/images/images.jpg"),
  },
  {
    id: "t2",
    category: "Tech",
    title: "Hal paling memalukan di dunia di bobol Christiano Dorgu",
    date: "26 Januari 2026",
    likes: 0,
    isLiked: false,
    image: require("./../assets/images/6-Tips-Belajar-Coding-Otodidak-untuk-Programmer-Pemula-1200x675.jpeg"),
  },
  {
    id: "t3",
    category: "Sports",
    title: "Sudah waktunya king MU tampil",
    date: "26 Januari 2026",
    likes: 0,
    isLiked: false,
    image: require("./../assets/images/images-1.jpg"),
  },
];

export default function NewsScreen() {
  const [featured, setFeatured] = useState([...globalFeaturedNews]);
  const [trending, setTrending] = useState([...globalTrendingNews]);
  const [activeTab, setActiveTab] = useState("Entertaiment");

  const toggleBookmark = (id: string) => {
    const updated = featured.map((item) => {
      if (item.id === id) {
        const currentCount = Number(item.bookmarkCount) || 0;
        return {
          ...item,
          isBookmarked: !item.isBookmarked,
          bookmarkCount: item.isBookmarked
            ? Math.max(0, currentCount - 1)
            : currentCount + 1,
        };
      }
      return item;
    });
    globalFeaturedNews = updated;
    setFeatured(updated);
  };

  const toggleLike = (id: string) => {
    const updated = trending.map((item) => {
      if (item.id === id) {
        const currentLikes = Number(item.likes) || 0;
        return {
          ...item,
          isLiked: !item.isLiked,
          likes: item.isLiked
            ? Math.max(0, currentLikes - 1)
            : currentLikes + 1,
        };
      }
      return item;
    });
    globalTrendingNews = updated;
    setTrending(updated);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFF" }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingHorizontal: 20,
          paddingVertical: 15,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TouchableOpacity onPress={() => router.back()}>
            <ArrowLeft size={24} color="#000" />
          </TouchableOpacity>
          <Text style={{ fontSize: 22, fontWeight: "bold", marginLeft: 15 }}>
            News
          </Text>
        </View>
        <TouchableOpacity>
          <Settings size={24} color="#000" />
        </TouchableOpacity>
      </View>

      {/* SEARCH BAR */}
      <View style={{ paddingHorizontal: 20, marginBottom: 15 }}>
        <View
          style={{
            backgroundColor: "#F5F5F5",
            borderRadius: 12,
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: 15,
            height: 45,
            borderWidth: 1,
            borderColor: "#EEE",
          }}
        >
          <TextInput placeholder="Search" style={{ flex: 1, color: "#000" }} />
          <Search size={18} color="#999" />
        </View>
      </View>

      {/* CATEGORY TABS */}
      <View style={{ marginBottom: 15 }}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 20 }}
        >
          {["News", "Entertaiment", "Sports", "Politics", "Fashion"].map(
            (tab) => (
              <TouchableOpacity
                key={tab}
                onPress={() => setActiveTab(tab)}
                style={{
                  marginRight: 20,
                  borderBottomWidth: activeTab === tab ? 2 : 0,
                  borderBottomColor: "#000",
                  paddingBottom: 5,
                }}
              >
                <Text
                  style={{
                    color: activeTab === tab ? "#000" : "#999",
                    fontWeight: activeTab === tab ? "bold" : "normal",
                  }}
                >
                  {tab}
                </Text>
              </TouchableOpacity>
            ),
          )}
        </ScrollView>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        <View style={{ height: 240 }}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 20 }}
          >
            {featured.map((item) => (
              <View
                key={item.id}
                style={{
                  width: width * 0.7,
                  marginRight: 15,
                  backgroundColor: "#FFF",
                  borderRadius: 15,
                  overflow: "hidden",
                  borderWidth: 1,
                  borderColor: "#EEE",
                  height: 230,
                }}
              >
                <Image
                  source={item.image}
                  style={{ width: "100%", height: 130 }}
                />
                <View style={{ padding: 12 }}>
                  <Text
                    style={{
                      fontWeight: "bold",
                      fontSize: 14,
                      marginBottom: 5,
                    }}
                    numberOfLines={1}
                  >
                    {item.title}
                  </Text>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
                      <View
                        style={{
                          width: 24,
                          height: 24,
                          borderRadius: 12,
                          backgroundColor: "#EEE",
                          justifyContent: "center",
                          alignItems: "center",
                          marginRight: 5,
                        }}
                      >
                        <Text style={{ fontSize: 8 }}>👤</Text>
                      </View>
                      <View>
                        <Text style={{ fontSize: 10, fontWeight: "bold" }}>
                          {item.author}
                        </Text>
                        <Text style={{ fontSize: 8, color: "#999" }}>
                          {item.date}
                        </Text>
                      </View>
                    </View>
                    <TouchableOpacity
                      onPress={() => toggleBookmark(item.id)}
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
                      <Bookmark
                        size={18}
                        color={item.isBookmarked ? "#000" : "#999"}
                        fill={item.isBookmarked ? "#000" : "none"}
                      />
                      <Text
                        style={{ fontSize: 12, marginLeft: 4, color: "#999" }}
                      >
                        {item.bookmarkCount}
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>

        <Text
          style={{
            paddingHorizontal: 20,
            fontSize: 18,
            fontWeight: "bold",
            marginTop: 10,
            marginBottom: 15,
          }}
        >
          Trending News.
        </Text>
        {trending.map((item) => (
          <View
            key={item.id}
            style={{
              flexDirection: "row",
              paddingHorizontal: 20,
              marginBottom: 20,
            }}
          >
            <Image
              source={item.image}
              style={{ width: 100, height: 100, borderRadius: 12 }}
            />
            <View
              style={{
                flex: 1,
                marginLeft: 15,
                justifyContent: "space-between",
              }}
            >
              <View>
                <Text style={{ color: "#BBB", fontSize: 12 }}>
                  {item.category}
                </Text>
                <Text
                  style={{ fontWeight: "bold", fontSize: 14, marginTop: 2 }}
                  numberOfLines={2}
                >
                  {item.title}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Text style={{ fontSize: 10, color: "#BBB" }}>{item.date}</Text>
                <TouchableOpacity
                  onPress={() => toggleLike(item.id)}
                  style={{ flexDirection: "row", alignItems: "center" }}
                >
                  <Heart
                    size={18}
                    color={item.isLiked ? "red" : "#999"}
                    fill={item.isLiked ? "red" : "none"}
                  />
                  <Text style={{ fontSize: 12, marginLeft: 5, color: "#999" }}>
                    {item.likes}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>

      <View
        style={{
          flexDirection: "row",
          height: 75,
          backgroundColor: "#1A1A1A",
          justifyContent: "space-around",
          alignItems: "center",
          paddingBottom: 15,
          position: "absolute",
          bottom: 0,
          width: "100%",
        }}
      >
        <TouchableOpacity
          onPress={() => router.push("/main")}
          style={{ alignItems: "center" }}
        >
          <Home size={24} color="#999" />
          <Text style={{ fontSize: 10, color: "#999", marginTop: 4 }}>
            Home
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ alignItems: "center" }}
          onPress={() => router.push("/akademi")}
        >
          <LayoutDashboard size={24} color="#999" />
          <Text style={{ fontSize: 10, color: "#999", marginTop: 4 }}>
            Akademi
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => router.push("/reels")}
          style={{ alignItems: "center" }}
        >
          <Play size={24} color="#999" />
          <Text style={{ fontSize: 10, color: "#999", marginTop: 4 }}>
            Reels
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ alignItems: "center" }}>
          <Newspaper size={24} color="#2196F3" />
          <Text style={{ fontSize: 10, color: "#2196F3", marginTop: 4 }}>
            News
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ alignItems: "center" }}
          onPress={() => router.push("/member")}
        >
          <CreditCard size={24} color="#999" />
          <Text style={{ fontSize: 10, color: "#999", marginTop: 4 }}>
            Membership
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
