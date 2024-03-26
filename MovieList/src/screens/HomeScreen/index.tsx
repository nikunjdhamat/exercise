import React, {useEffect, useState} from 'react';
import {FlatList, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from './styles';
import FastImage from 'react-native-fast-image';

const url = 'https://api.themoviedb.org/3/movie/popular';
const authToken =
  'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhY2VhMDI2YjA3ZWU1ZjU0YWZlOTliNTBkYzk5YzY3OSIsInN1YiI6IjY1ZmQwZjNlYmU2ZDg4MDE3ZGIxZjkyYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.o1N7vYYKlH0ZX_cnMdCwVbzVRInRGXDlzzLloWtTLro';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: authToken,
  },
};

const HomeScreen: React.FunctionComponent = () => {
  type Movie = {title: string; poster_path: string};
  const [movies, setMovies] = useState<Movie[]>();

  useEffect(() => {
    fetch(url, options)
      .then(res => res.json())
      .then(json => setMovies(json.results))
      .catch(err => console.error('error:' + err));
  }, []);

  const renderItem = ({item}: {item: Movie}) => {
    return (
      <View style={styles.listItemContainer}>
        <FastImage
          style={styles.posterStyle}
          source={{
            uri: 'https://image.tmdb.org/t/p/original' + item.poster_path,
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
        data={movies}
        renderItem={renderItem}
        numColumns={2}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.listContainerStyle}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
