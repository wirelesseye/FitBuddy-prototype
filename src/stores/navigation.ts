import { create } from "zustand";
import { ScreenID, screens } from "../consts/screens";

interface NavigationState {
    screenId: ScreenID;
    animation: TransitionAnimation;
    history: ScreenID[];
    push: (id: ScreenID, animation?: TransitionAnimation) => void;
    back: (animation?: TransitionAnimation) => void;
}

type TransitionAnimation = "none" | "fadeIn" | "slideToLeft" | "slideToRight";

export const useNavigation = create<NavigationState>((set) => ({
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
