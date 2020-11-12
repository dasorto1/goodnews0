import AppNavigator from './src/AppNavigator';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AuthProvider} from './src/AuthProvider';
import {FireAuth} from './src/signupfunction';

function App() {
  return <AuthProvider><NavigationContainer>
    <FireAuth/></NavigationContainer>
    </AuthProvider>;
}

export default App;
