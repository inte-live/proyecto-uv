import React, { useMemo } from "react";
import { StyleSheet, View, Text} from "react-native";
import { Image } from "expo-image";
import { FontFamily, FontSize, Color } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const NavBar = ({
  imageDimensions,
  imageId,
  navBarPosition,
  navBarBottom,
  navBarLeft,
  navBarWidth,
  loginColor,
  apiColor,
}) => {
  const navBarStyle = useMemo(() => {
    return {
      ...getStyleValue("position", navBarPosition),
      ...getStyleValue("bottom", navBarBottom),
      ...getStyleValue("left", navBarLeft),
      ...getStyleValue("width", navBarWidth),
    };
  }, [navBarPosition, navBarBottom, navBarLeft, navBarWidth]);

  const loginStyle = useMemo(() => {
    return {
      ...getStyleValue("color", loginColor),
    };
  }, [loginColor]);

  const apiStyle = useMemo(() => {
    return {
      ...getStyleValue("color", apiColor),
    };
  }, [apiColor]);

  return (
    <View style={[styles.navBar, navBarStyle]}>
      <View style={styles.navBarChild} />
      <Image
        style={[styles.whatsappImage20240112At1, styles.apiIconLayout]}
        contentFit="cover"
        source={require("../assets/whatsapp-image-20240112-at-1322-1.png")}
      />
      <Image
        style={[styles.sunIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/sun.png")}
      />
      <Image
        style={[styles.accountUserIcon, styles.iconLayout]}
        contentFit="cover"
        source={imageDimensions}
      />
      <Text style={[styles.inicio, styles.loginFlexBox]}>Inicio</Text>
      <Text style={[styles.login, styles.loginFlexBox, loginStyle]}>Login</Text>
      <Text style={[styles.historicos, styles.apiFlexBox]}>Historicos</Text>
      <Text style={[styles.api, styles.apiFlexBox, apiStyle]}>Api</Text>
      <Image
        style={[styles.apiIcon, styles.apiIconLayout]}
        contentFit="cover"
        source={imageId}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  apiIconLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    bottom: "18.84%",
    position: "absolute",
  },
  iconLayout: {
    bottom: "33.33%",
    width: "8.89%",
    height: "46.38%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    top: "20.29%",
    position: "absolute",
  },
  loginFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontSize: FontSize.size_sm,
    top: "72.46%",
    width: "15.83%",
    height: "20.29%",
    position: "absolute",
  },
  apiFlexBox: {
    width: "28.89%",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    color: Color.colorDarkslategray,
    fontSize: FontSize.size_sm,
    top: "72.46%",
    height: "20.29%",
    position: "absolute",
  },
  navBarChild: {
    height: "88.41%",
    width: "100%",
    top: "11.59%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    backgroundColor: Color.colorWhite,
    position: "absolute",
  },
  whatsappImage20240112At1: {
    height: "60.87%",
    width: "11.11%",
    right: "56.39%",
    left: "32.5%",
    top: "20.29%",
    overflow: "hidden",
    maxWidth: "100%",
    bottom: "18.84%",
  },
  sunIcon: {
    right: "81.94%",
    left: "9.17%",
  },
  accountUserIcon: {
    right: "6.39%",
    left: "84.72%",
  },
  inicio: {
    left: "5.56%",
    color: Color.colorDarkslategray,
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontSize: FontSize.size_sm,
    top: "72.46%",
    width: "15.83%",
    height: "20.29%",
  },
  login: {
    left: "79.17%",
    color: Color.colorDarkblue,
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontSize: FontSize.size_sm,
    top: "72.46%",
    width: "15.83%",
    height: "20.29%",
  },
  historicos: {
    left: "23.61%",
  },
  api: {
    left: "47.22%",
  },
  apiIcon: {
    height: "81.16%",
    width: "15.56%",
    top: "0%",
    right: "29.72%",
    left: "54.72%",
  },
  navBar: {
    height: 69,
  },
});

export default NavBar;
