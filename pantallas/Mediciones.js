import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import MedicionDia from "../components/MedicionDia";
import MedicionSemana from "../components/MedicionSemana";
import MedicionMes from "../components/MedicionMes";

export default function Mediciones() {
  
  return (
    <LinearGradient
      colors={["#0c2342", "#124e96", "#0c2342"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.gradient}
    >
      <ScrollView>
        <View
          style={{
            paddingTop: StatusBar.currentHeight * 2 || 0,
            alignItems: "center",
          }}
        >
          

          <MedicionDia />

          <MedicionSemana/>

          <MedicionMes/>
        </View> 

      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inner: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 32, // Tamaño más grande
    fontWeight: "bold", // Puede añadir negrita para más énfasis
    color: "#000", // Color diferente
    shadowColor: "#fff",

    marginBottom: 40, // Aumentar el espacio inferior
  },
  logo: {
    width: 120,
    height: 130,
    marginBottom: 30,
  },
  inputContainer: {
    width: "100%",
    marginBottom: 15,
  },
  input: {
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
  },
  loginButton: {
    backgroundColor: "blue",
    width: "100%",
    alignItems: "center",
    padding: 15,
    borderRadius: 5,
    marginTop: 15,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
  signupContainer: {
    flexDirection: "row",
    marginTop: 20,
  },
  signupText: {
    marginLeft: 5,
    color: "blue",
  },
  gradient: {
    flex: 1,
  },
});
