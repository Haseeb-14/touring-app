import React, { ReactElement } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Favorite from '../screens/Favorite';


const Stack = createNativeStackNavigator();

const ItineraryStack = (): ReactElement => {

    return (
        <Stack.Navigator initialRouteName="Favorite">
            <Stack.Screen
                name="Favorite"
                component={Favorite}
                options={{headerShown:false}}
            />
        </Stack.Navigator>
    );
};

export default ItineraryStack;