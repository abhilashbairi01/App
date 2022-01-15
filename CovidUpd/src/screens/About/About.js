import React from 'react'
import { View, Text } from 'react-native'
import Custombutton from '../../components/Custombutton.js'
import { useNavigation } from '@react-navigation/native';
const About = () => {
    const navigation=useNavigation();
    const onsignoutpressed=()=>{
      navigation.navigate('SignIn')
    }
    return (
        <View>
            <Custombutton text="Sign out" onPress={onsignoutpressed} />
        </View>
    )
}

export default About

