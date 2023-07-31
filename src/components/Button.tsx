import { css, cx } from "@emotion/css";
import colors from "../consts/colors";
import React from "react";

export interface ButtonProps {
    onClick?: () => void;
    children?: React.ReactNode;
    className?: string;
    disabled?: boolean;
    varient?: "primary" | "ghost";
    paddingX?: number;
    paddingY?: number;
}

export const Button = React.forwardRef<HTMLDivElement, ButtonProps>(
    (props, ref) => {
        return (
            <div
                className={cx(
                    styles.button,
                    props.varient ? styles[props.varient] : null,
                    css`
                        padding: ${props.paddingY ?? 8}px
                            ${props.paddingX ?? 15}px;
                    `,
                    {[styles.disabled]: props.disabled},
                    props.className
                )}
                onClick={props.disabled ? undefined : props.onClick}
                ref={ref}
            >
                {props.children}
            </div>
        );
    }
);

const styles = {
    button: css`
        display: flex;
        align-items: center;
        justify-content: center;
        border: 2px solid ${colors.border};
        color: #3e3e3e;
        background-color: #fff;
        box-shadow: 0 3px rgba(0, 0, 0, 0.1);
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
        box-shadow: 0 3px ${colors.primaryShadow};
        :active {
            background-color: ${colors.primary};
        }
    `,
    ghost: css`
        border: none;
        box-shadow: none;
    `,
    disabled: css`
        opacity: 0.5;
        :active {
            background-color: unset;
            transform: none;
        }
    `
};
