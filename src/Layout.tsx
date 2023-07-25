import { useNavigation } from "./stores/navigation";
import Iphone from "./assets/iphone.svg";
import { css, injectGlobal } from "@emotion/css";

injectGlobal`
    ::-webkit-scrollbar {
        display: none;
    }
    body {
        user-select: none;
    }
`

export default function Layout() {
    const { Screen } = useNavigation();

    return (
        <div>
            <div className={styles.container}>
                <div className={styles.main}>
                    <Screen />
                </div>
                <img className={styles.shell} src={Iphone} />
            </div>
        </div>
    );
}

const styles = {
    container: css`
        position: relative;
        margin: auto;
        width: 360px;
        height: 730px;
    `,
    shell: css`
        position: absolute;
        pointer-events: none;
    `,
    main: css`
        position: absolute;
        left: 18px;
        right: 18px;
        top: 15px;
        bottom: 15px;
        border-radius: 45px;
        overflow: hidden;
    `,
};
