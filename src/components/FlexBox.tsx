import { css, cx } from "@emotion/css";

interface FlexBoxProps {
    className?: string;
    children?: React.ReactNode;
    direction?: "row" | "column";
    alignItems?: "flex-start" | "center" | "flex-end";
    justifyContent?: "flex-start" | "center" | "flex-end" | "space-between";
    gap?: number;
    grow?: number;
    marginX?: number;
    marginY?: number;
}

export function FlexBox(props: FlexBoxProps) {
    return (
        <div
            className={cx(
                css`
                    display: flex;
                `,
                props.direction
                    ? css`
                          flex-direction: ${props.direction};
                      `
                    : null,
                props.alignItems
                    ? css`
                          align-items: ${props.alignItems};
                      `
                    : null,
                props.justifyContent
                    ? css`
                          justify-content: ${props.justifyContent};
                      `
                    : null,
                props.grow
                    ? css`
                          flex-grow: ${props.grow};
                      `
                    : null,
                props.gap
                    ? css`
                          gap: ${props.gap}px;
                      `
                    : null,
                props.marginX
                    ? css`
                          margin-left: ${props.marginX}px;
                          margin-right: ${props.marginX}px;
                      `
                    : null,
                props.marginY
                    ? css`
                          margin-top: ${props.marginX}px;
                          margin-bottom: ${props.marginX}px;
                      `
                    : null,
                props.className
            )}
        >
            {props.children}
        </div>
    );
}
