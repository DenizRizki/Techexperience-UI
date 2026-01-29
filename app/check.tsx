import { router } from "expo-router";
import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function SurveyScreen() {
  const options = [
    "Co-Founders",
    "Instagram",
    "Tiktok",
    "Youtube",
    "Website",
    "Lainnya",
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.questionText}>
          Bagaimana kamu tahu tentang Techxperience?
        </Text>

        <View style={styles.optionsContainer}>
          {options.map((item, index) => (
            <TouchableOpacity key={index} style={styles.optionItem}>
              <Text style={styles.optionText}>{item}</Text>

              <View style={styles.circleCheckbox}></View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.btnSelesai}
          onPress={() => router.push("/main")}
        >
          <Text style={styles.textSelesai}>Selesai</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 30,
    paddingBottom: 100,
  },
  questionText: {
    fontSize: 16,
    color: "#444",
    marginBottom: 20,
    fontWeight: "500",
  },
  optionsContainer: {
    width: "100%",
  },
  optionItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#E0E0E0",
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 8,
    marginBottom: 12,
  },
  optionText: {
    fontSize: 15,
    color: "#333",
  },
  circleCheckbox: {
    width: 22,
    height: 22,
    borderRadius: 11,
    borderWidth: 1.5,
    borderColor: "#666",
    backgroundColor: "transparent",
  },
  footer: {
    position: "absolute",
    bottom: 30,
    left: 0,
    right: 0,
    paddingHorizontal: 20,
  },
  btnSelesai: {
    backgroundColor: "#0085FF",
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: "center",
    elevation: 3,
  },
  textSelesai: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },
});
