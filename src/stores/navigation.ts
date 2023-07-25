import { create } from "zustand";
import WelcomeScreen from "../screens/WelcomeScreen";

const screens = {
    welcome: WelcomeScreen,
};

type ScreenID = keyof typeof screens;

interface NavigationProps {
    Screen: () => JSX.Element;
    push: (id: ScreenID) => void;
}

export const useNavigation = create<NavigationProps>((set) => ({
    Screen: screens.welcome,
    push: (id) => set({ Screen: screens[id] }),
}));

