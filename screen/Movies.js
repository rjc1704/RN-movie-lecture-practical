import { useFocusEffect } from "@react-navigation/native";
import React, { useCallback, useEffect, useState } from "react";
import { ActivityIndicator, RefreshControl, ScrollView } from "react-native";
import styled from "@emotion/native";
import Swiper from "react-native-swiper";
import Slide from "../components/Slide";
import { getImgPath } from "../util";
import VCard from "../components/VCard";
import HCard from "../components/HCard";

export default function Movies({ navigation: { navigate } }) {
  const [nowPlayings, setNowPlayings] = useState([]);
  const [topRateds, setTopRateds] = useState([]);
  const [upcomings, setUpcomings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const API_KEY = "558a876e694085f8a052d267914acde2";
  const BASE_URL = "https://api.themoviedb.org/3/movie";
  const getNowPlaying = async () => {
    const { results } = await fetch(
      `${BASE_URL}/now_playing?api_key=${API_KEY}&language=en-US&page=1`
    ).then((res) => res.json());
    setNowPlayings(results);
  };
  const getTopRated = async () => {
    const { results } = await fetch(
      `${BASE_URL}/top_rated?api_key=${API_KEY}&language=en-US&page=1`
    ).then((res) => res.json());

    setTopRateds(results);
  };
  const getUpcoming = async () => {
    const { results } = await fetch(
      `${BASE_URL}/upcoming?api_key=${API_KEY}&language=en-US&page=1`
    ).then((res) => res.json());
    setUpcomings(results);
  };

  const getData = async () => {
    await Promise.all([getNowPlaying(), getTopRated(), getUpcoming()]);
    setIsLoading(false);
  };

  const onRefresh = async () => {
    setIsRefreshing(true);
    await getData();
    setIsRefreshing(false);
  };

  useEffect(() => {
    getData();
  }, []);

  if (isLoading) {
    return (
      <Loader>
        <ActivityIndicator />
      </Loader>
    );
  }

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} />
      }
    >
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
        {topRateds.map((movie) => (
          <VCard key={movie.id} movie={movie} />
        ))}
      </ScrollView>
      <ListTitle>Upcoming Movies</ListTitle>
      {upcomings.map((movie) => (
        <HCard key={movie.id} movie={movie} />
      ))}
    </ScrollView>
  );
}

const Loader = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const ListTitle = styled.Text`
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 20px;
  font-size: 20px;
  font-weight: 500;
  color: ${(props) => props.theme.title};
`;
