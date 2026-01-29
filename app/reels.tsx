import { router } from "expo-router";
import {
  Bookmark,
  CreditCard,
  Heart,
  Home,
  LayoutDashboard,
  MessageCircle,
  Newspaper,
  Play,
  Search,
  Send,
} from "lucide-react-native";
import React, { useRef, useState } from "react";
import { Dimensions, Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const { width, height } = Dimensions.get("window");

let globalLikeCount = 0;
let globalIsLiked = false;

export default function ReelsScreen() {
  const [likeCount, setLikeCount] = useState(globalLikeCount);
  const [isLiked, setIsLiked] = useState(globalIsLiked);
  const lastTap = useRef<number | null>(null);

  const handleLikeLogic = () => {
    if (!globalIsLiked) {
      globalLikeCount += 1;
      globalIsLiked = true;
      setLikeCount(globalLikeCount);
      setIsLiked(true);
    }
  };

  const handleDoubleTap = () => {
    const now = Date.now();
    const DOUBLE_PRESS_DELAY = 300;

    if (lastTap.current && now - lastTap.current < DOUBLE_PRESS_DELAY) {
      handleLikeLogic();
    } else {
      lastTap.current = now;
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#000" }}>
      <View
        style={{
          position: "absolute",
          top: 50,
          width: "100%",
          paddingHorizontal: 20,
          zIndex: 10,
        }}
      >
        <View
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            height: 45,
            borderRadius: 10,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingHorizontal: 15,
            borderWidth: 1,
            borderColor: "#ddd",
          }}
        >
          <Text style={{ color: "#333", fontSize: 14 }}>For Your Page </Text>
          <Search size={18} color="#999" />
        </View>
      </View>

      <TouchableOpacity
        activeOpacity={1}
        onPress={handleDoubleTap}
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        <Image
          source={require("../assets/images/aplikasi-coding.png")}
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            opacity: 0.8,
          }}
          resizeMode="cover"
        />
      </TouchableOpacity>

      <View
        style={{
          position: "absolute",
          right: 20,
          bottom: 180,
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          onPress={handleLikeLogic}
          style={{ alignItems: "center", marginBottom: 20 }}
        >
          <Heart
            size={35}
            color={isLiked ? "#FF0000" : "#fff"}
            fill={isLiked ? "#FF0000" : "transparent"}
          />
          <Text
            style={{
              fontSize: 14,
              fontWeight: "600",
              marginTop: 4,
              color: "#fff",
            }}
          >
            {likeCount.toLocaleString()}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ alignItems: "center", marginBottom: 20 }}>
          <MessageCircle size={35} color="#fff" />
        </TouchableOpacity>

        <TouchableOpacity style={{ alignItems: "center", marginBottom: 20 }}>
          <Send size={35} color="#fff" />
        </TouchableOpacity>

        <TouchableOpacity style={{ alignItems: "center", marginBottom: 20 }}>
          <Bookmark size={35} color="#fff" />
        </TouchableOpacity>
      </View>

      <View style={{ position: "absolute", bottom: 110, left: 20, right: 80 }}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: "bold",
            color: "#fff",
            marginBottom: 8,
          }}
        >
          Kamu akan mendapatkan:
        </Text>
        <Text style={{ fontSize: 14, color: "#fff", lineHeight: 20 }}>
          Mendapatkan sertifikat dan keuntungan lainnya dari program
          Techxperience
        </Text>
      </View>

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
          <Play size={24} color="#2196F3" />
          <Text style={{ fontSize: 10, color: "#2196F3", marginTop: 4 }}>
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
