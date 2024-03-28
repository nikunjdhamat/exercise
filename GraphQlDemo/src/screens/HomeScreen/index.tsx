import {gql, useQuery} from '@apollo/client';
import React from 'react';
import HomeComponent from './HomeComponent';

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
  return <HomeComponent loading={loading} dragons={data?.dragons} />;
};
export default HomeScreen;
