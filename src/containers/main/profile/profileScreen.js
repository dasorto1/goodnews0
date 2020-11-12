import React, {Component} from 'react';
import {View, Text, Button, Alert, StyleSheet} from 'react-native';
import palette from 'res/palette';
import ProfileHeader from './ProfileHeader';
import {ScrollView, FlatList} from 'react-native-gesture-handler';
import UserBio from './UserBio';
import EditProfileButton from './EditProfileButton';
import ConstantStories from './ConstantStories';
import LineSeperator from './LineSeperator';
import ProfileGrid from './ProfileGrid';
import colors from '../../../res/colors';
import GridIcon from './gridIcon';
import {createStackNavigator} from '@react-navigation/stack';
import { AuthContext } from './../../../AuthProvider';
// const data = [{key: '1'}];

export default function profileScreen() {
  
  const Stack = createStackNavigator();
  
  class LogoutScreen extends Component {
    static contextType = AuthContext;
    
    render(){
      const me = this;
      return(
        <View><Button 
        style={Styles.logoutButton}
        title="Log Out"
        onPress={() => me.context.logout()}
      /></View>
      );
    }
    
  
  
  }

  
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Logout"
        component={LogoutScreen}
        options={{
          headerStyle: {backgroundColor: '#000'},
          headerTintColor: '#fff',
          headerTransparent: true,
          title: '',
        }}
      />
      
    </Stack.Navigator>
  );
    // <FlatList
      // style={{flex: 1, backgroundColor: colors.bottomBackGround}}
      // /*<ProfileHeader />
      // <UserBio />
      // <EditProfileButton />
      // <ConstantStories />
      // <LineSeperator />
      // <ProfileGrid />*/
      // data={data}
      // renderItem={() => (
        <>
          {/* <ProfileHeader /> */}
           {/* <UserBio />
          <EditProfileButton />
           */}
         {/* <LineSeperator /> */}
          
          {/* <ProfileGrid />  */}
        </>
  //      )}
  //   />
  // );
}
const Styles = StyleSheet.create({
  logoutButton: {
    width: '200%',
      height: '50%',
      justifyContent: 'center',
      alignItems: 'center'
  }
})