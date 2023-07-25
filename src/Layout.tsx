import { useNavigation } from "./stores/navigation";
import Iphone from "./assets/iphone.svg";
import { css } from "@emotion/css";

export default function Layout() {
    const { Screen } = useNavigation();

    return (
        <div>
            <div
                className={css`
                    width: 360px;
                    height: 730px;
                `}
            >
                <img
                    className={css`
                        position: absolute;
                        pointer-events: none;
                    `}
                    src={Iphone}
                />
                <div
                    className={css`
                        box-sizing: border-box;
                        width: 100%;
                        height: 100%;
                        padding: 65px 20px 20px 20px;
                    `}
                >
                    <Screen />
                </div>
            </div>
        </div>
    );
}
