import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import auth from '@react-native-firebase/auth';
import AppNavigator from './AppNavigator';
import MainNavigator from './containers/main/MainNavigator';
import {createStackNavigator} from '@react-navigation/stack';

export const FireAuth = () => {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return (<Text></Text>);

  if (!user) {
    return (
      <AppNavigator/>
    );
  }

  return (
    <MainNavigator/> 
  );
}
