import { router } from "expo-router";
import {
  Bell,
  Book,
  Briefcase,
  CreditCard,
  Home,
  LayoutDashboardIcon,
  MessageSquare,
  Newspaper,
  Play,
  PlayCircle,
  Search,
  UserCircle,
  Users,
} from "lucide-react-native";
import React from "react";
import {
  Dimensions,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const { width } = Dimensions.get("window");

export default function TechperienceApp() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      {/* 1. HEADER */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          padding: 20,
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: "bold", color: "#2D3178" }}>
          TECH<Text style={{ color: "#4A90E2" }}>XPERIENCE</Text>
        </Text>
        <View style={{ flexDirection: "row", gap: 15 }}>
          <Bell color="#000" size={24} />
          <Search color="#000" size={24} />
          <TouchableOpacity onPress={() => router.push("/account")}>
            <UserCircle color="#000" size={24} />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ paddingHorizontal: 20 }}>
          {/* 2. BANNER UTAMA */}
          <View
            style={{
              width: "100%",
              height: 160,
              backgroundColor: "#2D3178",
              borderRadius: 15,
              marginBottom: 20,
              overflow: "hidden",
            }}
          >
            <Image
              source={require("../assets/images/Back-up.png")}
              style={{ width: "100%", height: "100%", resizeMode: "cover" }}
            />
          </View>

          {/* 3. MENU GRID (Dibuat manual satu per satu) */}
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-between",
              gap: 10,
            }}
          >
            {/* Menu 1 */}
            <TouchableOpacity
              style={{
                width: "48%",
                flexDirection: "row",
                alignItems: "center",
                padding: 15,
                backgroundColor: "#F5F5F5",
                borderRadius: 12,
                borderLeftWidth: 5,
                borderLeftColor: "#2196F3",
              }}
            >
              <Book size={20} color="#555" />
              <Text style={{ marginLeft: 10, fontSize: 12, fontWeight: "600" }}>
                Modul Akademi
              </Text>
            </TouchableOpacity>
            {/* Menu 2 */}
            <TouchableOpacity
              style={{
                width: "48%",
                flexDirection: "row",
                alignItems: "center",
                padding: 15,
                backgroundColor: "#F5F5F5",
                borderRadius: 12,
                borderLeftWidth: 5,
                borderLeftColor: "#2196F3",
              }}
            >
              <Users size={20} color="#555" />
              <Text style={{ marginLeft: 10, fontSize: 12, fontWeight: "600" }}>
                Community
              </Text>
            </TouchableOpacity>
            {/* Menu 3 */}
            <TouchableOpacity
              style={{
                width: "48%",
                flexDirection: "row",
                alignItems: "center",
                padding: 15,
                backgroundColor: "#F5F5F5",
                borderRadius: 12,
                borderLeftWidth: 5,
                borderLeftColor: "#2196F3",
              }}
            >
              <Briefcase size={20} color="#555" />
              <Text style={{ marginLeft: 10, fontSize: 12, fontWeight: "600" }}>
                Event Hackton
              </Text>
            </TouchableOpacity>
            {/* Menu 4 */}
            <TouchableOpacity
              style={{
                width: "48%",
                flexDirection: "row",
                alignItems: "center",
                padding: 15,
                backgroundColor: "#F5F5F5",
                borderRadius: 12,
                borderLeftWidth: 5,
                borderLeftColor: "#2196F3",
              }}
            >
              <MessageSquare size={20} color="#555" />
              <Text style={{ marginLeft: 10, fontSize: 12, fontWeight: "600" }}>
                Chat CS
              </Text>
            </TouchableOpacity>
          </View>

          {/* 4. SECTION BELAJAR (KARTU MANUAL) */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginVertical: 15,
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>
              📖 Mau belajar apa ni
            </Text>
            <TouchableOpacity>
              <Text style={{ color: "#999", fontSize: 12 }}>Lihat Semua</Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            {/* Kartu Belajar 1 */}
            <View
              style={{
                width: "48%",
                backgroundColor: "#F9F9F9",
                borderRadius: 12,
                marginBottom: 15,
                overflow: "hidden",
                borderWidth: 1,
                borderColor: "#f0f0f0",
              }}
            >
              <Image
                source={require("../assets/images/grid-1.png")}
                style={{ width: "100%", height: 100, backgroundColor: "#ddd" }}
              />
              <View style={{ padding: 10 }}>
                <Text style={{ fontWeight: "bold", fontSize: 12 }}>
                  Dasar Belajar Design
                </Text>
                <Text
                  style={{ fontSize: 10, color: "#777", marginVertical: 4 }}
                >
                  Belajar design dari dasar
                </Text>
                <TouchableOpacity
                  style={{ flexDirection: "row", alignItems: "center" }}
                >
                  <Text
                    style={{
                      fontSize: 10,
                      fontWeight: "bold",
                      marginRight: 4,
                      color: "#2196F3",
                    }}
                  >
                    Mulai Belajar
                  </Text>
                  <PlayCircle size={12} color="#2196F3" />
                </TouchableOpacity>
              </View>
            </View>

            {/* Kartu Belajar 2 */}
            <View
              style={{
                width: "48%",
                backgroundColor: "#F9F9F9",
                borderRadius: 12,
                marginBottom: 15,
                overflow: "hidden",
                borderWidth: 1,
                borderColor: "#f0f0f0",
              }}
            >
              <Image
                source={require("../assets/images/grid-2.png")}
                style={{ width: "100%", height: 100, backgroundColor: "#ddd" }}
              />
              <View style={{ padding: 10 }}>
                <Text style={{ fontWeight: "bold", fontSize: 12 }}>
                  Dasar Belajar MySql
                </Text>
                <Text
                  style={{ fontSize: 10, color: "#777", marginVertical: 4 }}
                >
                  Belajar database dasar
                </Text>
                <TouchableOpacity
                  style={{ flexDirection: "row", alignItems: "center" }}
                >
                  <Text
                    style={{
                      fontSize: 10,
                      fontWeight: "bold",
                      marginRight: 4,
                      color: "#2196F3",
                    }}
                  >
                    Mulai Belajar
                  </Text>
                  <PlayCircle size={12} color="#2196F3" />
                </TouchableOpacity>
              </View>
            </View>

            {/* Kartu Belajar 3 */}
            <View
              style={{
                width: "48%",
                backgroundColor: "#F9F9F9",
                borderRadius: 12,
                marginBottom: 15,
                overflow: "hidden",
                borderWidth: 1,
                borderColor: "#f0f0f0",
              }}
            >
              <Image
                source={require("../assets/images/grid-3.png")}
                style={{ width: "100%", height: 100, backgroundColor: "#ddd" }}
              />
              <View style={{ padding: 10 }}>
                <Text style={{ fontWeight: "bold", fontSize: 12 }}>
                  Dasar Belajar Jaringan
                </Text>
                <Text
                  style={{ fontSize: 10, color: "#777", marginVertical: 4 }}
                >
                  Bersama pak rian
                </Text>
                <TouchableOpacity
                  style={{ flexDirection: "row", alignItems: "center" }}
                >
                  <Text
                    style={{
                      fontSize: 10,
                      fontWeight: "bold",
                      marginRight: 4,
                      color: "#2196F3",
                    }}
                  >
                    Mulai Belajar
                  </Text>
                  <PlayCircle size={12} color="#2196F3" />
                </TouchableOpacity>
              </View>
            </View>

            {/* Kartu Belajar 4 */}
            <View
              style={{
                width: "48%",
                backgroundColor: "#F9F9F9",
                borderRadius: 12,
                marginBottom: 15,
                overflow: "hidden",
                borderWidth: 1,
                borderColor: "#f0f0f0",
              }}
            >
              <Image
                source={require("../assets/images/grid-4.png")}
                style={{ width: "100%", height: 100, backgroundColor: "#ddd" }}
              />
              <View style={{ padding: 10 }}>
                <Text style={{ fontWeight: "bold", fontSize: 12 }}>
                  Mahir Frontend
                </Text>
                <Text
                  style={{ fontSize: 10, color: "#777", marginVertical: 4 }}
                >
                  Belajar disini dulu
                </Text>
                <TouchableOpacity
                  style={{ flexDirection: "row", alignItems: "center" }}
                >
                  <Text
                    style={{
                      fontSize: 10,
                      fontWeight: "bold",
                      marginRight: 4,
                      color: "#2196F3",
                    }}
                  >
                    Mulai Belajar
                  </Text>
                  <PlayCircle size={12} color="#2196F3" />
                </TouchableOpacity>
              </View>
            </View>
          </View>

          {/* 5. SECTION EVENT */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginVertical: 15,
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>
              📅 Ikuti Event Terdekat
            </Text>
            <TouchableOpacity>
              <Text style={{ color: "#999", fontSize: 12 }}>Lihat Semua</Text>
            </TouchableOpacity>
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{ marginBottom: 15 }}
          >
            <Image
              source={require("../assets/images/event-1.png")}
              style={{
                width: width - 80,
                height: 140,
                borderRadius: 15,
                marginRight: 15,
                backgroundColor: "#eee",
              }}
            />
            <Image
              source={require("../assets/images/event-2.png")}
              style={{
                width: width - 80,
                height: 140,
                borderRadius: 15,
                marginRight: 15,
                backgroundColor: "#eee",
              }}
            />
          </ScrollView>

          {/* 6. SECTION PROGRAM (SLIDER MANUAL TANPA PENGULANGAN) */}
          <Text
            style={{ fontSize: 16, fontWeight: "bold", marginVertical: 15 }}
          >
            📆 Program Techxperience
          </Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingRight: 20 }}
          >
            {/* Program 1 */}
            <View
              style={{
                width: 110,
                backgroundColor: "#F0F2F5",
                borderRadius: 12,
                padding: 15,
                marginRight: 12,
                alignItems: "center",
                borderRightWidth: 4,
                borderRightColor: "#007AFF",
              }}
            >
              <Image
                source={require("../assets/images/money.png")}
                style={{ width: 30, height: 30, marginBottom: 8 }}
              />
              <Text
                style={{
                  fontSize: 10,
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                Techxperience Career
              </Text>
            </View>

            {/* Program 2 */}
            <View
              style={{
                width: 110,
                backgroundColor: "#F0F2F5",
                borderRadius: 12,
                padding: 15,
                marginRight: 12,
                alignItems: "center",
                borderRightWidth: 4,
                borderRightColor: "#4CAF50",
              }}
            >
              <Image
                source={require("../assets/images/bussiness.png")}
                style={{ width: 30, height: 30, marginBottom: 8 }}
              />
              <Text
                style={{
                  fontSize: 10,
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                Pengembangan Usaha
              </Text>
            </View>

            {/* Program 3 */}
            <View
              style={{
                width: 110,
                backgroundColor: "#F0F2F5",
                borderRadius: 12,
                padding: 15,
                marginRight: 12,
                alignItems: "center",
                borderRightWidth: 4,
                borderRightColor: "#FF9800",
              }}
            >
              <Image
                source={require("../assets/images/cash.png")}
                style={{ width: 30, height: 30, marginBottom: 8 }}
              />
              <Text
                style={{
                  fontSize: 10,
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                Beasiswa Kuliah
              </Text>
            </View>

            {/* Program 4 */}
            <View
              style={{
                width: 110,
                backgroundColor: "#F0F2F5",
                borderRadius: 12,
                padding: 15,
                marginRight: 12,
                alignItems: "center",
                borderRightWidth: 4,
                borderRightColor: "#E91E63",
              }}
            >
              <Image
                source={require("../assets/images/paper.png")}
                style={{ width: 30, height: 30, marginBottom: 8 }}
              />
              <Text
                style={{
                  fontSize: 10,
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                Roadmap Belajar
              </Text>
            </View>
          </ScrollView>
        </View>

        <View style={{ height: 110 }} />
      </ScrollView>

      {/* 7. BOTTOM NAVIGATION BAR */}
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
          <Home size={24} color="#2196F3" />
          <Text style={{ fontSize: 10, color: "#2196F3", marginTop: 4 }}>
            Home
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ alignItems: "center" }}
          onPress={() => router.push("/akademi")}
        >
          <LayoutDashboardIcon size={24} color="#999" />
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
          <Newspaper size={24} color="#999" />
          <Text style={{ fontSize: 10, color: "#999", marginTop: 4 }}>
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
