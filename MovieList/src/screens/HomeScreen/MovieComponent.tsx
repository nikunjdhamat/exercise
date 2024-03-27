import React, {memo} from 'react';
import {Text, View} from 'react-native';
import styles from './styles';
import FastImage from 'react-native-fast-image';
import {Movie} from '../../types';
import {POSTER_BASE_URL} from '../constants';

const MovieComponent = ({item}: {item: Movie}) => {
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

export default memo(MovieComponent);
