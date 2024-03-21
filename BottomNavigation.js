import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./Home";
import Settings from "./Settings";
import Profile from "./Profile";

const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  return <Home />;
};

const SettingsScreen = () => {
  return <Settings />;
};

const ProfileScreen = () => {
  return <Profile />;
};

const App = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "red",
        headerTitleAlign: "center"
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default function BottomNavigation() {
  return (
    <NavigationContainer>
      <App />
    </NavigationContainer>
  );
};
