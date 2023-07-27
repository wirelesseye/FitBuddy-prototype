import { Screen, useNavigation } from "./stores/navigation";
import iPhone from "./assets/iPhone.svg";
import { css, cx, injectGlobal } from "@emotion/css";
import { useEffect, useRef, useState } from "react";

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
    const { screenId, animation } = useNavigation();

    const [currScreen, setCurrScreen] = useState<string>(screenId);
    const [nextScreen, setNextScreen] = useState<string | null>(null);

    const timer = useRef<number | null>(null);

    useEffect(() => {
        setNextScreen(screenId);
        if (timer.current) {
            clearTimeout(timer.current);
        }
        timer.current = setTimeout(() => {
            setCurrScreen(screenId);
            setNextScreen(null);
        }, 300);
    }, [screenId]);

    return (
        <div>
            <div className={styles.container}>
                <div
                    className={cx(
                        styles.main,
                        nextScreen
                            ? css`
                                  pointer-events: none;
                              `
                            : null
                    )}
                >
                    <Screen screenId={currScreen} />
                </div>
                {nextScreen ? (
                    <div className={styles.main}>
                        <div
                            className={cx(
                                styles.next,
                                css`
                                    animation: ${animation} 300ms;
                                `
                            )}
                        >
                            <Screen screenId={nextScreen} />
                        </div>
                    </div>
                ) : (
                    nextScreen
                )}
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
        background-color: #fff;
        left: 18px;
        right: 18px;
        top: 15px;
        bottom: 15px;
        border-radius: 45px;
        overflow: hidden;
    `,
    next: css`
        height: 100%;
        width: 100%;
        pointer-events: none;
        /* background-color: red; */
        @keyframes fadeIn {
            from {
                opacity: 0;
            }
            to {
                opacity: 1;
            }
        }

        @keyframes slideToLeft {
            0% {
                opacity: 0;
                transform: translateX(100%);
            }
            30% {
                opacity: 0;
                transform: translateX(70%);
            }
            100% {
                opacity: 1;
            }
        }

        @keyframes slideToRight {
            0% {
                opacity: 0;
                transform: translateX(-100%);
            }
            30% {
                opacity: 0;
                transform: translateX(-70%);
            }
            100% {
                opacity: 1;
            }
        }
    `,
};
