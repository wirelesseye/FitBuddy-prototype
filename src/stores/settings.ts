import { create } from "zustand";
import { SceneID, getSceneIDs } from "../consts/scenes";

interface SettingsState {
    sceneID: SceneID;
    nextScene: () => void;
}

export const useSettings = create<SettingsState>((set) => ({
    sceneID: "room",
    nextScene: () =>
        set((state) => {
            const sceneIDs = getSceneIDs();
            const currIndex = sceneIDs.indexOf(state.sceneID);
            const nextIndex =
                currIndex + 1 >= sceneIDs.length ? 0 : currIndex + 1;
            const nextSceneID = sceneIDs[nextIndex];
            return { sceneID: nextSceneID };
        }),
}));
