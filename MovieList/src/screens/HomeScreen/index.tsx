import React, {useState} from 'react';
import {FlatList, Text, View} from 'react-native';
import styles from './styles';
import FastImage from 'react-native-fast-image';
import {Movie} from '../../types';
import {POSTER_BASE_URL} from '../constants';
import {useGetMovieListQuery} from '../../services/movieApi';
import {ActivityIndicator} from 'react-native-paper';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

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
    return (
      <View style={styles.listItemContainer}>
        <FastImage
          style={styles.posterStyle}
          source={{
            uri: `${POSTER_BASE_URL}${item.poster_path}`,
          }}
          resizeMode={FastImage.resizeMode.cover}>
          <Text style={styles.titleContainer} numberOfLines={2}>
            {item.title}
          </Text>
        </FastImage>
      </View>
    );
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
