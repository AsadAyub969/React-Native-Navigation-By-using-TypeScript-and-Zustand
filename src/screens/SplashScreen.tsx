// screens/SplashScreen.tsx
import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {useNavigationStore, ScreenType} from '../stores/navigationStore';

const SplashScreen = () => {
  const {setCurrentScreen} = useNavigationStore();

  useEffect(() => {
    // Simulate a splash screen timeout
    const timer = setTimeout(() => {
      setCurrentScreen(ScreenType.Login);
    }, 2000);

    return () => clearTimeout(timer);
  }, [setCurrentScreen]);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Splash Screen</Text>
    </View>
  );
};

export default SplashScreen;
