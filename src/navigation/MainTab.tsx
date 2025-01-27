import React, { ReactElement } from 'react'
import { StyleSheet } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStack from './HomeStack';
import ProfileStack from './ProfileStack';
import ItineraryStack from './ItineraryStack';
import Favorite from '../screens/Favorite';



const Tab = createBottomTabNavigator()

const MainTab = (): ReactElement => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{headerShown:false}}

      />
         <Tab.Screen
        name="ItineraryStack"
        component={ItineraryStack}
        options={{headerShown:false}}

      />
         <Tab.Screen
        name="FavoriteStack"
        component={Favorite}
        options={{headerShown:false}}

      />
      <Tab.Screen
        name="ProfileStack"
        component={ProfileStack}
        options={{headerShown:false}}

      />
    </Tab.Navigator>
  )
}

export default MainTab

const styles = StyleSheet.create({})