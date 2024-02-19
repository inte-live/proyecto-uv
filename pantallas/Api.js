import * as React from "react";
import { LinearGradient } from 'expo-linear-gradient';
import { Text, StyleSheet, View, Dimensions, ScrollView } from "react-native";
import NavBar from "../components/NavBar";
import { Padding, Color, Border, FontSize } from "../GlobalStyles";
import { MEDICIONES_DISPOSITIVOS, MEDICION_DIA, MEDICION_FECHAS, MEDICION_PROMEDIO, MEDICION_SEMANAL } from "../helpers/constants";

const Api = () => {
  const screenWidth = Dimensions.get('window').width;

  return (
    <LinearGradient
      // Agregamos el fondo degradado
      colors={['#0c2342', '#124e96', '#0c2342']}
      style={styles.container}
    >
      <ScrollView>
        <View style={styles.api}>
          <Text style={styles.api1}>API</Text>
          <Text style={styles.titulos}>Consultas sin token</Text>

          <Text style={styles.titulos}>GET</Text>
          <View style={styles.item}>
            <Text style={styles.text}>Listar módulos</Text>
            <Text style={styles.url}>https://computacion.unl.edu.ec/uv/api/listar</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.text}>Listar módulos activos</Text>
            <Text style={styles.url}>https://computacion.unl.edu.ec/uv/api/activos</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.text}>Últimas medición promedio</Text>
            <Text style={styles.url}>{MEDICION_PROMEDIO}</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.text}>Últimas mediciones individuales</Text>
            <Text style={styles.url}>{MEDICIONES_DISPOSITIVOS}</Text>
          </View>
          <View style={styles.divider} />
          <Text style={styles.titulos}>Consultas con token</Text>
          <Text style={styles.titulos}>POST</Text>
          <View style={styles.item}>
            <Text style={styles.text}>Historial de mediciones por día</Text>
            <Text style={styles.url}>{MEDICION_DIA}</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.text}>Historial de mediciones por semana</Text>
            <Text style={styles.url}>{MEDICION_SEMANAL}</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.text}>Historial de mediciones completo</Text>
            <Text style={styles.url}>{MEDICION_FECHAS}</Text>
          </View>
          {/* <Text style={styles.subtitulo}>Más información</Text> */}
          
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  api: {
    flex: 1,
    paddingHorizontal: Padding.p_base,
    paddingTop: Padding.p_base,
  },
  api1: {
    fontSize: 48,
    textAlign: "center",
    color: Color.colorWhite,
    fontWeight: "700",
    marginBottom: Padding.p_base,
  },
  item: {
    backgroundColor: 'rgba(255,255,255,0.7)',
    borderRadius: Border.br_5xs,
    marginBottom: Padding.p_base,
    padding: Padding.p_base,
  },
  text: {
    fontSize: FontSize.size_sm,
    color: Color.colorBlack,
    fontWeight: "700",
    marginBottom: Padding.p_base,
  },
  titulos: {
    fontSize: 24,
    color: Color.colorWhite,
    fontWeight: "700",
    marginBottom: Padding.p_base,
  },
  divider: {
    borderStyle: "solid",
    borderColor: Color.colorWhite,
    borderWidth: 1,
    marginTop: Padding.p_base,
    marginBottom: Padding.p_base,
    color: Color.colorWhite,
  },
  subtitulo: {
    fontSize: 14,
    textAlign: "center",
    color: Color.colorWhite,
    fontWeight: "300",
    marginBottom: Padding.p_base,
    textDecorationLine: "underline",
  },
  url: {
    color: "#494949"
  }
});

export default Api;
