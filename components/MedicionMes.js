import React, { useEffect, useState } from "react";
import { LineChart } from "react-native-chart-kit";
import {
  MODEL_USER,
  MEDICION_SEMANAL,
  BODY_MENSUAL,
} from "../helpers/constants";
import { Dimensions, Text } from "react-native";

export default function MedicionMes() {
  const [semanas, setSemanas] = useState({
    labels: ["2"],
    datasets: [
      {
        data: [11.2],
      },
    ],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchConfig = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-api-token": MODEL_USER.tokenModule,
          },
          body: JSON.stringify(BODY_MENSUAL),
        };
        const res = await (await fetch(MEDICION_SEMANAL, fetchConfig)).json();
        // console.log("res", res);
        const labels = res.promedioMediciones.map((_, index) => `${index}`);
        const data = res.promedioMediciones
          .filter((_, index) => index % 2 === 0)
          .map((item) => item.promedio);
        const datoLocal = {
          labels,
          datasets: [
            {
              data,
            },
          ],
        };
        // console.log("datoLocal", datoLocal);
        setSemanas(datoLocal);
      } catch (error) {
        console.log("Error en useEffect - MedicionDia"); 
        // console.log("Error en useEffect - MedicionDia", error); 
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <Text
        style={{
          fontSize: 25,
          fontWeight: "500",
          color: "#fdfaff",
          alignSelf: "baseline",
          marginLeft: "5%",
        }}
      >
        Meses
      </Text>
      <LineChart
        data={semanas}
        width={Dimensions.get("window").width * 0.9}
        height={Dimensions.get("window").width * 0.6}
        yAxisSuffix=" uv"
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          backgroundColor: "#e26a00",
          backgroundGradientFrom: "#fb8c00",
          backgroundGradientTo: "#ffa726",
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: "6",
            strokeWidth: "2",
            stroke: "#ffa726",
          },
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 15,
        }}
      />
    </>
  );
}
