import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, View } from "react-native";
import styled from "@emotion/native";
import Swiper from "react-native-swiper";
import Slide from "../components/Slide";
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
    <FlatList
      refreshing={isRefreshing}
      onRefresh={onRefresh}
      ListHeaderComponent={
        <>
          <Swiper height="100%" showsPagination={false} autoplay loop>
            {nowPlayings.map((movie) => (
              <Slide key={movie.id} movie={movie} />
            ))}
          </Swiper>
          <ListTitle>Top Rated Movies</ListTitle>
          <FlatList
            horizontal
            contentContainerStyle={{ paddingHorizontal: 20 }}
            showsHorizontalScrollIndicator={false}
            data={topRateds}
            renderItem={({ item }) => <VCard movie={item} />}
            keyExtractor={(item) => item.id}
            ItemSeparatorComponent={<View style={{ width: 10 }} />}
          />
          <ListTitle>Upcoming Movies</ListTitle>
        </>
      }
      data={upcomings}
      renderItem={({ item }) => <HCard movie={item} />}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={<View style={{ height: 15 }} />}
    />
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
