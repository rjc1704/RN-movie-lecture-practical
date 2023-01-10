import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Movies from "../screen/Movies";
import My from "../screen/My";
import { MaterialIcons } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";
import { useColorScheme } from "react-native";
import { DARK_COLOR, GREEN_COLOR, GREY_COLOR, YELLOW_COLOR } from "../colors";

const Tab = createBottomTabNavigator();

export default function Tabs() {
  const isDark = useColorScheme() === "dark";

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelPosition: "beside-icon",
        tabBarActiveTintColor: isDark ? YELLOW_COLOR : GREEN_COLOR,
        headerTintColor: isDark ? YELLOW_COLOR : GREEN_COLOR,
      }}
      sceneContainerStyle={{
        backgroundColor: isDark ? DARK_COLOR : GREY_COLOR,
      }}
    >
      <Tab.Screen
        options={{
          title: "영화",
          headerTitleAlign: "center",
          tabBarLabel: "Movies",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="local-movies" size={size} color={color} />
          ),
        }}
        name="Movies"
        component={Movies}
      />
      <Tab.Screen
        options={{
          title: "내가 작성한 댓글",
          tabBarLabel: "My",
          tabBarIcon: ({ color, size }) => (
            <Foundation name="social-myspace" size={size} color={color} />
          ),
        }}
        name="My"
        component={My}
      />
    </Tab.Navigator>
  );
}
