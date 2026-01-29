import { router } from "expo-router";
import {
    ArrowLeft,
    Bell,
    Book,
    Briefcase,
    CheckCircle,
    Clock,
    Command,
    FileText,
    HelpCircle,
    LogOut,
    User,
} from "lucide-react-native";
import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ProfileAccountUI() {
  const menuOptions = [
    { icon: <User size={22} color="#4A90E2" />, label: "Profil" },
    { icon: <Bell size={22} color="#4A90E2" />, label: "Notifikasi" },
    { icon: <Clock size={22} color="#4A90E2" />, label: "Riwayat aktivitas" },
    {
      icon: <FileText size={22} color="#4A90E2" />,
      label: "Kebijakan privasi",
    },
    { icon: <HelpCircle size={22} color="#4A90E2" />, label: "Bantuan" },
  ];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      {/* HEADER TOP */}
      <View style={{ flexDirection: "row", alignItems: "center", padding: 20 }}>
        <TouchableOpacity onPress={() => router.push("/main")}>
          <ArrowLeft size={24} color="#000" />
        </TouchableOpacity>
        <Text style={{ fontSize: 20, fontWeight: "bold", marginLeft: 20 }}>
          Profil
        </Text>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 20 }}
      >
        {/* INFO USER */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 30,
          }}
        >
          {/* Ganti Source Image Profil di sini */}
          <View
            style={{
              width: 70,
              height: 70,
              borderRadius: 35,
              backgroundColor: "#1A2E35",
              justifyContent: "center",
              alignItems: "center",
              marginRight: 15,
            }}
          >
            <Text style={{ color: "#fff", fontSize: 24, fontWeight: "bold" }}>
              M
            </Text>
          </View>
          <View>
            <Text style={{ fontSize: 22, fontWeight: "bold" }}>Maroon</Text>
            <Text style={{ color: "#999", fontSize: 14 }}>Graphic Design</Text>
          </View>
        </View>

        {/* STATS CARD (JUMLAH MODUL, DLL) */}
        <View
          style={{
            flexDirection: "row",
            backgroundColor: "#fff",
            borderRadius: 15,
            paddingVertical: 20,
            borderWidth: 1,
            borderColor: "#4A90E2",
            marginBottom: 20,
          }}
        >
          <View
            style={{
              flex: 1,
              alignItems: "center",
              borderRightWidth: 1,
              borderRightColor: "#eee",
            }}
          >
            <Book size={24} color="#000" />
            <Text style={{ fontWeight: "bold", fontSize: 18, marginTop: 5 }}>
              10
            </Text>
            <Text style={{ fontSize: 11, color: "#999" }}>Jumlah Modul</Text>
          </View>
          <View
            style={{
              flex: 1,
              alignItems: "center",
              borderRightWidth: 1,
              borderRightColor: "#eee",
            }}
          >
            <Briefcase size={24} color="#000" />
            <Text style={{ fontWeight: "bold", fontSize: 18, marginTop: 5 }}>
              7
            </Text>
            <Text style={{ fontSize: 11, color: "#999" }}>Ikut Event</Text>
          </View>
          <TouchableOpacity onPress={() => router.push("/certificate")}>
            <View style={{ flex: 1, alignItems: "center" }}>
              <CheckCircle size={24} color="#000" />
              <Text style={{ fontWeight: "bold", fontSize: 18, marginTop: 5 }}>
                367
              </Text>
              <Text style={{ fontSize: 11, color: "#999" }}>
                Total Sertifikat
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* MORA AI BANNER */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            padding: 15,
            backgroundColor: "#fff",
            borderRadius: 15,
            borderWidth: 1,
            borderColor: "#eee",
            marginBottom: 30,
            elevation: 2,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.1,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View
              style={{ backgroundColor: "#000", padding: 8, borderRadius: 10 }}
            >
              <Command size={20} color="#fff" />
            </View>
            <Text style={{ fontWeight: "bold", marginLeft: 12, fontSize: 16 }}>
              Mora AI
            </Text>
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: "#4A90E2",
              paddingHorizontal: 15,
              paddingVertical: 8,
              borderRadius: 20,
            }}
          >
            <Text style={{ color: "#fff", fontSize: 12, fontWeight: "bold" }}>
              Chat Mora AI
            </Text>
          </TouchableOpacity>
        </View>

        {/* MENU LIST NAVIGASI */}
        <View style={{ marginBottom: 20 }}>
          {menuOptions.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={{
                flexDirection: "row",
                alignItems: "center",
                paddingVertical: 18,
                borderBottomWidth: index === menuOptions.length - 1 ? 0 : 0.5,
                borderBottomColor: "#eee",
              }}
            >
              <View style={{ width: 40 }}>{item.icon}</View>
              <Text style={{ fontSize: 16, color: "#333", fontWeight: "500" }}>
                {item.label}
              </Text>
            </TouchableOpacity>
          ))}

          {/* LOGOUT BUTTON */}
          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              marginTop: 20,
              paddingVertical: 15,
              borderRadius: 25,
              borderWidth: 1,
              borderColor: "#FF6B6B",
            }}
            onPress={() => router.push("/start")}
          >
            <LogOut size={20} color="#FF6B6B" style={{ marginRight: 10 }} />
            <Text
              style={{ color: "#FF6B6B", fontWeight: "bold", fontSize: 16 }}
            >
              Logout
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
