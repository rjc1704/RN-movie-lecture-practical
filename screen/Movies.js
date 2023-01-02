import { useFocusEffect } from "@react-navigation/native";
import React, { useCallback, useEffect } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styled from "@emotion/native";

const SectionTitle = styled.Text`
  font-size: 30px;
  color: ${(props) => props.theme.title};
`;

export default function Movies({ navigation: { navigate } }) {
  return (
    <View>
      <SectionTitle>Movies</SectionTitle>
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
