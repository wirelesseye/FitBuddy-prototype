import { css, cx } from "@emotion/css";
import { LuChevronLeft } from "react-icons/lu";
import { useNavigation } from "../stores/navigation";

interface HeaderProps {
    children?: React.ReactNode;
    className?: string;
}

export function Header(props: HeaderProps) {
    return (
        <div className={cx(styles.header, props.className)}>
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

interface HeaderBackProps {
    onClick?: () => void;
    border?: boolean;
}

export function HeaderBack({ onClick, border }: HeaderBackProps) {
    const { back } = useNavigation();

    return (
        <div
            className={cx(styles.back, { [styles.border]: border })}
            onClick={onClick || (() => back("slideToRight"))}
        >
            <LuChevronLeft />
        </div>
    );
}

const styles = {
    header: css`
        display: flex;
        align-items: center;
        margin-left: 20px;
        margin-right: 20px;
        margin-top: 30px;
        margin-bottom: 20px;
    `,
    title: css`
        font-size: 28px;
        font-weight: 600;
    `,
    back: css`
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 30px;
        margin-right: 5px;
        border-radius: 8px;
        padding: 2px;
        :active {
            background: rgba(0, 0, 0, 0.1);
        }
    `,
    border: css`
        background-color: #fff;
        border: 1px solid #e4e4e4;
    `,
};
