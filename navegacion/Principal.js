import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LoginScreen from "./../pantallas/LoginScreen";
import Inicio from "../pantallas/Inicio";
import { Feather, AntDesign } from "@expo/vector-icons";
import React from "react";

const Tab = createBottomTabNavigator();

const Principal = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Inicio"
        activeColor="#4fc6ff"
        inactiveColor="#3e2465"
        barStyle={{ paddingBottom: 200, backgroundColor: "#0c2342" }}
        shifting={true}
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ color, focused, size }) => {
            if (route.name === "Inicio") {
              return focused ? (
                <Feather name="sun" size={24} color="blue" />
              ) : (
                <Feather name="sun" size={24} color="black" />
              );
            } else if (route.name === "Login") {
              return focused ? (
                <AntDesign name="user" size={24} color="blue" />
              ) : (
                <AntDesign name="user" size={24} color="black" />
              );
            }
            return;
          },
        })}
      >
        <Tab.Screen name="Inicio" component={Inicio} />

        <Tab.Screen name="Login" component={LoginScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Principal;
