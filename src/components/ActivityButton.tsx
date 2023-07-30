import { css, cx } from "@emotion/css";
import { Button } from ".";
import { useState } from "react";
import { BsCheckLg } from "react-icons/bs";
import { ActivityID, activities, activityIcons } from "../consts/activities";
import colors from "../consts/colors";

interface ActivityButtonProps {
    activity: ActivityID;
    selectable?: boolean;
    onClick?: () => void;
}

export function ActivityButton({
    activity,
    onClick,
    selectable = true,
}: ActivityButtonProps) {
    const [isSelect, setIsSelect] = useState(false);

    const name = activities[activity];
    const Icon = activityIcons[activity];

    return (
        <Button
            className={styles.activityBtn}
            onClick={() => {
                setIsSelect((select) => !select);
                if (onClick) onClick();
            }}
        >
            <div className={styles.icon}>
                <Icon />
            </div>
            {name}
            {selectable ? (
                <div
                    className={cx(styles.checkBox, {
                        [styles.select]: isSelect,
                    })}
                >
                    <BsCheckLg />
                </div>
            ) : null}
        </Button>
    );
}

const styles = {
    activityBtn: css`
        justify-content: flex-start;
    `,
    checkBox: css`
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: auto;
        border: 2px solid #d4d4d4;
        height: 20px;
        width: 20px;
        border-radius: 8px;
        font-size: 20px;
        color: transparent;
    `,
    icon: css`
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 20px;
        margin-right: 15px;
    `,
    select: css`
        background-color: ${colors.primary};
        border-color: ${colors.primaryBorder};
        color: #fff;
    `,
};
