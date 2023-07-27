import { create } from "zustand";
import WelcomeScreen from "../screens/WelcomeScreen";
import HomeScreen from "../screens/HomeScreen";
import PetsScreen from "../screens/PetsScreen";
import ScheduleScreen from "../screens/ScheduleScreen";
import DietScreen from "../screens/DietScreen";
import UserScreen from "../screens/UserScreen";
import SignUpScreen from "../screens/SignUpScreen";
import SelectActivitiesScreen from "../screens/SelectActivitiesScreen";
import React from "react";

const screens: Record<string, () => JSX.Element> = {
    welcome: WelcomeScreen,
    home: HomeScreen,
    pets: PetsScreen,
    schedule: ScheduleScreen,
    diet: DietScreen,
    user: UserScreen,
    signup: SignUpScreen,
    selectActivites: SelectActivitiesScreen,
};

export type ScreenID = keyof typeof screens;

interface NavigationProps {
    screenId: ScreenID;
    animation: TransitionAnimation;
    history: ScreenID[];
    push: (id: ScreenID, animation?: TransitionAnimation) => void;
    back: (animation?: TransitionAnimation) => void;
}

type TransitionAnimation = "none" | "fadeIn" | "slideToLeft" | "slideToRight";

export const useNavigation = create<NavigationProps>((set) => ({
    Screen: screens.welcome,
    screenId: "welcome",
    animation: "none",
    history: ["welcome"],
    push: (id, animation) =>
        set((state) => ({
            screenId: id,
            history: [...state.history, id],
            animation: animation || "none",
        })),
    back: (animation) =>
        set((state) => {
            if (state.history.length >= 2) {
                const next = [...state.history];
                next.pop();
                const screenId = next[next.length - 1];
                return {
                    screenId,
                    history: next,
                    animation: animation || "none",
                };
            } else {
                return {};
            }
        }),
}));

interface ScreenProps {
    screenId: ScreenID;
}

export function Screen({ screenId }: ScreenProps) {
    return React.createElement(screens[screenId]);
}
