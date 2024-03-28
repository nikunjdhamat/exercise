import React from 'react';
import {FlatList} from 'react-native';
import styles from './styles';
import {Movie} from '../../types';
import {ActivityIndicator} from 'react-native-paper';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import MovieComponent from './MovieComponent';

interface HomeComponentPropType {
  isLoading: boolean;
  isFetching: boolean;
  movies?: Movie[];
  onLoadMore: () => void;
}
const HomeComponent = ({
  isFetching,
  isLoading,
  movies,
  onLoadMore,
}: HomeComponentPropType) => {
  const inset = useSafeAreaInsets();
  const renderItem = ({item}: {item: Movie}) => {
    return <MovieComponent item={item} />;
  };

  if (isLoading) {
    return <ActivityIndicator size={'large'} style={styles.safeArea} />;
  }

  return (
    <FlatList
      data={movies}
      renderItem={renderItem}
      numColumns={2}
      keyExtractor={(item, index) => index.toString()}
      contentContainerStyle={[
        styles.listContainerStyle,
        {paddingTop: inset.top, paddingBottom: inset.bottom},
      ]}
      onEndReached={onLoadMore}
      onEndReachedThreshold={0.5}
      ListFooterComponent={
        isFetching ? (
          <ActivityIndicator style={styles.loadingStyle} />
        ) : undefined
      }
    />
  );
};

export default HomeComponent;
