import React, { useState } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';
import { createAccount } from '../index';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { IconButton } from 'react-native-paper';

const Register = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [fullName, setFullname] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const validate = () => {
    return (
      email.includes('@') &&
      password.length >= 6 &&
      password === confirmPassword &&
      email !== '' &&
      password !== '' &&
      confirmPassword !== '' &&
      fullName !== ''
    );
  };

  const handleRegister = () => {
    createAccount(email, password, fullName);
  };

  const isDisabled = !validate();

  const styles = StyleSheet.create({
    container: {
      marginHorizontal: 20,
      marginTop: 50,
    },
    image: {
      width: 100,
      height: 100,
      marginBottom: 10,
    },
    passwordContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    loginText: {
      textAlign: 'center',
      color: 'blue',
      textDecorationLine: 'underline',
    },
  });

  return (
    <View style={styles.container}>
      <View style={{ alignItems: 'center', marginBottom: 20 }}>
        <Image
          source={require('../assets/logo.jpg')}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
      <TextInput
        label="Full Name"
        value={fullName}
        onChangeText={setFullname}
        mode="outlined"
        style={{ marginBottom: 10 }}
      />
      <TextInput
        label="Email"
        value={email}
        onChangeText={setEmail}
        mode="outlined"
        style={{ marginBottom: 10 }}
      />
      <View style={styles.passwordContainer}>
        <TextInput
          label="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!showPassword}
          mode="outlined"
          style={{ marginBottom: 10, flex: 1 }}
        />
        <IconButton
          icon={showPassword ? 'eye-off' : 'eye'}
          onPress={() => setShowPassword(!showPassword)}
        />
      </View>
      <View style={styles.passwordContainer}>
        <TextInput
          label="Confirm Password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry={!showConfirmPassword}
          mode="outlined"
          style={{ marginBottom: 20, flex: 1 }}
        />
        <IconButton
          icon={showConfirmPassword ? 'eye-off' : 'eye'}
          onPress={() => setShowConfirmPassword(!showConfirmPassword)}
        />
      </View>
      <Button
        buttonColor='#64B5F6'
        textColor='black'
        mode="contained"
        onPress={handleRegister}
        style={{ marginBottom: 10 }}
        disabled={isDisabled}
      >
        Register
      </Button>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={{ textAlign: 'center' }}>
          Already have an account? <Text style={styles.loginText}>Log in</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Register;
