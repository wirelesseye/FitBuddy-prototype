import { css, cx } from "@emotion/css";
import { Button } from ".";
import { SkinID, getSkinThumbnail } from "../consts/skins";
import { LuCheck } from "react-icons/lu";
import colors from "../consts/colors";

interface SkinButtonProps {
    skinID: SkinID;
    select?: boolean;
    onSelect?: (id: SkinID) => void;
}

export function SkinButton({ skinID, select, onSelect }: SkinButtonProps) {
    return (
        <Button
            className={cx(
                css`
                    background-image: url(${getSkinThumbnail(skinID)});
                `,
                styles.btn
            )}
            onClick={onSelect ? () => onSelect(skinID) : undefined}
        >
            <div
                className={cx(styles.check, {
                    [styles.hidden]: !select,
                })}
            >
                <LuCheck />
            </div>
        </Button>
    );
}

const styles = {
    btn: css`
        position: relative;
        width: 80px;
        height: 80px;
        padding: 0;
        background-size: cover;
    `,
    check: css`
        position: absolute;
        right: -5px;
        bottom: -5px;
        background-color: ${colors.primary};
        color: #fff;
        font-size: 20px;
        height: 20px;
        width: 20px;
        border-radius: 100%;
        border: 2px solid ${colors.primaryBorder};
        box-shadow: 0 3px ${colors.primaryShadow};
    `,
    hidden: css`
        display: none;
    `,
};
