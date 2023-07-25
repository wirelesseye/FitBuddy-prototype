import { css } from "@emotion/css";

interface ScreenProps {
    children?: React.ReactNode;
}

export function Screen(props: ScreenProps) {
    return (
        <div className={styles.screen}>
            {props.children}
        </div>
    )
}

const styles = {
    screen: css`
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 100%;
        overflow: scroll;
    `
}