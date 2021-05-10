import React from "react";
import { Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/insfrastructure/theme/index";
import { RestaurantsScreen } from "./src/features/restaurants/screens/restaurants.screen";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { DroidSafeArea } from "./src/utils/global";
import { Ionicons } from "@expo/vector-icons";
import { RestaurantsContextProvider } from "./src/services/restaurant/restaurants.context";
import { LocationContextProvider } from "./src/services/location/location.context";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";

const SafeArea = DroidSafeArea;

function Map() {
  return (
    <SafeArea>
      <Text>Map!</Text>
    </SafeArea>
  );
}

function Settings() {
  return (
    <SafeArea>
      <Text>Settings</Text>
    </SafeArea>
  );
}

const TAB_ICON_ACTIVE = {
  Restaurants: "restaurant",
  Map: "map",
  Settings: "settings",
};

const TAB_ICON = {
  Restaurants: "restaurant-outline",
  Map: "map-outline",
  Settings: "settings-outline",
};

const Tab = createBottomTabNavigator();

const tabBarIcon = (route) => ({ focused, size, color }) => {
  const iconName = focused ? TAB_ICON_ACTIVE[route.name] : TAB_ICON[route.name];

  return <Ionicons name={iconName} size={size} color={color} />;
};

const screenOptions = ({ route }) => {
  return {
    tabBarIcon: tabBarIcon(route),
  };
};

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={screenOptions}
      tabBarOptions={{
        activeTintColor: "tomato",
        inactiveTintColor: "gray",
      }}
    >
      <Tab.Screen name="Restaurants" component={RestaurantsScreen} />
      <Tab.Screen name="Map" component={Map} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
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
        <LocationContextProvider>
          <RestaurantsContextProvider>
            <NavigationContainer>
              <MyTabs />
            </NavigationContainer>
          </RestaurantsContextProvider>
        </LocationContextProvider>
      </ThemeProvider>
      <StatusBar style="auto" />
    </>
  );
}
