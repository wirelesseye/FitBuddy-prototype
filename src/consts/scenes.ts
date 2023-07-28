export interface SceneData {
    file: string;
    scale: [number, number, number];
    offset: [number, number, number];
    rotation: [number, number, number];
    lightIntensity: number;
    sky: boolean;
}

const scenes: Record<string, SceneData> = {
    room: {
        file: "/model/set.fbx",
        scale: [2, 2, 2],
        offset: [0, -110, -100],
        rotation: [0, 5, 0],
        lightIntensity: 3,
        sky: false,
    },
    nature: {
        file: "/model/lowpoly_nature.fbx",
        scale: [3, 3, 3],
        offset: [-600, -120, 0],
        rotation: [0, 5, 0],
        lightIntensity: 2,
        sky: true,
    },
};

export type SceneID = keyof typeof scenes;

export { scenes };
