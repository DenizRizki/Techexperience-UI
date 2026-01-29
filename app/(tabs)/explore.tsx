import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function TabTwoScreen() {
  const [count, setCount] = useState(0);

  const Tambah = () => {
    setCount(count + 1);
  };

  const Kurang = () => {
    setCount(count - 1);
  };

  const Reset = () => {
    setCount(0);
  };

  return (
    <SafeAreaView>
      <View>
        <Text>{count}</Text>
        <TouchableOpacity
          onPress={Tambah}
          style={{
            backgroundColor: "#0066ff",
            padding: 20,
            borderRadius: 10,
            alignItems: "center",
          }}
        >
          <Text>Tambah</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          onPress={Kurang}
          style={{
            backgroundColor: "#ff0000",
            padding: 20,
            marginTop: 10,
            borderRadius: 10,
            alignItems: "center",
          }}
        >
          <Text>Kurang</Text>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity
          onPress={Reset}
          style={{
            backgroundColor: "#33ff00",
            padding: 20,
            marginTop: 10,
            borderRadius: 10,
            alignItems: "center",
          }}
        >
          <Text>Reset</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
