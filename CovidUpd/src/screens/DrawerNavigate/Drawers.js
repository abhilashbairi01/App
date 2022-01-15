import React from 'react'
import { View, Text } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../Homescreen/index'
import SignInScreen from '../SignInScreen/SignInScreen';

const Drawers = () => {
    const Drawer = createDrawerNavigator();
    return (
        <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Home" component={Home} />
          <Drawer.Screen name="SigIn" component={SignInScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    )
}

export default Drawers
