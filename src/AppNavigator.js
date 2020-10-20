import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {
  View,
  Text,
  Button,
  TextInput,
  StyleSheet,
  Image,
  StatusBar,
} from 'react-native';
import palette from 'res/palette';
import TabNavigator from './containers/main/TabNavigator';
import MainNavigator from './containers/main/MainNavigator';
import {TouchableOpacity} from 'react-native-gesture-handler';
import images from 'res/images';
import colors from './res/colors';

StatusBar.setBarStyle('light-content');

export default function AppNavigator() {
  const [validate, setValidate] = React.useState(false); //giriş yapılınca geri geri gelmeyi deaktif etmek için kullandık
  function LoginScreen() {
    const _signInAsync = async () => {
      setValidate(true);
    };
    return (
      <View style={Styles.container}>
        <View >
        <Text style={Styles.title}>GoodNews</Text>
        </View>
        <View style={Styles.userNameContainer}>
          <TextInput
            style={Styles.userNameInput}
            placeholder="Username or Email"
            placeholderTextColor={colors.textFaded2}
          />
        </View>
        <View style={Styles.passwordContainer}>
          <TextInput
            secureTextEntry={true}
            style={Styles.passwordInput}
            placeholder="Password"
            placeholderTextColor={colors.textFaded2}
          />
        </View>
        <View style={Styles.forgotPasswordContainer}>
          <TouchableOpacity>
            <Text style={Styles.forgotPasswordText}>Forgot password?</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={Styles.loginContainer} onPress={_signInAsync}>
          <Text style={Styles.loginText}>Log In</Text>
        </TouchableOpacity>
        <View
          style={{
            //flex: 0.1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 30,
          }}>
          <View style={{flex: 1, height: 1, backgroundColor: '#262626'}}></View>
          <Text style={{marginLeft: 40, marginRight: 40, color: '#969696'}}>
            OR
          </Text>
          <View
            style={{
              flex: 1,
              height: 1,
              backgroundColor: '#262626',
            }}></View>
        </View>
        
        <View style={{flexDirection: 'row', marginTop: 50}}>
          <View
            style={{
              flex: 1,
              backgroundColor: '#262626',
              height: 1,
            }}></View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 20,
          }}>
          <Text style={{color: '#969696'}}>Don't have an account ?</Text>
          <TouchableOpacity>
            <Text style={{color: '#008bef'}}> Sign Up.</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  const Stack = createStackNavigator();
  return validate ? (
    <MainNavigator />
  ) : (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          headerStyle: {backgroundColor: '#000'},
          headerTintColor: '#fff',
          headerTransparent: true,
          title: '',
        }}
      />
    </Stack.Navigator>
  );
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#191970',
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
  },
  userNameContainer: {
    borderColor: '#262626',
    backgroundColor: colors.loginInputBackground,
    borderWidth: 1,
    borderRadius: 5,
    height: 40,
    justifyContent: 'center',
    //alignItems: 'center',
    marginStart: 20,
    marginEnd: 20,
    marginTop: 20,
    marginBottom: 20,
  },
  title:{
    color: '#969696',
    fontSize: 50,
    fontWeight: "bold",
    justifyContent: 'center',
    alignItems: 'stretch'
  },


  userNameInput: {
    marginStart: 10,
    color: 'white',
  },
  passwordContainer: {
    borderColor: '#262626',
    borderWidth: 1,
    borderRadius: 5,
    height: 40,
    justifyContent: 'center',
    //alignItems: 'center',
    marginStart: 20,
    marginEnd: 20,
    backgroundColor: colors.loginInputBackground,
    marginBottom: 20,
  },
  passwordInput: {marginStart: 10, color: 'white'},
  forgotPasswordContainer: {
    alignItems: 'flex-end',
    marginEnd: 20,
  },
  forgotPasswordText: {
    color: '#0088f8',
  },
  loginContainer: {
    alignItems: 'center',
    height: 40,
    marginTop: 30,
    backgroundColor: '#0088f8',
    justifyContent: 'center',
    marginStart: 20,
    marginEnd: 20,
    borderRadius: 5,
  },
  loginText: {
    color: '#fff',
  },
});
