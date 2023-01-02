import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text, TouchableOpacity } from "react-native";

const Stack = createNativeStackNavigator();

const One = ({ route: { params }, navigation: { navigate } }) => {
  return (
    <TouchableOpacity onPress={() => navigate("two")}>
      <Text>One</Text>
    </TouchableOpacity>
  );
};

const Two = ({ navigation: { navigate, setOptions } }) => {
  return (
    <>
      <TouchableOpacity onPress={() => navigate("three")}>
        <Text>Two</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          setOptions({
            title: "변경된 제목!",
          })
        }
      >
        <Text>Set Options</Text>
      </TouchableOpacity>
    </>
  );
};

const Three = ({ navigation: { goBack, reset } }) => {
  return (
    <>
      <TouchableOpacity onPress={() => goBack()}>
        <Text>Three</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          reset({
            index: 1,
            routes: [{ name: "three" }, { name: "two" }],
          })
        }
      >
        <Text>Reset Navigation</Text>
      </TouchableOpacity>
    </>
  );
};

export default function Stacks() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: "red",
      }}
    >
      <Stack.Screen name="one" component={One} />
      <Stack.Screen name="two" component={Two} />
      <Stack.Screen
        options={{
          presentation: "modal",
        }}
        name="three"
        component={Three}
      />
    </Stack.Navigator>
  );
}
