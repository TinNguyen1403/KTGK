import React, { useEffect, useState } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';
import { login, useMyContextProvider } from '../index';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isValid, setIsValid] = useState({ email: false, password: false });
  const [controller, dispatch] = useMyContextProvider();
  const { userLogin } = controller;

  const validate = () => {
    setIsValid({
      email: email.includes('@'),
      password: password.length >= 6,
    });
  };

  const handleLogin = () => {
    login(dispatch, email, password);
  };

  useEffect(() => {
    if (userLogin !== null) navigation.navigate('Home');
  }, [userLogin, navigation]);

  const isDisabled = !isValid.email || !isValid.password || email === '' || password === '';

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require('../assets/logo.jpg')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>
      <TextInput
        label="Email"
        value={email}
        onChangeText={text => setEmail(text)}
        mode="outlined"
        style={styles.textInput}
        onBlur={validate}
      />
      <TextInput
        label="Password"
        value={password}
        onChangeText={text => setPassword(text)}
        secureTextEntry={!showPassword}
        mode="outlined"
        style={styles.textInput}
        onBlur={validate}
        right={<TextInput.Icon name={showPassword ? 'eye-off' : 'eye'} onPress={() => setShowPassword(!showPassword)} />}
      />
      <Button
        mode="contained"
        onPress={handleLogin}
        disabled={isDisabled}
        style={styles.button}
      >
        Login
      </Button>
      <View style={styles.registerText}>
        <Text>Don't have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={{ color: 'blue' }}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 50,
    backgroundColor: '#F5F5F5', // Light background color
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 100,
    height: 100,
  },
  textInput: {
    marginBottom: 10,
  },
  button: {
    marginTop: 20,
    backgroundColor: '#64B5F6', // Primary button color (can be customized)
  },
  registerText: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
});

export default Login;
