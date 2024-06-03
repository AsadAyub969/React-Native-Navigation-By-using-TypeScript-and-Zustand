// App.tsx
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import SplashStack from './src/navigation/SplashStack';
import AuthStack from './src/navigation/AuthStack';
import MainStack from './src/navigation/MainStack';
import {useNavigationStore, ScreenType} from './src/stores/navigationStore';

const App = () => {
  const {currentScreen} = useNavigationStore();

  const renderScreen = () => {
    switch (currentScreen) {
      case ScreenType.Splash:
        return <SplashStack />;
      case ScreenType.Login:
        return <AuthStack />;
      case ScreenType.Home:
        return <MainStack />;
      default:
        return <SplashStack />;
    }
  };

  return <NavigationContainer>{renderScreen()}</NavigationContainer>;
};

export default App;
