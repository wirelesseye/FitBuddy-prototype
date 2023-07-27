import { useNavigation } from "./stores/navigation";
import iPhone from "./assets/iPhone.svg";
import { css, injectGlobal } from "@emotion/css";

injectGlobal`
    ::-webkit-scrollbar {
        display: none;
    }
     
    body {
        background-color: #6c6c6c;
    }

    * {
        user-select: none;
        font-family: 'Inter', sans-serif;
    }
`;

export default function Layout() {
    const { Screen } = useNavigation();

    return (
        <div>
            <div className={styles.container}>
                <div className={styles.main}>
                    <Screen />
                </div>
                <img className={styles.shell} src={iPhone} />
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
        background-color: #FFF;
        left: 18px;
        right: 18px;
        top: 15px;
        bottom: 15px;
        border-radius: 45px;
        overflow: hidden;
    `,
};
