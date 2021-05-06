import React from "react";
import styled from "styled-components";
import { SafeAreaView } from "react-native";
import { Searchbar } from "react-native-paper";

import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

import { Global } from "../../../utils/global";
import { spacing } from "../../../utils/sizes";

const SearchView = styled.View`
  padding: ${spacing.md}px;
`;

const ListView = styled.View`
  flex: 1;
  background-color: blue;
  padding: ${spacing.md}px;
`;

export const RestaurantsScreen = () => (
  <SafeAreaView style={Global.droidSafeArea}>
    <SearchView>
      <Searchbar />
    </SearchView>
    <ListView>
      <RestaurantInfoCard />
    </ListView>
  </SafeAreaView>
);
