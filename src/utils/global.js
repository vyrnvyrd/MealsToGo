import { StyleSheet, Platform, StatusBar } from "react-native";

export const Global = StyleSheet.create({
  droidSafeArea: {
    flex: 1,
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
