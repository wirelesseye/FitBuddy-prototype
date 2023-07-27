import { css, cx } from "@emotion/css";
import colors from "../consts/colors";

export interface ButtonProps {
    onClick?: () => void;
    children?: React.ReactNode;
    className?: string;
    varient?: "primary";
    size?: "large";
}

export function Button(props: ButtonProps) {
    return (
        <div
            className={cx(
                styles.button,
                props.className,
                props.varient ? styles[props.varient] : null,
                props.size ? styles[props.size] : null
            )}
            onClick={props.onClick}
        >
            {props.children}
        </div>
    );
}

const styles = {
    button: css`
        display: flex;
        align-items: center;
        justify-content: center;
        border: 2px solid #c9c9c9;
        color: #3e3e3e;
        background-color: #FFF;
        box-shadow: 0 3px rgba(0, 0, 0, 0.1);
        padding: 8px 15px;
        border-radius: 8px;
        font-weight: 500;
        font-size: 18px;
        :active {
            transform: translateY(3px);
            background-color: #e5e5e5;
            box-shadow: none;
        }
    `,
    primary: css`
        background-color: ${colors.primary};
        border-color: ${colors.primaryBorder};
        color: #fff;
        box-shadow: 0 3px rgba(2, 134, 0, 0.2);
        :active {
            background-color: ${colors.primary};
        }
    `,
    large: css``,
};
