import React, {FC, useEffect, useState} from 'react';
import {Button, TextInput, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {useSignInUser, useSignUpUser} from '../../hooks';
import {setUserData} from '../../store/slices/auth';
import {styles} from './style';

export const Login: FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const {
    isLoading: isLogingIn,
    isError: isLoginError,
    isSuccess: isLoginSuccess,
    data: loginData,
    mutate: signInUser,
  } = useSignInUser();

  const {
    isLoading: isSigningUp,
    isError: isSignUpError,
    isSuccess: isSignUpSuccess,
    data: signUpData,
    mutate: signUpUser,
  } = useSignUpUser();

  const logIn = () => {
    signInUser({email, password});
  };

  const signUp = () => {
    signUpUser({email, password});
  };

  useEffect(() => {
    console.log({isLoginSuccess});
    if (isLoginSuccess && loginData) dispatch(setUserData(loginData));
  }, [isLoginSuccess]);

  useEffect(() => {
    if (isSignUpSuccess && signUpData) dispatch(setUserData(signUpData));
  }, [isSignUpSuccess]);

  return (
    <View style={styles.container}>
      <View style={styles.loginWrapper}>
        <TextInput
          style={styles.textInput}
          placeholder={'Enter Email Address'}
          onChangeText={(email: string) => setEmail(email)}
          autoFocus
        />
        <TextInput
          style={styles.textInput}
          placeholder={'Enter Password here'}
          onChangeText={(password: string) => setPassword(password)}
          secureTextEntry
        />
        <View style={styles.rowFlex}>
          <Button title={'Login'} onPress={logIn} />
          <Button color={'black'} title={'Signup'} onPress={signUp} />
        </View>
      </View>
    </View>
  );
};
