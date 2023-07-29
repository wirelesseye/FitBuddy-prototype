import { css, cx } from "@emotion/css";

interface TextProps {
    children?: React.ReactNode;
    className?: string;
    size?: number;
    weight?: number;
    color?: string;
}

export function Text(props: TextProps) {
    return (
        <div
            className={cx(
                props.size
                    ? css`
                          font-size: ${props.size}px;
                      `
                    : null,
                props.weight
                    ? css`
                          font-weight: ${props.weight};
                      `
                    : null,
                props.color
                    ? css`
                          color: ${props.color};
                      `
                    : null,
                props.className
            )}
        >
            {props.children}
        </div>
    );
}
