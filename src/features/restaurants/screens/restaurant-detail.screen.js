import React from "react";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { DroidSafeArea } from "../../../utils/global";

const SafeArea = DroidSafeArea;

export const RestaurantDetailScreen = ({ route }) => {
  const { restaurant } = route.params;
  return (
    <SafeArea>
      <RestaurantInfoCard restaurant={restaurant} />
    </SafeArea>
  );
};
