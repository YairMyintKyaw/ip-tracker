import axios from "axios";

const BASE_URL = "https://geo.ipify.org/api/v2/";
const API_KEY = "at_kaj4uUmEcQEVcE8tW9idX7yw5crv7";
const fetchData = async (ip_address) => {
  try {
    const { data } = await axios.get(
      `${BASE_URL}country,city?apiKey=${API_KEY}&ipAddress=${ip_address}`
    );
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export default fetchData;
