// screens/LoginScreen.tsx
import React from 'react';
import {View, Text, Button} from 'react-native';
import {useNavigationStore, ScreenType} from '../stores/navigationStore';

const LoginScreen = () => {
  const {setCurrentScreen} = useNavigationStore();

  const handleLogin = () => {
    // Perform login logic here
    setCurrentScreen(ScreenType.Home);
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Login Screen</Text>
      <Button title="Login" onPress={handleLogin}></Button>
    </View>
  );
};

export default LoginScreen;
