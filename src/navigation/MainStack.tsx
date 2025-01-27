import { StyleSheet } from 'react-native'
import React, { ReactElement } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MainTab from './MainTab'


const Stack=createNativeStackNavigator()

const MainStack = ():ReactElement => {
  return (
    
    <Stack.Navigator>
        <Stack.Screen name='MainTabs'
        component={MainTab}
        options={{headerShown:false}}
        />
    </Stack.Navigator>
  )
}

export default MainStack

const styles = StyleSheet.create({})