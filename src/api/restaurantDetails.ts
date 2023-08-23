import axios, { AxiosResponse } from "axios";
import constants from "../constants";

export const getRestaurantDishes = async () => {
  try {
    const response: AxiosResponse = await axios.get(constants.RESTAURANT_DISHES_API);
    return response.data;
  } catch (error: unknown) {
    console.log(error);
    return;
  }
};
