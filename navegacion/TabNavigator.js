import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LoginScreen from "../pantallas/LoginScreen";
import Inicio from "../pantallas/Inicio";
import React from "react";
import Mediciones from "../pantallas/Mediciones";
import Api from "../pantallas/Api";
import { Feather, AntDesign, MaterialIcons } from "@expo/vector-icons";
import Recomendaciones from "../pantallas/Recomendaciones";
import { useUserContext } from "../providers/UserProvider";
import Logout from "../pantallas/Logout";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const { user } = useUserContext();

  return (
    <Tab.Navigator
      initialRouteName="Inicio"
      activeColor="#f0edf6"
      inactiveColor="#3e2465"
      barStyle={{ paddingBottom: 48, backgroundColor: "#694fad" }}
      shifting={true}
      screenOptions={({ route }) => ({
        headerShown: false,

        tabBarIcon: ({ focused }) => {
          switch (route.name) {
            case "Inicio":
              return (
                <Feather
                  name="sun"
                  size={24}
                  color={focused ? "#FFD700" : "#808080"} // Amarillo dorado cuando está seleccionado, gris oscuro cuando no
                />
              );
            case "Login":
              return (
                <AntDesign
                  name="user"
                  size={24}
                  color={focused ? "#00BFFF" : "#808080"} // Azul claro cuando está seleccionado, gris oscuro cuando no
                />
              );
            case "Historicos":
              return (
                <MaterialIcons
                  name="date-range"
                  size={24}
                  color={focused ? "#32CD32" : "#808080"} // Verde brillante cuando está seleccionado, gris oscuro cuando no
                />
              );
            case "API":
              return (
                <AntDesign
                  name="API"
                  size={24}
                  color={focused ? "#8A2BE2" : "#808080"} // Morado oscuro cuando está seleccionado, gris oscuro cuando no
                />
              );
            case "Tip":
              return (
                <AntDesign
                  name="heart"
                  size={24}
                  color={focused ? "#FF4500" : "#808080"} // Rojo oscuro cuando está seleccionado, gris oscuro cuando no
                />
              );
            case "Logout":
              return <AntDesign name="logout" size={24} color="#808080" />; // Gris oscuro siempre
            default:
              return null;
          }
          

          return null;
        },
      })}
    >
      <Tab.Screen name="Inicio" component={Inicio} />
      <Tab.Screen name="Tip" component={Recomendaciones} />
      {user.isAuthenticated && (
        <>
          <Tab.Screen name="Historicos" component={Mediciones} />
          <Tab.Screen name="API" component={Api} />
        </>
      )}

      {!user.isAuthenticated ? (
        <Tab.Screen name="Login" component={LoginScreen} />
      ) : (
        <Tab.Screen name="Logout" component={Logout} />
      )}
    </Tab.Navigator>
  );
};

export default TabNavigator;
