import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, View } from "react-native";
import styled from "@emotion/native";
import Swiper from "react-native-swiper";
import Slide from "../components/Slide";
import VCard from "../components/VCard";
import HCard from "../components/HCard";
import { useQuery, useQueryClient } from "react-query";
import { getNowPlaying, getTopRated, getUpcoming } from "../api";

export default function Movies({ navigation: { navigate } }) {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const queryClient = useQueryClient();

  const {
    data: nowPlayingData,
    isLoading: isLoadingNP,
    isRefetching,
  } = useQuery(["Movies", "NowPlaying"], getNowPlaying);
  const { data: topRatedData, isLoading: isLoadingTR } = useQuery(
    ["Movies", "TopRated"],
    getTopRated
  );
  const { data: upcomingData, isLoading: isLoadingUC } = useQuery(
    ["Movies", "Upcoming"],
    getUpcoming
  );

  const onRefresh = async () => {
    setIsRefreshing(true);
    // await Promise.all([refetchNP(), refetchTR(), refetchUC()]);
    await queryClient.refetchQueries(["Movies"]);
    setIsRefreshing(false);
  };

  const isLoading = isLoadingNP || isLoadingTR || isLoadingUC;

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
            {nowPlayingData.results.map((movie) => (
              <Slide key={movie.id} movie={movie} />
            ))}
          </Swiper>
          <ListTitle>Top Rated Movies</ListTitle>
          <FlatList
            horizontal
            contentContainerStyle={{ paddingHorizontal: 20 }}
            showsHorizontalScrollIndicator={false}
            data={topRatedData.results}
            renderItem={({ item }) => <VCard movie={item} />}
            keyExtractor={(item) => item.id}
            ItemSeparatorComponent={<View style={{ width: 10 }} />}
          />
          <ListTitle>Upcoming Movies</ListTitle>
        </>
      }
      data={upcomingData.results}
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
