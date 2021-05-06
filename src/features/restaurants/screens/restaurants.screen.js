import React from "react";
import styled from "styled-components";
import { Searchbar } from "react-native-paper";

import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

import { DroidSafeArea } from "../../../utils/global";
import { spacing } from "../../../utils/sizes";

const SafeArea = DroidSafeArea;

const SearchView = styled.View`
  padding: ${spacing.md}px;
`;

const ListView = styled.View`
  flex: 1;
  background-color: blue;
  padding: ${spacing.md}px;
`;

export const RestaurantsScreen = () => (
  <SafeArea>
    <SearchView>
      <Searchbar />
    </SearchView>
    <ListView>
      <RestaurantInfoCard />
    </ListView>
  </SafeArea>
);
