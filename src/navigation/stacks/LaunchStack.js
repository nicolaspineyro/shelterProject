import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Button} from 'react-native';
import routeNames from '../routeNames';

const LaunchStack = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>shelterProject</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate(routeNames.Register)}>
        <Text>Registrarme</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate(routeNames.Login)}>
        <Text>Ya tengo una cuenta.</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LaunchStack;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    fontSize: 20,
    padding: '10%'
  },
});

