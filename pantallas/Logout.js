import { Alert, Button, StyleSheet, Text, View } from "react-native";
import { useUserContext } from "../providers/UserProvider";
import { MODEL_USER } from "../helpers/constants";
import { LinearGradient } from "expo-linear-gradient";

export default function Logout() {
  const { setUser, user } = useUserContext();
  return (
    <LinearGradient
      // Agregamos el fondo degradado
      colors={['#0c2342', '#124e96', '#0c2342']}
      style={styles.container}
    >
    <View style={styles.container}>
      <Text style={styles.text_logout}>Cerrar Sesión</Text>
      <Text style={styles.text_session}>{user.usuario}</Text>
      <Button
        title="Logout"
        onPress={() => {
          Alert.alert(
            "Logout",
            "¿Deseas cerrar sesión?",
            [
              {
                text: "Cancelar",
                onPress: () => {
                  // Acciones a realizar al presionar Cancelar (puedes dejarlo vacío o agregar más lógica si es necesario)
                },
                style: "cancel", // Esto hará que este botón se muestre a la izquierda (por lo general, como un botón "Cancelar")
              },
              {
                text: "Sí",
                onPress: () => {
                  setUser(MODEL_USER);
                  // Puedes realizar más acciones aquí si es necesario antes de cerrar sesión
                },
              },
            ]
          );
          
        }}
      />
    </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text_logout: {
    fontSize: 30,
    fontWeight: "900",
    color: "#fff",
    textAlign: "center",
    marginTop: 20,
  },
  text_session: {
    fontSize: 30,
    fontWeight: "500",
    color: "#fff",
    textAlign: "center",
    marginBottom: 20,
  }

});
