import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import NavBar from "../components/NavBar";
import { Padding, Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const API = () => {
  return (
    <View style={styles.api}>
      <Text style={styles.api1}>API</Text>
      <NavBar
        imageDimensions={require("../assets/accountuser.png")}
        imageId={require("../assets/api.png")}
        navBarPosition="absolute"
        navBarBottom={0}
        navBarLeft={0}
        navBarWidth="unset"
        loginColor="#000"
        apiColor="#0408a7"
      />
      <View style={[styles.ltimaMedicinPromedioParent, styles.parentPosition]}>
        <Text
          style={[
            styles.ltimaMedicinPromedio,
            styles.ltimaMedicinPromedioFlexBox,
          ]}
        >
          última medición promedio
        </Text>
        <Text
          style={[
            styles.httpdireccionapiv1medi,
            styles.ltimaMedicinPromedioFlexBox,
          ]}
        >{`http://<direccion>/api/v1/medicion`}</Text>
      </View>
      <View
        style={[styles.ltimasMedicionesDeMdulosParent, styles.parentPosition]}
      >
        <Text
          style={[
            styles.ltimaMedicinPromedio,
            styles.ltimaMedicinPromedioFlexBox,
          ]}
        >
          Últimas mediciones de módulos
        </Text>
        <Text
          style={[
            styles.httpdireccionapiv1medi,
            styles.ltimaMedicinPromedioFlexBox,
          ]}
        >{`http://<direccion>/api/v1/modulos`}</Text>
      </View>
      <View style={[styles.historialDeMedicionesParent, styles.parentPosition]}>
        <Text
          style={[
            styles.ltimaMedicinPromedio,
            styles.ltimaMedicinPromedioFlexBox,
          ]}
        >
          Historial de mediciones
        </Text>
        <Text
          style={[
            styles.httpdireccionapiv1medi,
            styles.ltimaMedicinPromedioFlexBox,
          ]}
        >{`http://<direccion>/api/v1/historial`}</Text>
      </View>
      <Text style={[styles.consultasSinToken, styles.consultasTypo]}>
        Consultas sin token
      </Text>
      <Text style={[styles.consultasConToken, styles.apiChildPosition]}>
        Consultas con token
      </Text>
      <Text style={[styles.get, styles.consultasTypo]}>GET</Text>
      <Text style={[styles.post, styles.consultasTypo]}>POST</Text>
      <Text style={styles.msInformacin}>Más información</Text>
      <View style={[styles.apiChild, styles.apiChildPosition]} />
    </View>
  );
};

const styles = StyleSheet.create({
  parentPosition: {
    padding: Padding.p_base,
    backgroundColor: Color.colorWhitesmoke,
    borderRadius: Border.br_5xs,
    left: 16,
    right: 16,
    position: "absolute",
  },
  ltimaMedicinPromedioFlexBox: {
    height: 39,
    textAlign: "left",
    alignSelf: "stretch",
    fontSize: FontSize.size_sm,
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.inter,
  },
  consultasTypo: {
    height: 45,
    width: 203,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    alignItems: "center",
    display: "flex",
    color: Color.colorWhite,
    fontFamily: FontFamily.inter,
    fontWeight: "700",
  },
  apiChildPosition: {
    top: 419,
    left: 17,
    position: "absolute",
  },
  api1: {
    marginLeft: -180,
    top: 0,
    fontSize: 48,
    width: 360,
    height: 65,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    color: Color.colorWhite,
    fontFamily: FontFamily.inter,
    left: "50%",
    position: "absolute",
    fontWeight: "700",
  },
  ltimaMedicinPromedio: {
    color: Color.colorBlack,
    fontWeight: "700",
    height: 39,
    textAlign: "left",
    alignSelf: "stretch",
  },
  httpdireccionapiv1medi: {
    color: Color.colorDarkslategray,
  },
  ltimaMedicinPromedioParent: {
    top: 161,
  },
  ltimasMedicionesDeMdulosParent: {
    top: 290,
  },
  historialDeMedicionesParent: {
    top: 511,
  },
  consultasSinToken: {
    top: 71,
    left: 17,
    width: 203,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  consultasConToken: {
    height: 45,
    width: 203,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    alignItems: "center",
    display: "flex",
    color: Color.colorWhite,
    fontFamily: FontFamily.inter,
    fontWeight: "700",
  },
  get: {
    top: 116,
    left: 17,
    width: 203,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  post: {
    top: 464,
    left: 17,
    width: 203,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  msInformacin: {
    marginLeft: -67,
    top: 647,
    textDecoration: "underline",
    fontWeight: "500",
    width: 134,
    height: 22,
    fontSize: FontSize.size_sm,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    color: Color.colorWhite,
    fontFamily: FontFamily.inter,
    left: "50%",
    position: "absolute",
  },
  apiChild: {
    borderStyle: "solid",
    borderColor: Color.colorWhite,
    borderTopWidth: 1,
    height: 1,
    right: 16,
    top: 419,
  },
  api: {
    backgroundColor: "#0c2342",
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default API;
