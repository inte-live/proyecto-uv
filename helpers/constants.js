export const BASE_URL = "http://192.168.0.10:3005/";

export const URL_MODULOS = "https://computacion.unl.edu.ec/";

export const URL_API_MODULOS = `${URL_MODULOS}uv/api/`;

export const MEDICIONES_DISPOSITIVOS = `${URL_API_MODULOS}medicionDispositivos`;

export const MEDICION_PROMEDIO = `${URL_API_MODULOS}medicionPromedio`;

export const MEDICION_DIA = `${URL_API_MODULOS}medicionDia`;

export const MEDICION_SEMANAL = `${URL_API_MODULOS}medicionSemana`;

export const MEDICION_FECHAS = `${URL_API_MODULOS}medicionFechas`;

export const MODEL_USER = {
  usuario: "",
  rol: "",
  email: "",
  token: "",
  isAuthenticated: false,
  tokenModule:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2wiOiJCQUNLRU5EIiwiaWF0IjoxNzA2NDI1NzY4fQ.jZo9_Apzo1aMcYFBxhG4j7wkv67ejmQ3lKN778TNbPQ",
};

const formatFecha = (date) => {
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  return `${year}-${month}-${day}`;
};

// Obtener la fecha actual
const fechaActual = new Date();

// Formatear la fecha actual
const fechaFormateada = formatFecha(fechaActual);

export const BODY_DIA = {
  fechaInicio: "2023-01-01",
  fechaFin: fechaFormateada,
};

export const BODY_SEMANAL = {
  fechaInicio: "2024-01-01",
  fechaFin: fechaFormateada,
};

export const BODY_MENSUAL = {
  fechaInicio: "2024-01-01",
  fechaFin: fechaFormateada,
}

// export const AUTHORIZATION_DIA = "x-api-key: " + MODEL_USER.tokenModule;

export const map_Value = (value) => {
  const minOriginal = 0;
  const maxOriginal = 15;
  const minNuevo = 0;
  const maxNuevo = 1;
  return (
    ((value - minOriginal) / (maxOriginal - minOriginal)) *
      (maxNuevo - minNuevo) +
    minNuevo
  );
};
