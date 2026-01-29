import { router } from "expo-router";
import {
    ArrowLeft,
    ChevronRight,
    CreditCard,
    Home,
    LayoutDashboard,
    Newspaper,
    Play,
    Settings,
} from "lucide-react-native";
import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function MembershipScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#0F2634" }}>
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
            <ArrowLeft size={24} color="#FFF" />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 22,
              fontWeight: "bold",
              marginLeft: 15,
              color: "#FFF",
            }}
          >
            Membership
          </Text>
        </View>
        <TouchableOpacity>
          <Settings size={24} color="#FFF" />
        </TouchableOpacity>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        {/* GREETING SECTION */}
        <View
          style={{ paddingHorizontal: 20, marginTop: 10, marginBottom: 20 }}
        >
          <Text style={{ color: "#FFF", fontSize: 14 }}>Your the best,</Text>
          <Text
            style={{
              color: "#FFF",
              fontSize: 16,
              fontWeight: "bold",
              marginTop: 5,
            }}
          >
            Kamu mau membership dan bayar, orang kaya...
          </Text>
        </View>

        {/* GOLD CARD SECTION */}
        <View style={{ paddingHorizontal: 15, marginBottom: 20 }}>
          <View
            style={{
              backgroundColor: "#FFF",
              borderRadius: 15,
              padding: 20,
              elevation: 5,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.2,
              shadowRadius: 4,
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <View
                style={{
                  width: 60,
                  height: 60,
                  backgroundColor: "#FFC107",
                  borderRadius: 10,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={{ fontSize: 24 }}>🥇</Text>
              </View>
              <View style={{ flex: 1, marginLeft: 15 }}>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{ fontSize: 18, fontWeight: "bold", color: "#000" }}
                  >
                    Gold
                  </Text>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: "bold",
                      color: "#FFC107",
                    }}
                  >
                    3021 Points
                  </Text>
                </View>
                <Text
                  style={{
                    fontSize: 12,
                    color: "#666",
                    marginTop: 5,
                    marginBottom: 10,
                  }}
                >
                  Dapatkan 403 points lagi naik ke Platinum
                </Text>

                {/* PROGRESS BAR (UI ONLY) */}
                <View
                  style={{
                    height: 6,
                    backgroundColor: "#EEE",
                    borderRadius: 3,
                    overflow: "hidden",
                  }}
                >
                  <View
                    style={{
                      height: "100%",
                      backgroundColor: "#0F2634",
                      width: "70%",
                    }}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>

        {/* REDEEM BOX (UI ONLY) */}
        <View style={{ paddingHorizontal: 20, marginBottom: 15 }}>
          <View
            style={{
              backgroundColor: "transparent",
              borderRadius: 12,
              padding: 15,
              borderWidth: 1,
              borderColor: "#666",
              borderStyle: "dashed",
            }}
          >
            <Text style={{ color: "#AAA", fontSize: 14, textAlign: "center" }}>
              Tukarkan points yang kamu dapat menjadi uang
            </Text>
          </View>
        </View>

        {/* CARA TUKAR POINTS SECTION */}
        <View style={{ paddingHorizontal: 20, marginBottom: 15 }}>
          <View
            style={{ backgroundColor: "#FFF", borderRadius: 15, padding: 20 }}
          >
            <Text
              style={{
                fontSize: 16,
                fontWeight: "bold",
                color: "#0F2634",
                marginBottom: 20,
              }}
            >
              Cara tukar points
            </Text>

            {[1, 2, 3].map((step) => (
              <View
                key={step}
                style={{
                  flexDirection: "row",
                  marginBottom: 20,
                  alignItems: "flex-start",
                }}
              >
                <View
                  style={{
                    width: 35,
                    height: 35,
                    borderRadius: 17.5,
                    backgroundColor: "#DDD",
                    justifyContent: "center",
                    alignItems: "center",
                    marginRight: 15,
                  }}
                >
                  <Text style={{ fontWeight: "bold", color: "#000" }}>
                    {step}
                  </Text>
                </View>
                <Text
                  style={{
                    flex: 1,
                    color: "#777",
                    fontSize: 12,
                    lineHeight: 18,
                  }}
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the
                </Text>
              </View>
            ))}
          </View>
        </View>

        {/* FAQ BUTTON */}
        <View style={{ paddingHorizontal: 20, marginBottom: 15 }}>
          <TouchableOpacity
            style={{
              backgroundColor: "#162D3A",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              padding: 15,
              borderRadius: 12,
              marginTop: 10,
            }}
          >
            <Text style={{ color: "#FFF", fontWeight: "bold" }}>FAQ</Text>
            <ChevronRight size={20} color="#FFF" />
          </TouchableOpacity>
        </View>
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
        <TouchableOpacity
          onPress={() => router.push("/news")}
          style={{ alignItems: "center" }}
        >
          <Newspaper size={24} color="#999" />
          <Text style={{ fontSize: 10, color: "#999", marginTop: 4 }}>
            News
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ alignItems: "center" }}>
          <CreditCard size={24} color="#2196F3" />
          <Text style={{ fontSize: 10, color: "#2196F3", marginTop: 4 }}>
            Membership
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
