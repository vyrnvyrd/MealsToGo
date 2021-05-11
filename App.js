import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/insfrastructure/theme/index";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { Navigation } from "./src/insfrastructure/navigation";
import { RestaurantsContextProvider } from "./src/services/restaurant/restaurants.context";
import { LocationContextProvider } from "./src/services/location/location.context";
import { FavouritesContextProvider } from "./src/services/favourites/favourites.context";
import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";
import * as firebase from "firebase";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";

const firebaseConfig = {
  apiKey: "AIzaSyDNILGl-faOhjNdIvzNYGoKvfZRLUz7WdQ",
  authDomain: "mealstogo-59be7.firebaseapp.com",
  projectId: "mealstogo-59be7",
  storageBucket: "mealstogo-59be7.appspot.com",
  messagingSenderId: "927238789613",
  appId: "1:927238789613:web:bb83db61a98c78b62aafe4",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default function App() {
  const [oswaldLoaeded] = useOswald({
    Oswald_400Regular,
  });
  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaeded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <FavouritesContextProvider>
            <LocationContextProvider>
              <RestaurantsContextProvider>
                <Navigation />
              </RestaurantsContextProvider>
            </LocationContextProvider>
          </FavouritesContextProvider>
        </AuthenticationContextProvider>
      </ThemeProvider>
      <StatusBar style="auto" />
    </>
  );
}
