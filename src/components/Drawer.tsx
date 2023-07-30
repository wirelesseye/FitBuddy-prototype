import { css, cx } from "@emotion/css";
import { HeaderButton, Text } from ".";
import { LuX } from "react-icons/lu";
import { useEffect, useState } from "react";

export interface DrawerProps {
    isOpen?: boolean;
    setIsOpen?: (isShow: boolean) => void;
    children?: React.ReactNode;
    title?: string;
}

export function Drawer({ isOpen, setIsOpen, title, children }: DrawerProps) {
    const [isShow, setIsShow] = useState(false);
    const [isExpand, setIsExpand] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setIsShow(true);
            setTimeout(() => {
                setIsExpand(true);
            }, 30);
        } else {
            setIsExpand(false);
            setTimeout(() => {
                setIsShow(false);
            }, 300);
        }
    }, [isOpen]);

    return (
        <div>
            <div
                className={cx(
                    styles.overlay,
                    css`
                        display: ${isShow ? "block" : "none"};
                        opacity: ${isExpand ? 1 : 0};
                    `
                )}
            ></div>
            <div
                className={cx(
                    styles.drawer,
                    css`
                        display: ${isShow ? "block" : "none"};
                        transform: ${isExpand
                            ? "translateY(0)"
                            : "translateY(100%)"};
                    `
                )}
            >
                <div className={styles.header}>
                    <HeaderButton
                        className={styles.close}
                        onClick={setIsOpen ? () => setIsOpen(false) : undefined}
                    >
                        <LuX size={20} />
                    </HeaderButton>
                    {title ? (
                        <Text size={20} weight={500}>
                            {title}
                        </Text>
                    ) : null}
                </div>
                {children}
            </div>
        </div>
    );
}

const styles = {
    drawer: css`
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        min-height: 200px;
        max-height: 630px;
        overflow: auto;
        background-color: #fff;
        border-top-left-radius: 30px;
        border-top-right-radius: 30px;
        transition: transform 300ms;
    `,
    header: css`
        display: flex;
        align-items: center;
        margin-top: 15px;
        margin-left: 20px;
        margin-right: 20px;
    `,
    close: css`
        margin-right: 10px;
    `,
    overlay: css`
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgba(0, 0, 0, 0.3);
        transition: opacity 300ms;
    `,
};
