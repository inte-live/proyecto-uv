import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from "./TabNavigator";
import { UserProvider } from "../providers/UserProvider";


const MainStack = () => {

  return (
    <NavigationContainer>
      <UserProvider>
        <TabNavigator/>
      </UserProvider>
    </NavigationContainer>
  );
};

export default MainStack;
