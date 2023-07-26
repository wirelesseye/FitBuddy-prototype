import { create } from "zustand";
import WelcomeScreen from "../screens/WelcomeScreen";
import HomeScreen from "../screens/HomeScreen";
import PetsScreen from "../screens/PetsScreen";
import ScheduleScreen from "../screens/ScheduleScreen";
import DietScreen from "../screens/DietScreen";
import UserScreen from "../screens/UserScreen";

const screens = {
    welcome: WelcomeScreen,
    home: HomeScreen,
    pets: PetsScreen,
    schedule: ScheduleScreen,
    diet: DietScreen,
    user: UserScreen,
};

export type ScreenID = keyof typeof screens;

interface NavigationProps {
    Screen: () => JSX.Element;
    screenId: ScreenID;
    push: (id: ScreenID) => void;
    history: ScreenID[];
    back: () => void;
}

export const useNavigation = create<NavigationProps>((set) => ({
    Screen: screens.welcome,
    screenId: "welcome",
    push: (id) =>
        set((state) => ({
            Screen: screens[id],
            screenId: id,
            history: [...state.history, id],
        })),
    history: ["welcome"],
    back: () =>
        set((state) => {
            if (state.history.length >= 2) {
                const next = [...state.history];
                next.pop();
                const screenId = next[next.length - 1];
                return {
                    screenId,
                    Screen: screens[screenId],
                    history: next,
                };
            } else {
                return {};
            }
        }),
}));
