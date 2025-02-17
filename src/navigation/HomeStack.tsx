import React, {ReactElement} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './../screens/Home';

const Stack = createNativeStackNavigator();

const HomeStack = (): ReactElement => {

  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown:false}}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;