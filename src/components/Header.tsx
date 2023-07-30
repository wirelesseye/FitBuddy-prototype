import { css, cx } from "@emotion/css";
import { Text } from ".";
import { LuChevronLeft } from "react-icons/lu";
import { useNavigation } from "../stores/navigation";
import React from "react";

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
    return (
        <Text size={28} weight={600}>
            {props.children}
        </Text>
    );
}

interface HeaderButtonProps {
    onClick?: () => void;
    border?: boolean;
    className?: string;
    children?: React.ReactNode;
}

export const HeaderButton = React.forwardRef<HTMLDivElement, HeaderButtonProps>(
    ({ onClick, border, className, children }, ref) => {
        return (
            <div
                ref={ref}
                className={cx(
                    styles.btn,
                    { [styles.border]: border },
                    className
                )}
                onClick={onClick}
            >
                {children}
            </div>
        );
    }
);

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
            <LuChevronLeft size={24} />
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
        & > div {
            pointer-events: auto;
        }
    `,
    btn: css`
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 30px;
        border-radius: 8px;
        width: 35px;
        height: 35px;
        color: #222222;
        :active {
            background-color: rgba(0, 0, 0, 0.1);
        }
    `,
    border: css`
        background-color: rgba(255, 255, 255, 0.9);
        backdrop-filter: blur(5px);
        box-shadow: 0 3px rgba(0, 0, 0, 0.1);
        :active {
            background-color: rgba(233, 233, 233, 0.9);
            transform: translateY(2px);
            box-shadow: none;
        }
    `,
};
