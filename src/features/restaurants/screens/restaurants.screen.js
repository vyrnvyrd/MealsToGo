import React from "react";
import styled from "styled-components";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { DroidSafeArea } from "../../../utils/global";

const SafeArea = DroidSafeArea;

const SearchView = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const ListView = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.colors.bg.secondary};
  padding: ${(props) => props.theme.space[3]};
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
