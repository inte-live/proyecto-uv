import React, { useEffect, useState } from "react";
import { LineChart } from "react-native-chart-kit";
import { MEDICION_DIA, BODY_DIA, MODEL_USER } from "../helpers/constants";
import { Dimensions, Text } from "react-native";

export default function MedicionDia() {
  const [dias, setDias] = useState({
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
          body: JSON.stringify(BODY_DIA),
        };
        const res = await (await fetch(MEDICION_DIA, fetchConfig)).json();
        // console.log("res", res);
        const labels = res.promedioMediciones.map((_,index) => `${index}`);
        const data = res.promedioMediciones.map((item) => item.promedio);
        const datoLocal = {
          labels,
          datasets: [
            {
              data,
            },
          ],
        };
        // console.log("datoLocal", datoLocal);
        setDias(datoLocal);
      } catch (error) {
        console.log("Error en useEffect - MedicionDia", error);
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
            Días
          </Text>
    <LineChart
      data={dias}
      width={Dimensions.get("window").width * 0.9}
      height={Dimensions.get("window").width * 0.6}
      yAxisSuffix="uv"
      yAxisInterval={1} // optional, defaults to 1
      chartConfig={{
        backgroundColor: "#005200",
        backgroundGradientFrom: "#70c700",
        backgroundGradientTo: "#00b600",
        decimalPlaces: 2, // optional, defaults to 2dp
        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        style: {
          borderRadius: 16,
        },
        propsForDots: {
          r: "6",
          strokeWidth: "2",
          stroke: "#005200",
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
