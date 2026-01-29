import { router } from "expo-router";
import {
    ArrowLeft,
    Bell,
    CreditCard,
    Home,
    LayoutDashboard,
    Newspaper,
    Play,
    Star,
} from "lucide-react-native";
import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// Data untuk konten Akademi
const academyData = [
  {
    id: "1",
    category: "Keuangan bisnis",
    title: "Introduction of Financial Statement",
    modules: "4 Module",
    rating: "4.5",
    reviewCount: "1000",
    status: "Free",
    statusColor: "#F8BBD0",
    image: require("./../assets/images/6-Tips-Belajar-Coding-Otodidak-untuk-Programmer-Pemula-1200x675.jpeg"),
  },
  {
    id: "2",
    category: "Investasi Usaha",
    title: "Introduction of Venture Capital",
    modules: "4 Module",
    rating: "4.5",
    reviewCount: "823",
    status: "Pro",
    statusColor: "#FFE082",
    image: require("./../assets/images/images-1.jpg"),
  },
  {
    id: "3",
    category: "Branding",
    title: "Importance of Branding",
    modules: "5 Module",
    rating: "4.5",
    reviewCount: "26783",
    status: "Pro",
    statusColor: "#FFE082",
    image: require("./../assets/images/images.jpg"),
  },
  {
    id: "4",
    category: "management",
    title: "How To use Sales Production",
    modules: "5 Module",
    rating: "4.5",
    reviewCount: "312",
    status: "Pro",
    statusColor: "#FFE082",
    image: require("./../assets/images/event-1.png"),
  },
  {
    id: "5",
    category: "bussiness",
    title: "Introduction branding",
    modules: "4 Module",
    rating: "4.5",
    reviewCount: "531",
    status: "Pro",
    statusColor: "#FFE082",
    image: require("./../assets/images/event-2.png"),
  },
  {
    id: "6",
    category: "keuangan pribadi",
    title: "Personal Finance",
    modules: "4 Module",
    rating: "4.5",
    reviewCount: "813",
    status: "Pro",
    statusColor: "#FFE082",
    image: require("./../assets/images/grid-1.png"),
  },
];

export default function AkademiScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFF" }}>
      {/* HEADER */}
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
          <Text
            style={{
              fontSize: 22,
              fontWeight: "bold",
              marginLeft: 15,
              color: "#000",
            }}
          >
            Akademi
          </Text>
        </View>
        <TouchableOpacity>
          <Bell size={24} color="#000" />
        </TouchableOpacity>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        {academyData.map((item) => (
          <TouchableOpacity
            key={item.id}
            onPress={() => router.push("/video")}
            style={{
              flexDirection: "row",
              paddingHorizontal: 20,
              marginBottom: 20,
              alignItems: "center",
            }}
          >
            {/* THUMBNAIL BOX */}
            <View style={{ width: 140, height: 90, position: "relative" }}>
              <Image
                source={item.image}
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: 12,
                  backgroundColor: "#EEE",
                }}
              />
              {/* LABEL STATUS (FREE/PRO) */}
              <View
                style={{
                  position: "absolute",
                  bottom: 8,
                  right: 8,
                  backgroundColor: item.statusColor,
                  paddingHorizontal: 12,
                  paddingVertical: 2,
                  borderRadius: 15,
                }}
              >
                <Text
                  style={{ fontSize: 10, fontWeight: "bold", color: "#795548" }}
                >
                  {item.status}
                </Text>
              </View>
            </View>

            {/* INFO CONTENT */}
            <View style={{ flex: 1, marginLeft: 15 }}>
              <Text style={{ fontSize: 10, color: "#999", marginBottom: 2 }}>
                {item.category}
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: "bold",
                  color: "#333",
                  marginBottom: 2,
                }}
                numberOfLines={2}
              >
                {item.title}
              </Text>
              <Text style={{ fontSize: 11, color: "#666", marginBottom: 8 }}>
                {item.modules}
              </Text>

              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Star size={12} color="#FFC107" fill="#FFC107" />
                <Text style={{ fontSize: 10, color: "#999", marginLeft: 4 }}>
                  {item.rating} ({item.reviewCount})
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* BOTTOM NAVIGATION */}
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

        <TouchableOpacity style={{ alignItems: "center" }}>
          <LayoutDashboard size={24} color="#2196F3" />
          <Text style={{ fontSize: 10, color: "#2196F3", marginTop: 4 }}>
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

        <TouchableOpacity
          onPress={() => router.push("/news")}
          style={{ alignItems: "center" }}
        >
          <Newspaper size={24} color="#999" />
          <Text style={{ fontSize: 10, color: "#999", marginTop: 4 }}>
            News
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => router.push("/member")}
          style={{ alignItems: "center" }}
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
