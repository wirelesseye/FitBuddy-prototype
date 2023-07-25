import { css, cx } from "@emotion/css";

interface ButtonProps {
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
        border: 2px solid #000;
        padding: 8px 15px;
        border-radius: 8px;
        font-weight: 500;
        font-size: 18px;
    `,
    primary: css`
        background-color: #000;
        color: #fff;
    `,
    large: css``,
};
