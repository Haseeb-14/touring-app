import React, { ReactElement } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Itinerary from '../screens/Itinerary';


const Stack = createNativeStackNavigator();

const ItineraryStack = (): ReactElement => {

    return (
        <Stack.Navigator initialRouteName="Itinerary">
            <Stack.Screen
                name="Itinerary"
                component={Itinerary}
                options={{headerShown:false}}
            />
        </Stack.Navigator>
    );
};

export default ItineraryStack;