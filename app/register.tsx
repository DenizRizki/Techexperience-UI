import { router } from "expo-router";
import React, { useState } from "react";
import {
  Image,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function RegisterScreen() {
  const [email, setEmail] = useState("");
  const isInputValid = email.length >= 3;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={{ paddingHorizontal: 25, paddingTop: 40, marginBottom: 20 }}>
        <Image
          source={require("../assets/images/tech.jpeg")}
          style={{
            width: 160,
            height: 60,
            alignSelf: "flex-start",
            marginTop: 150,
          }}
          resizeMode="contain"
        />
      </View>

      <View style={{ paddingHorizontal: 25, marginTop: 10 }}>
        <TextInput
          style={{
            borderWidth: 1,
            borderColor: "#E8E8E8",
            padding: 16,
            borderRadius: 12,
            marginBottom: email.length > 0 && !isInputValid ? 5 : 25,
            fontSize: 15,
            backgroundColor: "#fff",
          }}
          placeholder="Masukan Email"
          placeholderTextColor="#AFAFAF"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />

        {email.length > 0 && !isInputValid && (
          <Text style={{ color: "red", fontSize: 12, marginBottom: 15 }}>
            * Minimal harus 3 karakter untuk mendaftar
          </Text>
        )}

        <TouchableOpacity
          style={{
            backgroundColor: isInputValid ? "#0085FF" : "#AFAFAF",
            padding: 18,
            borderRadius: 12,
            alignItems: "center",
            marginBottom: 40,
            elevation: isInputValid ? 2 : 0,
            opacity: isInputValid ? 1 : 0.7,
          }}
          onPress={() => isInputValid && router.push("/code")}
          disabled={!isInputValid}
        >
          <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 18 }}>
            Register
          </Text>
        </TouchableOpacity>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 30,
          }}
        >
          <View style={{ flex: 1, height: 1, backgroundColor: "#E8E8E8" }} />
          <Text
            style={{ marginHorizontal: 10, color: "#AFAFAF", fontSize: 13 }}
          >
            Atau mau masuk melalui?
          </Text>
          <View style={{ flex: 1, height: 1, backgroundColor: "#E8E8E8" }} />
        </View>

        <TouchableOpacity
          style={{
            flexDirection: "row",
            borderWidth: 1,
            borderColor: "#E8E8E8",
            padding: 15,
            borderRadius: 12,
            alignItems: "center",
            marginBottom: 15,
            justifyContent: "center",
            backgroundColor: "#fff",
          }}
        >
          <Image
            source={require("../assets/images/Google.png")}
            style={{ width: 24, height: 24, marginRight: 12 }}
          />
          <Text style={{ fontSize: 15, color: "#444", fontWeight: "500" }}>
            Masuk dengan Google
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            flexDirection: "row",
            borderWidth: 1,
            borderColor: "#E8E8E8",
            padding: 15,
            borderRadius: 12,
            alignItems: "center",
            marginBottom: 15,
            justifyContent: "center",
            backgroundColor: "#fff",
          }}
        >
          <Image
            source={require("../assets/images/Facebook.png")}
            style={{ width: 24, height: 24, marginRight: 12 }}
          />
          <Text style={{ fontSize: 15, color: "#444", fontWeight: "500" }}>
            Masuk dengan Facebook
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
