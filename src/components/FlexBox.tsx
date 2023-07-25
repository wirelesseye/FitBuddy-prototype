import { css, cx } from "@emotion/css";

interface FlexBoxProps {
    className?: string;
    children?: React.ReactNode;
    direction?: "row" | "column";
    alignItems?: "flex-start" | "center" | "flex-end";
    justifyContent?: "flex-start" | "center" | "flex-end" | "space-between";
}

export function FlexBox(props: FlexBoxProps) {
    return (
        <div
            className={cx(
                css`
                    display: flex;
                    ${props.direction
                        ? `flex-direction: ${props.direction};`
                        : null}
                    ${props.alignItems
                        ? `align-items: ${props.alignItems};`
                        : null}
                    ${props.justifyContent
                        ? `justify-content: ${props.justifyContent};`
                        : null}
                `,
                props.className
            )}
        >
            {props.children}
        </div>
    );
}
