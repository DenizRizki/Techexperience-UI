import { router } from "expo-router";
import React, { useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isInputValid = email.length >= 3 && password.length >= 3;

  return (
    <View
      style={{ flex: 1, backgroundColor: "#fff", padding: 25, paddingTop: 60 }}
    >
      <Image
        source={require("../assets/images/tech.jpeg")}
        style={{
          width: 150,
          height: 50,
          marginBottom: 30,
          alignSelf: "flex-start",
          marginTop: 150,
        }}
        resizeMode="contain"
      />

      <TextInput
        style={{
          borderWidth: 1,
          borderColor: "#E8E8E8",
          padding: 15,
          borderRadius: 10,
          marginBottom: 15,
          fontSize: 15,
        }}
        placeholder="Masukan Email"
        placeholderTextColor="#AFAFAF"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />

      <TextInput
        style={{
          borderWidth: 1,
          borderColor: "#E8E8E8",
          padding: 15,
          borderRadius: 10,
          marginBottom: 5,
          fontSize: 15,
        }}
        placeholder="Masukan Password"
        secureTextEntry
        placeholderTextColor="#AFAFAF"
        value={password}
        onChangeText={(text) => setPassword(text)}
      />

      {(email.length > 0 && email.length < 3) ||
      (password.length > 0 && password.length < 3) ? (
        <Text style={{ color: "red", fontSize: 11, marginBottom: 10 }}>
          * Email dan Password minimal harus 3 karakter
        </Text>
      ) : null}

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 25,
          marginTop: 10,
        }}
      >
        <Text style={{ color: "#888" }}>Ingat aku ya</Text>
        <TouchableOpacity>
          <Text style={{ color: "#0085FF" }}>Lupa Password?</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={{
          backgroundColor: isInputValid ? "#0085FF" : "#AFAFAF",
          padding: 16,
          borderRadius: 12,
          alignItems: "center",
          opacity: isInputValid ? 1 : 0.6,
        }}
        onPress={() => {
          if (isInputValid) {
            router.push("/check");
          }
        }}
        disabled={!isInputValid}
      >
        <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 16 }}>
          Masuk
        </Text>
      </TouchableOpacity>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          marginTop: 15,
        }}
      >
        <Text>Belum punya akun? </Text>
        <TouchableOpacity onPress={() => router.push("/register")}>
          <Text style={{ color: "#0085FF", fontWeight: "bold" }}>
            Daftar dulu!
          </Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginVertical: 30,
        }}
      >
        <View style={{ flex: 1, height: 1, backgroundColor: "#E8E8E8" }} />
        <Text style={{ marginHorizontal: 10, color: "#AFAFAF", fontSize: 13 }}>
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
          borderRadius: 10,
          alignItems: "center",
          marginBottom: 15,
          justifyContent: "center",
        }}
      >
        <Image
          source={require("../assets/images/Google.png")}
          style={{ width: 24, height: 24, marginRight: 10 }}
        />
        <Text style={{ fontSize: 15, color: "#555" }}>Masuk dengan Google</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          flexDirection: "row",
          borderWidth: 1,
          borderColor: "#E8E8E8",
          padding: 15,
          borderRadius: 10,
          alignItems: "center",
          marginBottom: 15,
          justifyContent: "center",
        }}
      >
        <Image
          source={require("../assets/images/Facebook.png")}
          style={{ width: 24, height: 24, marginRight: 10 }}
        />
        <Text style={{ fontSize: 15, color: "#555" }}>
          Masuk dengan Facebook
        </Text>
      </TouchableOpacity>
    </View>
  );
}
