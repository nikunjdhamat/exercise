import React from 'react';
import {FlatList} from 'react-native';
import {ActivityIndicator} from 'react-native-paper';
import styles from './styles';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import DragonItem from './DragonItem';
import {Dragon} from '../../types';

interface HomeComponentPropType {
  loading: boolean;
  dragons?: Dragon[];
}
const HomeComponent = ({loading, dragons}: HomeComponentPropType) => {
  const inset = useSafeAreaInsets();

  const renderItem = ({item}: {item: Dragon}) => {
    return <DragonItem item={item} />;
  };

  if (loading) {
    return <ActivityIndicator size={'large'} style={styles.safeArea} />;
  }
  return (
    <FlatList
      data={dragons}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
      contentContainerStyle={[
        styles.listContainerStyle,
        {paddingTop: inset.top + 10, paddingBottom: inset.bottom + 10},
      ]}
    />
  );
};
export default HomeComponent;
