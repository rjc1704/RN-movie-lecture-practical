import { StatusBar } from "expo-status-bar";
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from "@react-navigation/native";
import Stacks from "./navigation/Stacks";
import Tabs from "./navigation/Tabs";
import Root from "./navigation/Root";
import { useColorScheme } from "react-native";

export default function App() {
  return (
    <NavigationContainer>
      <Root />
    </NavigationContainer>
  );
}
