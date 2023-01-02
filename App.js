import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import Stacks from "./navigation/Stacks";
import Tabs from "./navigation/Tabs";

export default function App() {
  return (
    <NavigationContainer>
      {/* <Stacks /> */}
      <Tabs />
    </NavigationContainer>
  );
}
