import { useFocusEffect } from "@react-navigation/native";
import React, { useCallback, useEffect } from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default function Movies({ navigation: { navigate } }) {
  useEffect(() => {
    console.log("마운트");
    return () => {
      console.log("언마운트");
    };
  }, []);

  useFocusEffect(
    useCallback(() => {
      console.log("Focus");
      return () => {
        console.log("Blur");
      };
    }, [])
  );

  return (
    <View>
      <Text>Movies</Text>
      <TouchableOpacity
        onPress={() =>
          navigate("Stacks", { screen: "one", params: { id: 123 } })
        }
      >
        <Text>Go To One Screen</Text>
      </TouchableOpacity>
    </View>
  );
}
