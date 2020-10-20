import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import images from 'res/images';
import {Image, StatusBar} from 'react-native';
import palette from 'res/palette';
import colors from 'res/colors';

import homeNavigator from './home/homeNavigator';
import activityNavigator from './activity/activityNavigator';
import addPostNavigator from './addPost/addPostNavigator';
import profileNavigator from './profile/profileNavigator';
import searchNavigator from './search/searchNavigator';

export default function TabNavigator({NavigateToStoryCamera}) {
  const Tab = createBottomTabNavigator();
  return (
    <React.Fragment>
      <Tab.Navigator
        tabBarOptions={{
          showLabel: true,
          showIcon: false,
          style: {
            backgroundColor: colors.bottomBackGround,
            borderTopColor: colors.seperatorLineColor,
          },
        }}
       >
        <Tab.Screen name="Home" component={homeNavigator} />
        <Tab.Screen name="Search" component={searchNavigator} />
        <Tab.Screen name="AddPost" component={addPostNavigator} />
        
        <Tab.Screen name="Profile" component={profileNavigator} />
      </Tab.Navigator>
    </React.Fragment>
  );
}
