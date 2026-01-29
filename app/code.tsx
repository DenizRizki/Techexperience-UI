import { router } from "expo-router";
import React from "react";
import {
    Image,
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

export default function ConfirmationCodeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Logo di pojok kiri atas */}
      <View style={styles.header}>
        <Image
          source={require("../assets/images/tech.jpeg")}
          style={styles.smallLogo}
          resizeMode="contain"
        />
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>Konfirmasi Kode</Text>
        <Text style={styles.subtitle}>
          Silahkan masukan kode konfirmasi yang telah kami kirimkan ke email
          anda.
        </Text>

        {/* Kotak Input Kode (UI Only) */}
        <View style={styles.codeContainer}>
          {[1, 2, 3, 4].map((index) => (
            <TextInput
              key={index}
              style={styles.codeInput}
              keyboardType="number-pad"
              maxLength={1}
              placeholder="-"
              placeholderTextColor="#AFAFAF"
            />
          ))}
        </View>

        <TouchableOpacity
          style={styles.btnKonfirmasi}
          onPress={() => router.push("/check")}
        >
          <Text style={styles.textKonfirmasi}>Konfirmasi</Text>
        </TouchableOpacity>

        <View style={styles.resendRow}>
          <Text style={styles.greyText}>Belum menerima kode? </Text>
          <TouchableOpacity>
            <Text style={styles.linkTextBold}>Kirim Ulang</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    paddingHorizontal: 25,
    paddingTop: 40,
    marginBottom: 40,
  },
  smallLogo: {
    width: 160,
    height: 60,
    alignSelf: "center",
    marginTop: 150,
  },
  content: {
    paddingHorizontal: 25,
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
    lineHeight: 22,
    marginBottom: 40,
  },
  codeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    marginBottom: 40,
  },
  codeInput: {
    width: 60,
    height: 60,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 12,
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
    color: "#0085FF",
    backgroundColor: "#fff",
  },
  btnKonfirmasi: {
    backgroundColor: "#0085FF",
    width: "100%",
    padding: 18,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 20,
    elevation: 2,
  },
  textKonfirmasi: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },
  resendRow: {
    flexDirection: "row",
    marginTop: 10,
  },
  greyText: {
    color: "#888",
  },
  linkTextBold: {
    color: "#0085FF",
    fontWeight: "bold",
  },
});
