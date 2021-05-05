import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";

import { Global } from "./src/utils/global";
import { spacing } from "./src/utils/sizes";

export default function App() {
  return (
    <>
      <SafeAreaView style={Global.droidSafeArea}>
        <View style={styles.searchWrapper}>
          <Text>Search</Text>
        </View>
        <View style={styles.listWrapper}>
          <Text>List</Text>
        </View>
      </SafeAreaView>
      <StatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchWrapper: {
    backgroundColor: "green",
    padding: spacing.sm,
  },
  listWrapper: {
    flex: 1,
    backgroundColor: "blue",
    padding: spacing.sm,
  },
});
