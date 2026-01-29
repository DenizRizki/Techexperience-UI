import { router } from "expo-router";
import {
    ArrowLeft,
    Bell,
    CheckSquare,
    ChevronRight,
    Play,
    Star,
} from "lucide-react-native";
import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function VideoDetailScreen() {
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
        <TouchableOpacity
          onPress={() => router.back()}
          style={{ flexDirection: "row", alignItems: "center" }}
        >
          <ArrowLeft size={24} color="#000" />
          <Text style={{ fontSize: 20, fontWeight: "bold", marginLeft: 10 }}>
            Back
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Bell size={24} color="#000" />
        </TouchableOpacity>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        {/* VIDEO PLAYER PLACEHOLDER (IMAGE WITH PLAY ICON) */}
        <View
          style={{
            width: "100%",
            height: 220,
            backgroundColor: "#DDD",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
          }}
        >
          <Image
            source={require("./../assets/images/6-Tips-Belajar-Coding-Otodidak-untuk-Programmer-Pemula-1200x675.jpeg")}
            style={{ width: "100%", height: "100%" }}
            resizeMode="cover"
          />
          <View
            style={{
              position: "absolute",
              backgroundColor: "rgba(255,255,255,0.8)",
              borderRadius: 40,
              padding: 15,
            }}
          >
            <Play size={40} color="#000" fill="#000" />
          </View>
        </View>

        {/* TITLE & DESCRIPTION */}
        <View style={{ padding: 20 }}>
          <Text
            style={{
              fontSize: 24,
              fontWeight: "bold",
              color: "#0F2634",
              marginBottom: 10,
            }}
          >
            Introduction of Financial Statement
          </Text>
          <Text
            style={{
              fontSize: 13,
              color: "#666",
              lineHeight: 20,
              marginBottom: 15,
            }}
          >
            Bergabung dengan kelar mahir menjadi frontend dev, maka kamu sudah
            mendapatkan fundamental menjadi seorang programmer, dan pada kelas
            ini kamu akan mendalami itu.
          </Text>

          {/* STATS AREA */}
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 20,
            }}
          >
            <Star size={16} color="#FFC107" fill="#FFC107" />
            <Text style={{ fontSize: 12, color: "#999", marginLeft: 5 }}>
              4.5 (823)
            </Text>
            <Text style={{ fontSize: 12, color: "#999", marginLeft: 20 }}>
              4 Module
            </Text>
            <Text style={{ fontSize: 12, color: "#999", marginLeft: 20 }}>
              Programmer
            </Text>
          </View>

          {/* MODULE CARD */}
          <View
            style={{
              backgroundColor: "#FFF",
              borderRadius: 15,
              borderWidth: 1,
              borderColor: "#EEE",
              padding: 15,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.1,
              shadowRadius: 10,
              elevation: 3,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "flex-start",
                marginBottom: 15,
              }}
            >
              <View>
                <Text
                  style={{ fontSize: 12, fontWeight: "bold", color: "#000" }}
                >
                  Module 1
                </Text>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: "bold",
                    color: "#333",
                    marginTop: 4,
                  }}
                >
                  Fundamentals for financial
                </Text>
                <Text style={{ fontSize: 11, color: "#999", marginTop: 2 }}>
                  30 minutes
                </Text>
              </View>
              <CheckSquare size={24} color="#4CAF50" />
            </View>

            {/* LESSON LIST */}
            {[
              {
                id: 1,
                title:
                  "Lesson 1 - Identifying the Need: Market Research Essentials",
                type: "Video",
              },
              {
                id: 2,
                title: "Lesson 2 - Building a Solid Business Model Canvas",
                type: "Video",
              },
              { id: 3, title: "Lesson 3", type: "Attachment" },
              { id: 4, title: "Lesson 4", type: "Quiz" },
            ].map((lesson) => (
              <View
                key={lesson.id}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  paddingVertical: 12,
                  borderTopWidth: 1,
                  borderTopColor: "#F5F5F5",
                }}
              >
                <View
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 20,
                    backgroundColor: "#CCC",
                    marginRight: 15,
                  }}
                />
                <View style={{ flex: 1 }}>
                  <Text
                    style={{ fontSize: 12, fontWeight: "bold", color: "#333" }}
                    numberOfLines={1}
                  >
                    {lesson.title}
                  </Text>
                  <Text style={{ fontSize: 11, color: "#AAA", marginTop: 2 }}>
                    {lesson.type}
                  </Text>
                </View>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>

      {/* FIXED BOTTOM BUTTON */}
      <View
        style={{
          position: "absolute",
          bottom: 20,
          left: 20,
          right: 20,
          backgroundColor: "#112D3E",
          borderRadius: 12,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          padding: 18,
        }}
      >
        <Text style={{ color: "#FFF", fontWeight: "bold", fontSize: 16 }}>
          Ikuti Kelas
        </Text>
        <ChevronRight size={20} color="#FFF" />
      </View>
    </SafeAreaView>
  );
}
