import { css, cx } from "@emotion/css";
import { FlexBox, FlexBoxProps } from ".";
import colors from "../consts/colors";

export function Card(props: FlexBoxProps) {
    const { className, ...other } = props;
    return <FlexBox className={cx(styles.card, className)} {...other} />;
}

const styles = {
    card: css`
        border: 2px solid ${colors.border};
        border-radius: 8px;
        padding: 15px;
    `,
};
