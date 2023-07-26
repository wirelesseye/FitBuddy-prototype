import { css, cx } from "@emotion/css";

interface ScreenBoxProps {
    children?: React.ReactNode;
    className?: string;
}

export function ScreenBox(props: ScreenBoxProps) {
    return (
        <div className={cx(styles.screen, props.className)}>
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