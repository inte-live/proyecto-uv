import React, { useEffect, useRef, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import {
  Ionicons,
  FontAwesome5,
  Feather,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { promedio } from "../Hooks/Conexion";
import { LinearGradient } from "expo-linear-gradient";
import * as Notifications from "expo-notifications";
import { map_Value } from "../helpers/constants";

export default function Recomendacion() {
  const [valorUv, setValorUv] = useState(0);
  const seconds = 60;
  const minutos = 30;

  const enlistarRecomendaciones = (valorUv) => {
    const data = [];
    if (valorUv < 3) {
      data.push({
        title: "Gafas de sol",
        icon: <Ionicons name="glasses" size={100} />,
        description:
          "Ofrecen protección vital para los ojos contra los rayos UV.",
      });
    } else if (valorUv >= 3 && valorUv < 6) {
      data.push(
        {
          title: "Sombrero",
          icon: <FontAwesome5 name="hat-cowboy" size={80} />,
          description:
            "Use gorra o sombrero para cubrir rostro y cuello del sol.",
        },
        {
          title: "Protector solar",
          icon: <Feather name="sun" size={65} />,
          description:
            "Aplique protector solar de factor bajo cada dos horas para resguardar la piel.",
        }
      );
    } else if (valorUv >= 6 && valorUv < 8) {
      data.push(
        {
          title: "Sombrero",
          icon: <FontAwesome5 name="hat-cowboy" size={80} />,
          description:
            "Un sombrero o gorra es esencial para proteger rostro y cuello.",
        },
        {
          title: "Ropa manga larga",
          icon: <Ionicons name="shirt" size={80} />,
          description:
            "Opte por prendas frescas y de manga larga para cubrir la mayor parte de la piel.",
        },
        {
          title: "Protector solar",
          icon: <Feather name="sun" size={75} />,
          description:
            "Utilice protector solar de factor bajo cada dos horas para mantener la piel protegida.",
        },
        {
          title: "Cuide a los bebes",
          icon: <FontAwesome5 name="baby-carriage" size={70} />,
          description:
            "Los bebés requieren especial atención; evite su exposición directa al sol.",
        },
        {
          title: "Sombra",
          icon: <FontAwesome5 name="umbrella-beach" size={73} />,
          description:
            "Busque áreas con sombra para descansar y resguardarse del sol.",
        }
      );
    } else if (valorUv >= 8 && valorUv < 11) {
      data.push(
        {
          title: "Sombrero",
          icon: <FontAwesome5 name="hat-cowboy" size={80} />,
          description:
            "Un sombrero o gorra es esencial para proteger rostro y cuello.",
        },
        {
          title: "Ropa manga larga",
          icon: <Ionicons name="shirt" size={80} />,
          description:
            "Opte por prendas frescas y de manga larga para cubrir la mayor parte de la piel.",
        },
        {
          title: "Protector solar",
          icon: <Feather name="sun" size={75} />,
          description:
            "Utilice protector solar de factor bajo cada dos horas para mantener la piel protegida.",
        },
        {
          title: "Cuide a los bebes",
          icon: <FontAwesome5 name="baby-carriage" size={70} />,
          description:
            "Los bebés requieren especial atención; evite su exposición directa al sol.",
        },
        {
          title: "Sombra",
          icon: <FontAwesome5 name="umbrella-beach" size={73} />,
          description:
            "Busque áreas con sombra para descansar y resguardarse del sol.",
        },
        {
          title: "Evite el sol",
          icon: <MaterialCommunityIcons name="weather-sunny-off" size={73} />,
          description:
            "Es aconsejable evitar la exposición al sol entre las 12h y 16h, cuando los rayos son más intensos.",
        }
      );
    } else if (valorUv >= 11) {
      data = [
        {
          title: "Evite el sol",
          icon: <MaterialCommunityIcons name="weather-sunny-off" size={73} />,
          description:
            "Se recomienda evitar la exposición al sol durante todo el día debido a la extrema intensidad de los rayos UV.",
        },
      ];
    }

    return data;
  }

  useEffect(() => {
    const obtenerPromedio = async () => {
      try {
        const valorPromedio = await promedio();
        const uv = valorPromedio.promedioUltimasMediciones.promedio;
        setValorUv(uv);
        console.log("El valor UV es: ", uv);
      } catch (error) {
        console.log("Error en useEffect - Recomendacion", error);
      }
    };

    const scheduleNotification = async () => {
      try {
        const valorPromedio = await promedio();
        const uv = valorPromedio.promedioUltimasMediciones.promedio;
        const promedioUV =map_Value(uv)
        console.log("El valor UV es: ", uv);
        await Notifications.cancelAllScheduledNotificationsAsync();
        await Notifications.scheduleNotificationAsync({
          content: {
            title: `El  promedio UV es de ${promedioUV.toFixed(2)}`,
            body: "Echa un vistazo a las últimas recomendaciones de protección UV.",
          },
          trigger: { seconds, repeats: true },
        });
      } catch (error) {
        console.log("Error en useEffect - UVPromedio", error);
        // Aquí puedes agregar un manejo de errores, como mostrar un mensaje al usuario o realizar alguna acción específica.
      }
      
    };
    
    // Llama a esta función para iniciar el temporizador y programar la primera notificación
    scheduleNotification();

    obtenerPromedio();

    const intervalId = setInterval(() => {
      scheduleNotification();
      // }, 1800000); // 1800000 milisegundos = 30 minutos
    }, minutos * seconds * 1000);

    // Limpiar el intervalo al desmontar el componente
    return () => clearInterval(intervalId);
  }, []);

  let data = [
    // {
    //   title: "Gafas de sol",
    //   icon: <Ionicons name="glasses" size={100} />,
    //   description:
    //     "Ofrecen protección vital para los ojos contra los rayos UV.",
    // },
  ];

  data = enlistarRecomendaciones(valorUv);
  

  return (
    <LinearGradient
      colors={["#0c2342", "#124e96", "#0c2342"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.gradient}
    >
      <ScrollView>
        <Text style={styles.text}>Recomendaciones</Text>
        <View style={styles.recomendaciones}>
          {data.map((item, index) => (
            <View key={index} style={styles.recomendacion}>
              <Text style={styles.textTitle}>{item.title}</Text>
              <Ionicons style={styles.icon}>{item.icon}</Ionicons>
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  flex: 1,
                }}
              >
                <Text style={styles.textDesciption}>{item.description}</Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  recomendacion: {
    flex: 1,
    backgroundColor: "rgba(255,255,255,0.8)",
    borderRadius: 15,
    padding: 16,
  },
  text: {
    fontSize: 30,
    fontWeight: "900",
    color: "#fff",
    textAlign: "center",
    marginTop: 30,
  },
  gradient: {
    alignItems: "center",
    flex: 1,
    width: "100%",
  },
  //el recuadro de fondo
  recomendaciones: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-center",
    // alignSelf: "center",
    width: "100%", // Ocupar todo el ancho disponible
    paddingHorizontal: 10, // Agregar espacios laterales
    marginVertical: 16,
    gap: 16,
  },
  textDesciption: {
    alignSelf: "center",
    fontSize: 17,
    textAlign: "center",
    color: "#0c2342",
  },
  textTitle: {
    fontSize: 30,
    fontWeight: "900",
    color: "#0c2342",
    alignSelf: "center",
  },
  icon: {
    color: "#0e5bbf",
    alignSelf: "center",
    marginVertical: 16,
  },
});
