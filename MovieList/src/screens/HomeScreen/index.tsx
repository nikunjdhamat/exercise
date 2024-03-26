import React from 'react';
import {FlatList, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from './styles';
import FastImage from 'react-native-fast-image';
import {Movie} from '../../types';
import {POSTER_BASE_URL} from '../constants';
import {useGetMovieListQuery} from '../../services/movieApi';
import {ActivityIndicator} from 'react-native-paper';

const HomeScreen: React.FunctionComponent = () => {
  const {data, isLoading, isFetching} = useGetMovieListQuery(2);

  if (isLoading) {
    return <ActivityIndicator size={'large'} style={styles.safeArea} />;
  }

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
  return (
    <SafeAreaView style={styles.safeArea}>
      <FlatList
        data={data?.results}
        renderItem={renderItem}
        numColumns={2}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.listContainerStyle}
        ListFooterComponent={
          isFetching ? (
            <ActivityIndicator style={styles.loadingStyle} />
          ) : undefined
        }
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
