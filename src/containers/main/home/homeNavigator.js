import React from 'react';
import {createStackNavigator, TransitionSpecs} from '@react-navigation/stack';
import homeScreen from './homeScreen';
import StoryScreen from './story/StoryScreen';
import StoryCamera from './StoryCamera/StoryCamera';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import addPostNavigator from '../addPost/addPostNavigator';

import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
  StatusBar,
} from 'react-native';
import palette from 'res/palette';
import images from 'res/images';
import colors from '../../../res/colors';
import DirectMessageScreen from './DirectMessage/DirectMessageScreen';

const Tab = createMaterialTopTabNavigator();

function HomeScreenTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Good News" component={homeScreen} />
      <Tab.Screen name="Mixed News" component={homeScreen} />
      <Tab.Screen name="Bad News" component={homeScreen} />
    </Tab.Navigator>
  );
}

export default function () {
  const Stack = createStackNavigator();
  StatusBar.setBarStyle('light-content');
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreenTabs}
        options={({navigation}) => ({
          title: '',
          headerStyle: {
            backgroundColor: colors.bottomBackGround,
            shadowColor: colors.seperatorLineColor,
          },
          
          headerTitle: (
           
            <TouchableOpacity
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
               <Text style={Styles.heading}> GoodNews</Text>
            </TouchableOpacity>
          ),
          headerTitleStyle: {alignSelf: 'center'},
        })}
      />
     
    </Stack.Navigator>
  );
}

const Styles = StyleSheet.create({
  headerLeftContainer: palette.header.headerLeftContainer,
  heading: {
    color: '#ffffff',
    fontSize: 30,
    fontWeight: "bold",
    justifyContent: 'center',
    alignItems: 'stretch'
  },
  headerLeftImage: palette.header.headerLeftImage,
  headerRightContainer: palette.header.headerRightContainer,
  headerRightImage: palette.header.headerRightImage,
});
