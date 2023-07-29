import { css, cx } from "@emotion/css";
import { Text } from ".";
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
    return <Text size={28} weight={600}>{props.children}</Text>;
}

interface HeaderButtonProps {
    onClick?: () => void;
    border?: boolean;
    className?: string;
    children?: React.ReactNode;
}

export function HeaderButton({
    onClick,
    border,
    className,
    children,
}: HeaderButtonProps) {
    return (
        <div
            className={cx(styles.btn, { [styles.border]: border }, className)}
            onClick={onClick}
        >
            {children}
        </div>
    );
}

interface HeaderBackProps {
    onClick?: () => void;
    border?: boolean;
}

export function HeaderBack({ onClick, border }: HeaderBackProps) {
    const { back } = useNavigation();

    return (
        <HeaderButton
            border={border}
            onClick={onClick || (() => back("slideToRight"))}
        >
            <LuChevronLeft />
        </HeaderButton>
    );
}

const styles = {
    header: css`
        display: flex;
        align-items: center;
        width: 100%;
        box-sizing: border-box;
        padding-left: 20px;
        padding-right: 20px;
        margin-top: 30px;
        margin-bottom: 20px;
        pointer-events: none;
        &>div {
            pointer-events: auto;
        }
    `,
    btn: css`
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 30px;
        margin-right: 5px;
        border-radius: 8px;
        width: 35px;
        height: 35px;
        color: #3e3e3e;
        :active {
            background-color: rgba(0, 0, 0, 0.1);
        }
    `,
    border: css`
        background-color: rgba(255, 255, 255, 0.9);
        backdrop-filter: blur(5px);
        border: 2px solid rgba(0, 0, 0, 0.1);
        :active {
            background-color: rgba(233, 233, 233, 0.9);
        }
    `,
};
