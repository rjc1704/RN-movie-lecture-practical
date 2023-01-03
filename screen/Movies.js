import { useFocusEffect } from "@react-navigation/native";
import React, { useCallback, useEffect, useState } from "react";
import { ActivityIndicator, ScrollView } from "react-native";
import styled from "@emotion/native";
import Swiper from "react-native-swiper";
import Slide from "../components/Slide";

export default function Movies({ navigation: { navigate } }) {
  const [nowPlayings, setNowPlayings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const title = "영화제목쓰";
  const rating = 7.5;
  const overview =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  const API_KEY = "558a876e694085f8a052d267914acde2";
  const BASE_URL = "https://api.themoviedb.org/3/movie";
  const getNowPlaying = async () => {
    const { results } = await fetch(
      `${BASE_URL}/now_playing?api_key=${API_KEY}&language=en-US&page=1`
    ).then((res) => res.json());
    setNowPlayings(results);
    setIsLoading(false);
  };
  useEffect(() => {
    getNowPlaying();
  }, []);

  if (isLoading) {
    return (
      <Loader>
        <ActivityIndicator />
      </Loader>
    );
  }

  return (
    <ScrollView>
      <Swiper height="100%" showsPagination={false} autoplay loop>
        {nowPlayings.map((movie) => (
          <Slide key={movie.id} movie={movie} />
        ))}
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

const Loader = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

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
