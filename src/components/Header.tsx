import { css } from "@emotion/css";

interface HeaderProps {
    children?: React.ReactNode;
}

export function Header(props: HeaderProps) {
    return (
        <div className={styles.header}>
            {props.children}
        </div>
    );
}

interface HeaderTitleProps {
    children?: React.ReactNode;
}

export function HeaderTitle(props: HeaderTitleProps) {
    return <div className={styles.title}>{props.children}</div>;
}

const styles = {
    header: css`
        margin-left: 20px;
        margin-right: 20px;
        margin-top: 30px;
        margin-bottom: 20px;
    `,
    title: css`
        font-size: 28px;
        font-weight: 600;
    `,
};
