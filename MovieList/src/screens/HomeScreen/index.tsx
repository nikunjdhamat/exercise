import React, {useState} from 'react';
import {useGetMovieListQuery} from '../../services/movieApi';
import HomeComponent from './HomeComponent';

const HomeScreen: React.FunctionComponent = () => {
  const [page, setPage] = useState(1);
  const {data, isLoading, isFetching} = useGetMovieListQuery(page, {
    refetchOnMountOrArgChange: true,
  });

  const fetchNextPage = () => {
    if (data?.page && !isFetching) {
      setPage(data.page + 1);
    }
  };
  return (
    <HomeComponent
      isFetching={isFetching}
      isLoading={isLoading}
      movies={data?.results}
      onLoadMore={fetchNextPage}
    />
  );
};

export default HomeScreen;
