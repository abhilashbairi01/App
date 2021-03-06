import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
} from 'react-native';
import Logo from '../../../assets/Images/logo.png';
import Custominput from '../../components/Custominput';
import Custombutton from '../../components/Custombutton.js/Custombutton';
import { useNavigation } from '@react-navigation/native';
// const {height} = useWindowDimensions();
const SignInScreen = () => {
  const navigation=useNavigation();
  const [username, setusername] = useState();
  const [password, setpassword] = useState();
  const onSignInpressed = () => {
    // console.warn('sign pressed');
    navigation.navigate('Tabnavigate')
    // navigation.navigate('Drawer')
  };
  const onForgotpressed = () => {
    // console.warn('forgot pressed');
    navigation.navigate('ForgotPassword')
  };
  const onSignInFacebook = () => {
    console.warn('sign in facebook');
  };
  const onSignInGoogle = () => {
    console.warn('sign in google');
  };
  const onCreateAccount = () => {
    // console.warn('create account');
    navigation.navigate('SignUp')
  };
  return (
    <ScrollView>
      <View >
        <Image source={Logo} style={styles.Logo} resizeMode="contain"></Image>
        <Custominput
          placeholder="Username"
          value={username}
          setvalue={setusername}
          secureTextEntry={false}
        />
        <Custominput
          placeholder="Password"
          value={password}
          setvalue={setpassword}
          secureTextEntry={true}
        />
        <Custombutton text="Sign In" onPress={onSignInpressed} />
        <Custombutton
          text="Forgot Password?"
          onPress={onForgotpressed}
          type="TERTIARY"
        />
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
          text="Don't have an account? Create one"
          onPress={onCreateAccount}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  Logo: {
    // width: '100%',
    // height: 100,
    // maxWidth:'100%',
    // MaxHeight:100,
    width: 250,
    height: 250,
    resizeMode: 'cover',
    marginTop: '2%',
    marginRight: 'auto',
    marginLeft: 'auto',
    display: 'flex',
  },
});

export default SignInScreen;
