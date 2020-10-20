import React from 'react';
import {createStackNavigator, TransitionSpecs} from '@react-navigation/stack';
import homeScreen from './homeScreen';
import StoryScreen from './story/StoryScreen';
import StoryCamera from './StoryCamera/StoryCamera';
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

export default function () {
  const Stack = createStackNavigator();
  StatusBar.setBarStyle('light-content');
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={homeScreen}
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
