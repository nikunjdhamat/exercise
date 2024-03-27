import {gql, useQuery} from '@apollo/client';
import React from 'react';
import {FlatList} from 'react-native';
import {ActivityIndicator} from 'react-native-paper';
import styles from './styles';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import DragonItem from './DragonItem';
import {Dragon} from '../../types';

const GET_DRAGONS = gql`
  query Dragons {
    dragons {
      name
      first_flight
      diameter {
        feet
      }
      launch_payload_mass {
        lb
      }
    }
  }
`;

const HomeScreen: React.FunctionComponent = () => {
  const {loading, data} = useQuery(GET_DRAGONS);
  const inset = useSafeAreaInsets();

  const renderItem = ({item}: {item: Dragon}) => {
    return <DragonItem item={item} />;
  };

  if (loading) {
    return <ActivityIndicator size={'large'} style={styles.safeArea} />;
  }
  return (
    <FlatList
      data={data?.dragons}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
      contentContainerStyle={[
        styles.listContainerStyle,
        {paddingTop: inset.top, paddingBottom: inset.bottom},
      ]}
    />
  );
};
export default HomeScreen;
