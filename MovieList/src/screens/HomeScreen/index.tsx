import React, {useState} from 'react';
import {FlatList} from 'react-native';
import styles from './styles';
import {Movie} from '../../types';
import {useGetMovieListQuery} from '../../services/movieApi';
import {ActivityIndicator} from 'react-native-paper';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import MovieComponent from './MovieComponent';

const HomeScreen: React.FunctionComponent = () => {
  const [page, setPage] = useState(1);
  const inset = useSafeAreaInsets();
  const {data, isLoading, isFetching} = useGetMovieListQuery(page, {
    refetchOnMountOrArgChange: true,
  });

  const fetchNextPage = () => {
    if (data?.page && !isFetching) {
      setPage(data.page + 1);
    }
  };
  const renderItem = ({item}: {item: Movie}) => {
    return <MovieComponent item={item} />;
  };

  if (isLoading) {
    return <ActivityIndicator size={'large'} style={styles.safeArea} />;
  }

  return (
    <FlatList
      data={data?.results}
      renderItem={renderItem}
      numColumns={2}
      keyExtractor={(item, index) => index.toString()}
      contentContainerStyle={[
        styles.listContainerStyle,
        {paddingTop: inset.top, paddingBottom: inset.bottom},
      ]}
      onEndReached={fetchNextPage}
      onEndReachedThreshold={0.5}
      ListFooterComponent={
        isFetching ? (
          <ActivityIndicator style={styles.loadingStyle} />
        ) : undefined
      }
    />
  );
};

export default HomeScreen;
