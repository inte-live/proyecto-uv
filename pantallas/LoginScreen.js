import React, { useState } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  StatusBar,
  TouchableOpacity,
  Linking,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";
import { useUserContext } from "../providers/UserProvider";
import { BASE_URL, MODEL_USER, PAGINA_DE_REGISTRO } from "../helpers/constants";
const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();
  const { setUser } = useUserContext();

  const handleLogin = async () => {
    const data = {
      correo: email,
      clave: password,
    };

    try {
      const response = await fetch(`${BASE_URL}api/sesion`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      console.log("response", response);
      if (response.ok) {
        console.log("positivo");
        // Convierte la respuesta a formato JSON
        const data = await response.json();
        if (data.code !== 200) {
          //  console.error("Error en la petición:", data.code);
          Alert.alert("Error", data.msg, [{ text: "OK" }]);
          return;
        }
        const { usuario, rol, correo, token } = data;

        // Construye el nuevo objeto con los campos deseados
        const newData = {
          usuario,
          correo,
          rol,
          email,
          token,
          isAuthenticated: data.code === 200, // Ajusta la lógica según tus necesidades
          tokenModule: MODEL_USER.tokenModule, // Define cómo obtener este valor
        };

        // Actualiza el estado con el nuevo objeto
        setUser(newData);
        //   navigation.navigate("Inicio");
        Alert.alert("Bienvenido " + usuario, "Sesión iniciada", [
          {
            text: "OK",
            onPress: () => navigation.navigate("Historicos"),
          },
        ]);
      } else {
        console.log("negativo");
        //   console.error("Error en la petición:", response.statusText);
        Alert.alert("Error", response.statusText, [{ text: "OK" }]);
      }
    } catch (error) {
      if (error instanceof TypeError && error.message.includes('Network request failed')) {
        Alert.alert("Error de red", "No se pudo conectar al servidor. Verifica tu conexión a internet.", [{ text: "OK" }]);
      } else {
        console.error("Error", error);
        Alert.alert("Error", "Ocurrió un error inesperado.", [{ text: "OK" }]);
      }
    }
  };
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.header}>
        <Image source={require("./../img/logo2.png")} style={styles.logo} />
        <Text style={styles.text_header}>Bienvenido</Text>
      </View>
      <View style={styles.footer}>
        <View style={styles.textInputContainer}>
          <Icon name="user-o" style={styles.inputIcon} />
          <TextInput
            style={styles.textInput}
            placeholder="Correo Electrónico"
            onChangeText={setEmail}
            value={email}
            keyboardType="email-address"
          />
        </View>
        <View style={styles.textInputContainer}>
          <Icon name="lock" style={styles.inputIcon} />
          <TextInput
            style={styles.textInput}
            placeholder="Contraseña"
            onChangeText={setPassword}
            value={password}
            keyboardType="default"
            secureTextEntry={true}
          />
        </View>
        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
            <Text style={styles.loginText}>Iniciar Sesión</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.signupText}>¿Aun no tienes una cuenta?</Text>
        <TouchableOpacity onPress={() => Linking.openURL(PAGINA_DE_REGISTRO)}>
          <Text style={styles.signupText}>Regístrate</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0C2342",
  },
  logo: {
    width: 260,
    height: 170,
  },
  header: {
    flex: 0.85,
    alignItems: "center",
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    flex: 0.7,
    backgroundColor: "#ececed",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  text_header: {
    color: "#d7f1ff",
    fontWeight: "bold",
    fontSize: 50,
    textAlign: "center",
    marginTop: 25,
  },
  textInputContainer: {
    marginBottom: 15,
    backgroundColor: "#ffffff",
    borderRadius: 25,
    paddingHorizontal: 15,
    height: 50,
    flexDirection: "row",
    alignItems: "center",
  },
  inputIcon: {
    color: "#050505",
    fontSize: 20,
    marginRight: 10,
  },
  textInput: {
    color: "#050505",
    fontSize: 18,
    flex: 1,
  },
  btnContainer: {
    alignItems: "center",
    marginTop: 7,
  },
  loginBtn: {
    width: "100%",
    backgroundColor: "#0C2342",
    borderRadius: 25,
    paddingVertical: 13,
  },
  loginText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  signupBtn: {
    width: "100%",
    backgroundColor: "#124e96",
    borderRadius: 25,
    paddingVertical: 13,
    marginTop: 15,
  },
  signupText: {
    color: "#3a2e81",
    textAlign: "center",
    marginTop: 10,
    fontSize: 14,
  },
});
export default LoginScreen;
