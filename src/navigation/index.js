import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import AuthStack from './stacks/AuthStack';

const Drawer = createDrawerNavigator();

const navigation = () => (
  <NavigationContainer>
    <Drawer.Navigator>
      <Drawer.Screen
        options={{gestureEnabled: false}}
        name="Auth"
        component={AuthStack}
      />
    </Drawer.Navigator>
  </NavigationContainer>
);

export default navigation;
