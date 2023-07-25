import { css, cx } from "@emotion/css";

interface SafeAreaProps {
    children?: React.ReactNode;
    avoidHeader?: boolean;
    avoidFooter?: boolean;
}

export function SafeArea({
    children,
    avoidHeader = true,
    avoidFooter = true,
}: SafeAreaProps) {
    return (
        <div
            className={cx(
                styles.safeArea,
                avoidHeader
                    ? css`
                          margin-top: 47px;
                      `
                    : null,
                avoidFooter
                    ? css`
                          margin-bottom: 34px;
                      `
                    : null
            )}
        >
            {children}
        </div>
    );
}

const styles = {
    safeArea: css`
        display: flex;
        flex-grow: 1;
        flex-direction: column;
        overflow: auto;
    `,
};
