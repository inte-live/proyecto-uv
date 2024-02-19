import React, { useEffect, useState } from "react";
import { medidas } from "../Hooks/Conexion";
import {
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Modulos() {
  const [ultimasMediciones, setUltimasMediciones] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await medidas();
        const ultimasMediciones = data.ultimasMediciones;
        console.log(ultimasMediciones);
        setUltimasMediciones(ultimasMediciones);
      } catch (error) {
        console.log("Error en useEffect - Modulos", error);
      }
    };

    fetchData();
  }, []);

  return (
    <View style={styles.columna}>
      {ultimasMediciones.map((item, index) => (
        <View style={styles.sec_interno} key={index}>
          <TouchableOpacity
            style={styles.boton}
            onPress={() => {
              const googleMapsLink = `https://www.google.com/maps/search/?api=1&query=${item.latitud},${item.longitud}&query_place_id=${item.external_id}`;
              Linking.openURL(googleMapsLink);
            }}
          >
            <Text style={styles.text_modulo}>Modulo {item.id}</Text>
            <Text>{item.nombre}</Text>
            <Text style={styles.text_uv}>
              UV {item?.medicions[0]?.uv?.toFixed(2)}
            </Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  columna: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-center",
    // alignSelf: "center",
    width: "100%", // Ocupar todo el ancho disponible
    paddingHorizontal: 10, // Agregar espacios laterales
    marginTop: 10,
  },
  sec_interno: {
    backgroundColor: "rgba(236, 236, 237,0.85)",
    borderRadius: 15,
    // height: 140, // Altura fija de los elementos internos
    width: "100%", // Ancho fijo para cada elemento
    marginHorizontal: "1%", // Espacio horizontal entre elementos
    alignSelf: "center",
    marginBottom: 16,
    padding: 16,
  },
  boton: {
    flexDirection: "column",
    alignItems: "center",
  },
  text_modulo: {
    fontSize: 20,
    fontWeight: "900",
    color: "#0c2342",
    alignSelf: "center",
  },
  text_uv: {
    fontSize: 18,
    fontWeight: "600",
    color: "#0c2342",
  },
});
