import shiba from "../assets/shiba.png";
import dinosaur from "../assets/dinosaur.png";

export interface SkinData {
    file: string;
    scale: [number, number, number];
    offset: [number, number, number];
}

const skins = {
    shiba: {
        file: "/model/shiba.fbx",
        scale: [1, 1, 1],
        offset: [0, 0, 0],
    },
    dinosaur: {
        file: "/model/dinosaur.fbx",
        scale: [0.5, 0.5, 0.5],
        offset: [0, -20, 0],
    },
};

export type SkinID = keyof typeof skins;

const skinThumbnails: Record<SkinID, string> = {
    shiba: shiba,
    dinosaur: dinosaur,
};

export function getSkin(skinID: SkinID) {
    return skins[skinID] as SkinData;
}

export function getSkinThumbnail(skinID: SkinID) {
    return skinThumbnails[skinID];
}

export function getSkinIDs() {
    return Object.keys(skins) as SkinID[];
}
