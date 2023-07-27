import { Canvas, useLoader } from "@react-three/fiber";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader.js";
import { OrbitControls } from "@react-three/drei";
import { css, cx } from "@emotion/css";

interface PetPreviewProps {
    className?: string;
}

export function PetPreview({ className }: PetPreviewProps) {
    const fbx = useLoader(FBXLoader, "/model/shiba.fbx");

    return (
        <div className={cx(styles.canvas, className)}>
            <Canvas camera={{ position: [0, 30, 150] }}>
                <ambientLight intensity={3} />
                <pointLight position={[100, 100, 100]} />
                <primitive object={fbx} />
                <OrbitControls />
            </Canvas>
        </div>
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
