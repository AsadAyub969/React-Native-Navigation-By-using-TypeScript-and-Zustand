// screens/HomeScreen.tsx
import React from 'react';
import {View, Text, Button} from 'react-native';
import {useNavigationStore, ScreenType} from '../stores/navigationStore';

const HomeScreen = () => {
  const {setCurrentScreen} = useNavigationStore();

  const handleLogout = () => {
    // Perform logout logic here
    setCurrentScreen(ScreenType.Login);
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home Screen</Text>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};

export default HomeScreen;
