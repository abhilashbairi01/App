import React, {useContext, useState} from 'react';
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
// import { Authcontext } from '../../Navigation/AuthProvider';
// const {height} = useWindowDimensions();
const SignUpScreen = () => {
  const navigation=useNavigation();
  const [username, setusername] = useState();
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const [passwordrepeat, setpasswordrepeat] = useState();
  
  // const { register } =useContext(Authcontext);
  const onRegisterpressed = () => {
    // console.warn('Register pressed');
    // register(email, password)
     navigation.navigate('ConfirmEmail')
  };
 
  const onSignInFacebook = () => {
    console.warn('sign in facebook');
  };
  const onSignInGoogle = () => {
    console.warn('sign in google');
  };
  const onSignPress = () => {
    // console.warn('Sign pressed');
    navigation.navigate('SignIn')
  };
  return (
    <ScrollView>
    <View>
      <Text style={styles.title}>Create an Account</Text>
      <Custominput
        placeholder="Username"
        value={username}
        setvalue={setusername}
        secureTextEntry={false}
      />
      <Custominput
        placeholder="Email"
        value={email}
        setvalue={setemail}
        secureTextEntry={false}
      />
      
      
      <Custominput
        placeholder="Password"
        value={password}
        setvalue={setpassword}
        secureTextEntry={true}
      />
      <Custominput
        placeholder="Re-enter Password"
        value={passwordrepeat}
        setvalue={setpasswordrepeat}
        secureTextEntry={true}
      />
      <Custombutton text="Register" onPress={onRegisterpressed} />
      {/* <Custombutton
        text="Forgot Password?"
        onPress={onForgotpressed}
        type="TERTIARY"
      /> */}
      <Text style={styles.text}>By Registering, you confirm that you aceept our <Text style={styles.link}>Terms of Use</Text> and <Text style={styles.link}>Privacy Policy</Text></Text>
      <Custombutton
        text="Sign In With facebook"
        onPress={onSignInFacebook}
        bgColor="#E7EAF4"
        fgColor="#4765A9"
      />
      <Custombutton
        text="Sign In with Google"
        onPress={onSignInGoogle}
        bgColor="#FAE9EA"
        fgColor="#DD4D44"
      />
      <Custombutton
        text= "Have an account? SignIn"
        onPress={onSignPress}
        type="TERTIARY"
      />
    </View>
     </ScrollView>
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
  color:'black',
  marginVertical:10
  },
  link: {
    color:'#FDB075'
  }
});

export default SignUpScreen;
