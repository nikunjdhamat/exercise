import React, {useEffect} from 'react';
import {CommonActions, useNavigation} from '@react-navigation/native';
import {ROUTE_HOME, ROUTE_LOGIN} from '../../navigation/routes';
import {STORAGE_KEYS, getItem} from '../../utils/storage';

const SplashScreen: React.FunctionComponent = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const navigate = async () => {
      const isLoggedIn = await getItem(STORAGE_KEYS.IS_LOGGED_IN);
      const routeName = isLoggedIn ? ROUTE_HOME : ROUTE_LOGIN;
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{name: routeName}],
        }),
      );
    };
    navigate();
  });

  return null;
};

export default SplashScreen;
