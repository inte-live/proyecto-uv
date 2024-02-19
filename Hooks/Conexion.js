import { MEDICIONES_DISPOSITIVOS, MEDICION_PROMEDIO } from "../helpers/constants";

export const medidas = async () => {
  try {
    const cabecera = {
      "Content-Type": "application/json",
    };
    const datos = await (
      await fetch(MEDICIONES_DISPOSITIVOS, {
        method: "GET",
        headers: cabecera,
      })
    ).json();
    return datos;
  } catch (error) {
    console.log("Error en la peticion - medidas", error);
    throw error; // Lanzar el error para que pueda ser capturado por el llamador
  }
};

export const promedio = async () => {
  var cabecera = {
    "Content-Type": "application/json",
  };
  const datos = await (
    await fetch(MEDICION_PROMEDIO, {
      method: "GET",
      headers: cabecera,
    })
  ).json();
  return datos;
};
