import { Dimensions } from "react-native";

export const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } =
  Dimensions.get("window");

export const getImgPath = (path) => {
  return `https://image.tmdb.org/t/p/w500${path}`;
};
