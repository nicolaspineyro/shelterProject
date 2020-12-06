import React, {useEffect, useState} from 'react';
import {StyleSheet, View, ActivityIndicator, Text} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Home from '../../screens/Home/Home';
import About from '../../screens/About/About';
import Login from '../../screens/Login/Login';
import LaunchStack from '../stacks/LaunchStack';
import {createDrawerNavigator} from '@react-navigation/drawer';

import routes from '../routes';
import routeNames from '../routeNames';
import {NavigationContainer} from '@react-navigation/native';

const Drawer = createDrawerNavigator();

const AuthStack = ({navigation}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isLogged, setIsLogged] = useState(null);

  const validateUser = async () => {
    setIsLoading(true);
    const token = await AsyncStorage.getItem('token');
    if (token) {
      setIsLogged(true);
    } else {
      setIsLogged(false);
    }
    setIsLoading(false);
  };
  console.log(isLoading, isLogged);
  useEffect(() => {
    validateUser();
  }, []);

  return isLoading ? (
    <View style={{flex: 1, justifyContent: "center"}}>
      <ActivityIndicator size="large" />
    </View>
  ) : (
    <Drawer.Navigator
      initialRouteName={isLogged ? routeNames.Home : routeNames.Launch}>
      {routes.map((route) => (
        <Drawer.Screen
          options={route.options}
          name={route.routeName}
          component={route.component}
        />
      ))}
    </Drawer.Navigator>
  );
};

export default AuthStack;
