import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
} from 'react-native';
// import Logo from '../../assets/Images/logo.png';
import Custominput from '../../components/Custominput';
import Custombutton from '../../components/Custombutton.js/Custombutton';
import { useNavigation } from '@react-navigation/native';
// const {height} = useWindowDimensions();
const ForgotPassword = () => {
  const navigation=useNavigation();
  const [email , setemail] = useState();
  
  const onSendpressed = () => {
    // console.warn('Send pressed');
    navigation.navigate('NewPassword')
  
    
  };
 
  const onSignPress = () => {
    // console.warn('Sign pressed');
    navigation.navigate('SignIn')
  };
  return (
    // <ScrollView>
    <View>
      <Text style={styles.title}>Reset Your Password</Text>
      <Custominput
        placeholder="Enter your Email"
        value={email}
        setvalue={setemail}
        secureTextEntry={false}
      />
      
      <Custombutton text="Send" onPress={onSendpressed} />
      {/* <Custombutton
        text="Forgot Password?"
        onPress={onForgotpressed}
        type="TERTIARY"
      /> */}

       <Custombutton
        text= "Back to Sign In"
        onPress={onSignPress}
        type="TERTIARY"
      />
    </View>
    // </ScrollView>
  );
};
const styles = StyleSheet.create({
 
  title: {
    fontSize:24,
    fontWeight: 'bold',
    color:'blue',
    margin:10,
    textAlign: 'center',
  },
  text: {
  color:'white',
  marginVertical:10
  },
  link: {
    color:'#FDB075'
  }
});

export default ForgotPassword;
