import { css, cx } from "@emotion/css";
import * as SwitchPrimitive from "@radix-ui/react-switch";
import colors from "../consts/colors";

export function Switch(props: SwitchPrimitive.SwitchProps) {
    const { className, ...other } = props;

    return (
        <SwitchPrimitive.Root className={cx(styles.root, className)} {...other}>
            <SwitchPrimitive.SwitchThumb className={styles.thumb} />
        </SwitchPrimitive.Root>
    );
}

const styles = {
    root: css`
        position: relative;
        width: 42px;
        height: 25px;
        background: none;
        border: 2px solid ${colors.border};
        border-radius: 9999px;
        padding: 0;
        transition: 100ms;

        &[data-state="checked"] {
            border-color: ${colors.primary};
            background-color: ${colors.primary};
        }
    `,
    thumb: css`
        display: block;
        width: 18px;
        height: 18px;
        border-radius: 9999px;
        background-color: ${colors.border};
        box-shadow: 0 3px rgba(0, 0, 0, 0.1);
        transform: translateX(2px);
        transition: 100ms;

        &[data-state="checked"] {
            transform: translateX(19px);
            background-color: #FFF;
            box-shadow: 0 3px rgba(0, 0, 0, 0.1);
        }
    `,
};
