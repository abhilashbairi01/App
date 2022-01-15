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
const NewPassword = () => {
  const navigation=useNavigation();
  const [password, setpassword] = useState();
  const [repassword, setrepassword] = useState();
  
  const onSubmitpressed = () => {
    // console.warn('Submit pressed');
    navigation.navigate('Tabnavigate')
    
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
        placeholder="Enter your New password"
        value={password}
        setvalue={setpassword}
        secureTextEntry={false}
      />
      <Custominput
        placeholder="Re-enter your New password"
        value={repassword}
        setvalue={setrepassword}
        secureTextEntry={false}
      />
      
      <Custombutton text="Submit" onPress={onSubmitpressed} />
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

export default NewPassword;
