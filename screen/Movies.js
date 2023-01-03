import { useFocusEffect } from "@react-navigation/native";
import React, { useCallback, useEffect } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import styled from "@emotion/native";
import { SCREEN_HEIGHT } from "../util";
import { LinearGradient } from "expo-linear-gradient";
import { GREY_COLOR } from "../colors";
import Swiper from "react-native-swiper";

export default function Movies({ navigation: { navigate } }) {
  const title = "영화제목쓰";
  const rating = 7.5;
  const overview =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  return (
    <ScrollView>
      <Swiper height="100%" showsPagination={false} autoplay loop>
        <SwiperChildView>
          <BackgroundImg
            style={StyleSheet.absoluteFill}
            // style={{ position: "absolute", top: 0, left: 0 }}
            source={require("../assets/sampleImg.jpg")}
          />
          <LinearGradient
            style={StyleSheet.absoluteFill}
            colors={["transparent", "black"]}
          />
          <Row>
            <Poster source={require("../assets/sampleImg.jpg")} />
            <Column>
              <Title>{title}</Title>
              <Rating>⭐️{rating}/10</Rating>
              <Overview>
                {overview.slice(0, 150)}
                {overview.length > 150 && "..."}
              </Overview>
            </Column>
          </Row>
        </SwiperChildView>
        <SwiperChildView>
          <BackgroundImg
            style={StyleSheet.absoluteFill}
            // style={{ position: "absolute", top: 0, left: 0 }}
            source={require("../assets/sampleImg.jpg")}
          />
          <LinearGradient
            style={StyleSheet.absoluteFill}
            colors={["transparent", "black"]}
          />
          <Row>
            <Poster source={require("../assets/sampleImg.jpg")} />
            <Column>
              <Title>{title}</Title>
              <Rating>⭐️{rating}/10</Rating>
              <Overview>
                {overview.slice(0, 150)}
                {overview.length > 150 && "..."}
              </Overview>
            </Column>
          </Row>
        </SwiperChildView>
        <SwiperChildView>
          <BackgroundImg
            style={StyleSheet.absoluteFill}
            // style={{ position: "absolute", top: 0, left: 0 }}
            source={require("../assets/sampleImg.jpg")}
          />
          <LinearGradient
            style={StyleSheet.absoluteFill}
            colors={["transparent", "black"]}
          />
          <Row>
            <Poster source={require("../assets/sampleImg.jpg")} />
            <Column>
              <Title>{title}</Title>
              <Rating>⭐️{rating}/10</Rating>
              <Overview>
                {overview.slice(0, 150)}
                {overview.length > 150 && "..."}
              </Overview>
            </Column>
          </Row>
        </SwiperChildView>
      </Swiper>
      <ListTitle>Top Rated Movies</ListTitle>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 20 }}
      >
        <VWrapper>
          <TRPoster source={require("../assets/sampleImg.jpg")} />
          <TRColumn>
            <Rating>⭐️{rating}/10</Rating>
            <TRTitle>
              {title.slice(0, 11)}
              {title.length > 11 && "..."}
            </TRTitle>
          </TRColumn>
        </VWrapper>
        <VWrapper>
          <TRPoster source={require("../assets/sampleImg.jpg")} />
          <TRColumn>
            <Rating>⭐️{rating}/10</Rating>
            <TRTitle>
              {title.slice(0, 11)}
              {title.length > 11 && "..."}
            </TRTitle>
          </TRColumn>
        </VWrapper>
        <VWrapper>
          <TRPoster source={require("../assets/sampleImg.jpg")} />
          <TRColumn>
            <Rating>⭐️{rating}/10</Rating>
            <TRTitle>
              {title.slice(0, 11)}
              {title.length > 11 && "..."}
            </TRTitle>
          </TRColumn>
        </VWrapper>
        <VWrapper>
          <TRPoster source={require("../assets/sampleImg.jpg")} />
          <TRColumn>
            <Rating>⭐️{rating}/10</Rating>
            <TRTitle>
              {title.slice(0, 11)}
              {title.length > 11 && "..."}
            </TRTitle>
          </TRColumn>
        </VWrapper>
        <VWrapper>
          <TRPoster source={require("../assets/sampleImg.jpg")} />
          <TRColumn>
            <Rating>⭐️{rating}/10</Rating>
            <TRTitle>
              {title.slice(0, 11)}
              {title.length > 11 && "..."}
            </TRTitle>
          </TRColumn>
        </VWrapper>
      </ScrollView>
      <ListTitle>Upcoming Movies</ListTitle>
      <UpcomingRow onPress={() => {}}>
        <UpcomingPoster source={require("../assets/sampleImg.jpg")} />
        <UpcomingColumn>
          <UpcomingTitle>{title}</UpcomingTitle>
          <Release>{"2022-12-02"}</Release>
          <UpcomingOverview>
            {overview.slice(0, 70)}
            {overview.length > 70 && "..."}
          </UpcomingOverview>
        </UpcomingColumn>
      </UpcomingRow>
      <UpcomingRow onPress={() => {}}>
        <UpcomingPoster source={require("../assets/sampleImg.jpg")} />
        <UpcomingColumn>
          <UpcomingTitle>{title}</UpcomingTitle>
          <Release>{"2022-12-02"}</Release>
          <UpcomingOverview>
            {overview.slice(0, 70)}
            {overview.length > 70 && "..."}
          </UpcomingOverview>
        </UpcomingColumn>
      </UpcomingRow>
    </ScrollView>
  );
}

const UpcomingRow = styled.TouchableOpacity`
  flex-direction: row;
  margin-left: 20px;
  margin-bottom: 20px;
`;
const UpcomingPoster = styled.Image`
  width: 100px;
  height: 150px;
  background-color: grey;
  border-radius: 5px;
`;
const UpcomingTitle = styled.Text`
  font-size: 20px;
  font-weight: 500;
  color: ${(props) => props.theme.upcomingText};
`;

const UpcomingOverview = styled.Text`
  font-size: 15px;
  line-height: 20px;
  font-weight: 500;
  color: ${(props) => props.theme.upcomingText};
`;

const UpcomingColumn = styled.View`
  margin-left: 20px;
  width: 60%;
`;

const Release = styled.Text`
  font-size: 16px;
  font-weight: 300;
  color: ${(props) => props.theme.upcomingText};
  margin-top: 10px;
  margin-bottom: 10px;
`;

const UpcomingView = styled.View``;

const TRPoster = styled.Image`
  width: 120px;
  height: 170px;
  background-color: grey;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;
const TRTitle = styled.Text`
  font-size: 13px;
  font-weight: 600;
  color: white;
`;

const VWrapper = styled.TouchableOpacity`
  background-color: black;
  border-radius: 5px;
  margin-right: 10px;
`;

const TRColumn = styled.View`
  padding: 10px;
`;

const ListTitle = styled.Text`
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 20px;
  font-size: 20px;
  font-weight: 500;
  color: ${(props) => props.theme.title};
`;

const Rating = styled.Text`
  color: white;
  margin-top: 5px;
  margin-bottom: 5px;
`;

const SwiperChildView = styled.View`
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
