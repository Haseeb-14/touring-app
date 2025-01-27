import React, { ReactElement } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './AuthStack';
import MainStack from './MainStack';
import RNBootSplash from "react-native-bootsplash";

const AppNavigator = (): ReactElement => {
  const isLoggedIn = false

  return (
    <NavigationContainer  >
      {isLoggedIn ? <MainStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default AppNavigator;