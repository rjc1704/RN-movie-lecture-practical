import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text, TouchableOpacity, useColorScheme } from "react-native";
import Detail from "../screen/Detail";
import { GREEN_COLOR, YELLOW_COLOR } from "../colors";

const Stack = createNativeStackNavigator();

export default function Stacks({ navigation: { goBack } }) {
  const isDark = useColorScheme() === "dark";
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: "left",
        headerTintColor: isDark ? YELLOW_COLOR : GREEN_COLOR,
        headerLeft: () => (
          <TouchableOpacity onPress={() => goBack()}>
            <Text style={{ color: YELLOW_COLOR }}>뒤로</Text>
          </TouchableOpacity>
        ),
      }}
    >
      <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
  );
}
