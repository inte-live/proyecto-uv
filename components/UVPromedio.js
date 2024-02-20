import React, { useEffect, useState } from "react";
import { ProgressChart } from "react-native-chart-kit";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { promedio } from "../Hooks/Conexion";
import { map_Value } from "../helpers/constants";

export default function UVPromedio() {

  const [valorUv, setValorUv] = useState(0.0);

  useEffect(() => {
    const obtenerPromedio = async () => {
      try {
        const valorPromedio = await promedio();
        const uv = valorPromedio.promedioUltimasMediciones.promedio;
        setValorUv(map_Value(uv));
        // console.log("El valor UV es: ", uv);
      } catch (error) {
        console.log("Error en useEffect - UVPromedio");
        // console.log("Error en useEffect - UVPromedio", error);
        // Aquí puedes agregar un manejo de errores, como mostrar un mensaje al usuario o realizar alguna acción específica.
      }
    };
    obtenerPromedio();
  }, []);

  const { width, height } = Dimensions.get("window");

  const chartConfig = {
    backgroundGradientFromOpacity: 0,
    backgroundGradientToOpacity: 0,
    color: (opacity = 1) => {
      const valor = valorUv*10;

      if (valor >= 1 && valor < 3) {
        return `rgba(0, 255, 0, ${opacity})`; // Verde
      } else if (valor >= 3 && valor < 6) {
        return `rgba(255, 255, 0, ${opacity})`; // Amarillo
      } else if (valor >= 6 && valor < 8) {
        return `rgba(255, 128, 0, ${opacity})`; // Naranja
      } else if (valor >= 8 && valor < 11) {
        return `rgba(255, 0, 0, ${opacity})`; // Rojo
      } else if (valor >= 11) {
        return `rgba(144, 85, 253, ${opacity})`; // Azul para valores altos
      } else {
        return `rgba(0, 255, 0, ${opacity})`; //verde
      }
    },
    strokeWidth: 2, // opcional, valor predeterminado 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false,
  };

  return (
    <View style={styles.inicial}>
      <ProgressChart
        data={{
          labels: ["uv"],
          data: [valorUv],
        }}
        height={height / 3}
        strokeWidth={height / 25}
        radius={height / 9}
        chartConfig={chartConfig}
        hideLegend={true}
        width={width * 0.9}
        style={{ alignSelf: "center" }}
      />
      <Text style={styles.text}>UV {valorUv.toFixed(2)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  inicial: {
    position: "relative",
    textAlign: "center",
    justifyContent: "center",
    backgroundColor: "rgba(236, 236, 237,0.95)",
    borderRadius: 20,
    margin: "2.5%",
    width: "95%",
  },
  text: {
    position: "absolute",
    fontSize: 30,
    fontWeight: "900",
    color: "#0c2342",
    textAlign: "center",
    marginHorizontal: 130,
  },
})