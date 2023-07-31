import { css, cx } from "@emotion/css";
import { Button, ButtonProps } from ".";
import { useState } from "react";
import colors from "../consts/colors";

export function DayButton(props: ButtonProps) {
    const { children, className, ...other } = props;
    const [isSelect, setIsSelect] = useState(false);

    return (
        <Button
            className={cx(styles.btn, { [styles.select]: isSelect }, className)}
            {...other}
            onClick={() => setIsSelect((s) => !s)}
        >
            {children}
        </Button>
    );
}

const styles = {
    btn: css`
        box-shadow: none;
        padding: 0;
        width: 30px;
        height: 30px;
    `,
    select: css`
        background-color: ${colors.primary};
        color: #fff;
        border-color: ${colors.primaryBorder};
        box-shadow: 0 3px ${colors.primaryShadow};
        :active {
            background-color: ${colors.primary};
        }
    `,
};
