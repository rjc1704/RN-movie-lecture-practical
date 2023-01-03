import React from "react";
import { StyleSheet } from "react-native";
import { getImgPath, SCREEN_HEIGHT } from "../util";
import styled from "@emotion/native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
export default function Slide({ movie }) {
  const { navigate } = useNavigation();
  return (
    <SwiperChildView>
      <BackgroundImg
        style={StyleSheet.absoluteFill}
        // style={{ position: "absolute", top: 0, left: 0 }}
        source={{
          uri: getImgPath(movie.backdrop_path),
        }}
      />
      <LinearGradient
        style={StyleSheet.absoluteFill}
        colors={["transparent", "black"]}
      />
      <Row
        onPress={() =>
          navigate("Stacks", {
            screen: "Detail",
            params: { movieId: movie.id },
          })
        }
      >
        <Poster
          source={{
            uri: getImgPath(movie.poster_path || ""),
          }}
        />
        <Column>
          <Title>{movie.title}</Title>
          <Rating>⭐️{movie.vote_average}/10</Rating>
          <Overview>
            {movie.overview.slice(0, 150)}
            {movie.overview.length > 150 && "..."}
          </Overview>
        </Column>
      </Row>
    </SwiperChildView>
  );
}
const SwiperChildView = styled.TouchableOpacity`
  flex: 1;
  justify-content: flex-end;
  height: ${SCREEN_HEIGHT / 3 + "px"};
  background-color: green;
`;

const BackgroundImg = styled.Image`
  height: 100%;
  width: 100%;
`;

const Row = styled.TouchableOpacity`
  flex: 1;
  flex-direction: row;
  align-items: flex-end;
`;

const Column = styled.View`
  width: 65%;
  margin-left: 10px;
  margin-bottom: 10px;
`;

const Poster = styled.Image`
  width: 100px;
  height: 160px;
  /* height: 100%; */
  margin-left: 10px;
  margin-bottom: 10px;
`;

const Title = styled.Text`
  font-size: 20px;
  font-weight: 600;
  color: white;
`;

const Overview = styled.Text`
  font-size: 12px;
  color: white;
`;

const Rating = styled.Text`
  color: white;
  margin-top: 5px;
  margin-bottom: 5px;
`;
