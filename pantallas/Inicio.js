import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  StatusBar,
} from "react-native";
import UVPromedio from "../components/UVPromedio";
import Modulos from "../components/Modulos";

export default function Inicio() {
    //degradao de la app
  return (
    <LinearGradient
      colors={["#0c2342", "#124e96", "#0c2342"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.gradient}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View
          style={{
            paddingTop: StatusBar.currentHeight * 2 || 0,
            marginLeft: "4%",
            marginBottom: "1%",
            width: "92%",
            flexDirection: "",
          }}
        >
          <Text
            style={{
              fontSize: 25,
              fontWeight: "900",
              color: "#e6ebe0",
              textAlign: "center",
              marginBottom: 5,
            }}
          >
            Indice de Radiación UV
          </Text>
          <Text
            style={{
              fontSize: 25,
              fontWeight: "500",
              color: "#fdfaff",
              alignSelf: "center",
              marginBottom: 5,
            }}
          >
            En el campus de la UNL
          </Text>
        </View>

        <UVPromedio />

        <Modulos />
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: {
    alignItems: "center",
    flex: 1,
  },
  secundario: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: "100%", // Ocupar todo el ancho disponible
    marginBottom: 5, // Espacio inferior entre filas
  },
  text: {
    position: "absolute",
    fontSize: 30,
    fontWeight: "900",
    color: "#0c2342",
    textAlign: "center",
    marginHorizontal: 130,
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 5,
  },
});
