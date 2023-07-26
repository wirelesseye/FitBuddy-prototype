import { css } from "@emotion/css";

interface FooterProps {
    children?: React.ReactNode;
}

export function Footer(props: FooterProps) {
    return (
        <div className={styles.footer}>
            {props.children}
        </div>
    )
}

const styles = {
    footer: css`
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        padding-bottom: 34px;
        margin: 0 20px 10px 20px;
    `
}