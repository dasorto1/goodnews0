import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class forgotpass extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <View style={Styles.container}>
        <View >
        <Text style={Styles.title}>GoodNews</Text>
        </View>
        <View style={Styles.userNameContainer}>
          <TextInput
            style={Styles.userNameInput}
            placeholder="Username"
            placeholderTextColor={colors.textFaded2}
          />
        </View>
        <View style={Styles.userNameContainer}>
          <TextInput
            style={Styles.userNameInput}
            placeholder="Email"
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
        <TouchableOpacity style={Styles.loginContainer} onPress={_signInAsync}>
          <Text style={Styles.loginText}>Register</Text>
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
        
      </View>
    );
  }
}
