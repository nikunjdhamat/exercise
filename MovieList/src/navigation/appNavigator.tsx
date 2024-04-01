import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {ROUTE_SPLASH, ROUTE_LOGIN, ROUTE_HOME} from './routes';
import SplashScreen from '../screens/SplashScreen/splash.screen';
import HomeScreen from '../screens/HomeScreen/home.screen';
import LoginScreen from '../screens/LoginScreen/login.screen';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName={ROUTE_SPLASH}>
        <Stack.Screen
          name={ROUTE_SPLASH}
          component={SplashScreen}
          options={{gestureEnabled: false}}
        />
        <Stack.Screen name={ROUTE_LOGIN} component={LoginScreen} />
        <Stack.Screen name={ROUTE_HOME} component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
