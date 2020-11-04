import AppNavigator from './src/AppNavigator';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AuthProvider} from './src/AuthProvider';
function App() {
  return <AuthProvider><NavigationContainer>
    <AppNavigator /></NavigationContainer>
    </AuthProvider>;
}

export default App;
