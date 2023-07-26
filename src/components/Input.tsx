import { css, cx } from "@emotion/css";

interface InputProps extends React.HTMLProps<HTMLInputElement> {}

export function Input(props: InputProps) {
    const { className, ...other } = props;

    return <input className={cx(styles.input, className)} {...other} />;
}

const styles = {
    input: css`
        all: unset;
        border: 2px solid #ededed;
        padding: 8px 10px;
        border-radius: 8px;
        font-weight: 500;
        font-size: 18px;
        box-shadow: inset 0 1px rgba(0, 0, 0, 0.1);
    `,
};
