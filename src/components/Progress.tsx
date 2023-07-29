import { css, cx } from "@emotion/css";
import colors from "../consts/colors";

interface ProgressProps {
    progress: number;
}

export function Progress({ progress }: ProgressProps) {
    return <div className={styles.track}>
        <div className={cx(styles.indicator, css`
            width: ${progress * 100}%;
        `)}><div className={styles.hightlight}></div></div>
    </div>;
}

const styles = {
    track: css`
        position: relative;
        height: 15px;
        border-radius: 5px;
        outline: 2px solid ${colors.border};
    `,
    indicator: css`
        position: absolute;
        top: 0;
        height: 100%;
        background-color: ${colors.primary};
        outline: 2px solid ${colors.primaryBorder};
        border-radius: 5px;
        box-shadow: 0 4px ${colors.primaryShadow};
    `,
    hightlight: css`
        position: absolute;
        left: 5px;
        right: 5px;
        top: 2px;
        height: 5px;
        border-radius: 2px;
        background-color: rgba(255, 255, 255, 0.2);
    `
};
