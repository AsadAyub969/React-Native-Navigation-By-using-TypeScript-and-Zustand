// stores/navigationStore.ts
import {create} from 'zustand';

// Define screen types using enum
enum ScreenType {
  Splash = 'Splash',
  Login = 'Login',
  Home = 'Home',
}

interface NavigationState {
  currentScreen: ScreenType;
  setCurrentScreen: (screen: ScreenType) => void;
}

// Create the navigation store using Zustand
export const useNavigationStore = create<NavigationState>(set => ({
  currentScreen: ScreenType.Splash,
  setCurrentScreen: screen => set({currentScreen: screen}),
}));

export {ScreenType};
