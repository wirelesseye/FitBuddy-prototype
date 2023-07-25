import { create } from "zustand";
import WelcomeScreen from "../screens/WelcomeScreen";
import HomeScreen from "../screens/HomeScreen";

const screens = {
    welcome: WelcomeScreen,
    home: HomeScreen,
};

type ScreenID = keyof typeof screens;

interface NavigationProps {
    Screen: () => JSX.Element;
    push: (id: ScreenID) => void;
    history: ScreenID[];
    back: () => void;
}

export const useNavigation = create<NavigationProps>((set) => ({
    Screen: screens.welcome,
    push: (id) =>
        set((state) => ({
            Screen: screens[id],
            history: [...state.history, id],
        })),
    history: ["welcome"],
    back: () => set((state) => {
        if (state.history.length >= 2) {
            const next = [...state.history];
            next.pop();
            return {
                Screen: screens[next[next.length - 1]],
                history: next
            }
        } else {
            return {}
        }
    })
}));
