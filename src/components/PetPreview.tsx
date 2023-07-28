import { Canvas, useLoader } from "@react-three/fiber";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader.js";
import { OrbitControls, Sky } from "@react-three/drei";
import { css, cx } from "@emotion/css";
import { SceneData, getScene } from "../consts/scenes";
import { useSettings } from "../stores/settings";
import { Suspense, useMemo } from "react";
import { SkinData, SkinID, getSkin } from "../consts/skins";

interface PetPreviewProps {
    className?: string;
    distance?: number;
    skinID: SkinID;
}

export function PetPreview({
    className,
    skinID,
    distance = 200,
}: PetPreviewProps) {
    const sceneID = useSettings((state) => state.sceneID);
    const skin = getSkin(skinID);
    const scene = getScene(sceneID);

    return (
        <div className={cx(styles.canvas, className)}>
            <Canvas camera={{ position: [0, 30, distance], far: 5000 }}>
                <ambientLight intensity={scene.lightIntensity} />
                <directionalLight />
                <Suspense fallback={null}>
                    <Pet skin={skin} />
                </Suspense>
                <Suspense fallback={null}>
                    <Scene scene={scene} />
                </Suspense>
                <OrbitControls />
                {scene.sky ? <Sky /> : null}
            </Canvas>
        </div>
    );
}

function Pet({ skin }: { skin: SkinData }) {
    const petObj = useLoader(FBXLoader, skin.file);
    const copiedPetObj = useMemo(() => petObj.clone(), [petObj]);

    return (
        <primitive
            object={copiedPetObj}
            scale={skin.scale}
            position={skin.offset}
        />
    );
}

function Scene({ scene }: { scene: SceneData }) {
    const sceneObj = useLoader(FBXLoader, scene.file);
    const copiedSceneObj = useMemo(() => sceneObj.clone(), [sceneObj]);

    return (
        <primitive
            object={copiedSceneObj}
            scale={scene.scale}
            position={scene.offset}
            rotation={scene.rotation}
        />
    );
}

const styles = {
    canvas: css`
        background: linear-gradient(
            180deg,
            rgba(255, 255, 255, 1) 0%,
            rgba(221, 221, 221, 1) 100%
        );
    `,
};
