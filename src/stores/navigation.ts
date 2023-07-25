import { create } from "zustand";
import WelcomeScreen from "../screens/WelcomeScreen";

const screens = {
    welcome: WelcomeScreen,
};

type ScreenID = keyof typeof screens;

interface NavigationProps {
    Screen: () => JSX.Element;
    navigate: (id: ScreenID) => void;
}

export const useNavigation = create<NavigationProps>((set) => ({
    Screen: screens.welcome,
    navigate: (id) => set({ Screen: screens[id] }),
}));

