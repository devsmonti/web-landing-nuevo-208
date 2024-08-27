import axios from "axios";

export const BASE_DATA = {
  Apellido: "",
  Email: "",
  Telefono: "",
  Canal: "",
  Motivo: "",
  OrigenLead: "", //utm_source
  CommercialCampaign: "", //utm_medium
  Campaign: "", //C12_PRUEBACARGABASE
  Modelo_Pedido: "",
};

const baseUrl = "https://cloud01.desol.cloud:15504";

export async function sendPostRequest(url, data) {
  const token = process.env.REACT_APP_DESOL_KEY;
  const config = {
    headers: {
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6Im1vbnRpcm9uaVRlc3QiLCJuYmYiOjE3MDMwNzk1MDYsImV4cCI6MTcwMzA4MzEwNiwiaWF0IjoxNzAzMDc5NTA2fQ.wZIxJJnsxKXK0qgyzhIrZ4s81ynMinWtUPVyzhLAtmo`,
    },
    "Content-Type": "application/json",
  };

  try {
    const response = await axios.post(`${baseUrl}${url}`, data, config);
    return response.data;
  } catch (error) {
    console.error("Error al realizar la petición:", error);
    throw error;
  }
}
