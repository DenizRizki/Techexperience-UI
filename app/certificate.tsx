import { router } from "expo-router";
import { ArrowLeft, CheckCircle2, Lock } from "lucide-react-native";
import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SertifikatUI() {
  const certificates = [
    {
      id: 1,
      title: "Dasar Jaringan",
      color: "#4A90E2",
      status: "completed",
      img: null,
    },
    {
      id: 2,
      title: "Master Jaringan",
      color: "#BDBDBD",
      status: "locked",
      img: null,
    },
    {
      id: 3,
      title: "Dasar MySql",
      color: "#4CAF50",
      status: "completed",
      img: null,
    },
    {
      id: 4,
      title: "Dasar Frontend",
      color: "#E57373",
      status: "completed",
      img: null,
    },
    {
      id: 5,
      title: "Master MySql",
      color: "#BDBDBD",
      status: "locked",
      img: null,
    },
    {
      id: 6,
      title: "Dasar Design",
      color: "#BDBDBD",
      status: "locked",
      img: null,
    },
    {
      id: 7,
      title: "Master Jaringan",
      color: "#FFB74D",
      status: "completed",
      img: null,
    },
    {
      id: 8,
      title: "Master AI",
      color: "#4DB6AC",
      status: "completed",
      img: null,
    },
  ];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      {/* HEADER */}
      <View style={{ flexDirection: "row", alignItems: "center", padding: 20 }}>
        <TouchableOpacity onPress={() => router.push("/account")}>
          <ArrowLeft size={24} color="#000" />
        </TouchableOpacity>
        <Text style={{ fontSize: 20, fontWeight: "bold", marginLeft: 20 }}>
          Sertifikat
        </Text>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15 }}
      >
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          {certificates.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={{
                width: "47%",
                backgroundColor: "#fff",
                borderRadius: 20,
                padding: 20,
                marginBottom: 15,
                alignItems: "center",
                borderWidth: 1,
                borderColor: "#eee",
                position: "relative",
              }}
            >
              {/* Status Indicator (Centang Hijau) */}
              {item.status === "completed" && (
                <View style={{ position: "absolute", right: 10, top: 10 }}>
                  <CheckCircle2 size={18} color="#4CAF50" fill="#E8F5E9" />
                </View>
              )}

              {/* Icon/Image Sertifikat (Medal) */}
              <View
                style={{
                  width: 80,
                  height: 80,
                  borderRadius: 40,
                  backgroundColor: "#fff",
                  borderWidth: 6,
                  borderColor: item.color,
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: 15,
                }}
              >
                {item.status === "locked" ? (
                  <Lock size={30} color="#BDBDBD" />
                ) : (
                  <Image
                    source={
                      item.img
                        ? item.img
                        : { uri: "https://via.placeholder.com/40" }
                    }
                    style={{ width: 40, height: 40, tintColor: item.color }}
                  />
                )}
              </View>

              {/* Title */}
              <Text
                style={{
                  fontSize: 13,
                  fontWeight: "bold",
                  textAlign: "center",
                  color: item.status === "locked" ? "#999" : "#333",
                }}
              >
                {item.title}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Spacing bottom */}
        <View style={{ height: 30 }} />
      </ScrollView>
    </SafeAreaView>
  );
}
