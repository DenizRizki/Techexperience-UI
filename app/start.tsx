import { useRouter } from "expo-router";
import React from "react";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function StartScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require("../assets/images/tech.jpeg")}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.title}>Belajar Technology</Text>
        <Text style={styles.title}>& Dapatkan Pengalamannya</Text>

        <Text style={styles.description}>
          Belajar di Techxperience ini kamu dapat belajar berbagai bidang
          teknologi seperti pemrograman, desain grafis, dan jaringan.
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, styles.btnMulai]}
          onPress={() => router.push("/register")}
        >
          <Text style={styles.btnTextBlack}>Mulai Belajar Sekarang</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.btnMasuk]}
          onPress={() => router.push("/login")}
        >
          <Text style={styles.btnTextWhite}>Masuk</Text>
        </TouchableOpacity>

        <Text style={styles.footerText}>
          #Dari 1 Baris Pertama, Sampai 1 Project Pertama
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 25,
  },
  logoContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },
  logo: {
    width: "80%",
    height: 100,
  },
  textContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    lineHeight: 32,
  },
  description: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
    marginTop: 15,
    lineHeight: 20,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: 30,
  },
  button: {
    width: "100%",
    height: 55,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
  },
  btnMulai: {
    backgroundColor: "#34eba1",
  },
  btnMasuk: {
    backgroundColor: "#007bff",
  },
  btnTextBlack: {
    color: "#000",
    fontWeight: "600",
    fontSize: 16,
    textAlign: "center",
  },
  btnTextWhite: {
    color: "#000000",
    fontWeight: "600",
    fontSize: 16,
    textAlign: "center",
  },
  footerText: {
    textAlign: "center",
    fontSize: 12,
    color: "#888",
    marginTop: 10,
  },
});
