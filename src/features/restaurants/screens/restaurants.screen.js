import React from "react";
import { StyleSheet, View, SafeAreaView } from "react-native";
import { Searchbar } from "react-native-paper";

import {
  RestaurantInfo,
  RestaurantInfoCard,
} from "../components/restaurant-info-card.component";

import { Global } from "../../../utils/global";
import { spacing } from "../../../utils/sizes";

export const RestaurantsScreen = () => (
  <SafeAreaView style={Global.droidSafeArea}>
    <View style={styles.searchWrapper}>
      <Searchbar />
    </View>
    <View style={styles.listWrapper}>
      <RestaurantInfoCard />
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchWrapper: {
    padding: spacing.sm,
  },
  listWrapper: {
    flex: 1,
    backgroundColor: "blue",
    padding: spacing.sm,
  },
});
