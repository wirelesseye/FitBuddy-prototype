import { css, cx } from "@emotion/css";
import { Button } from ".";
import { useState } from "react";
import { BsCheckLg } from "react-icons/bs";
import { ActivityID, activities, activityIcons } from "../consts/activities";
import colors from "../consts/colors";

interface ActivityButtonProps {
    activity: ActivityID;
}

export function ActivityButton({ activity }: ActivityButtonProps) {
    const [isSelect, setIsSelect] = useState(false);

    const name = activities[activity];
    const Icon = activityIcons[activity];

    return (
        <Button
            className={styles.activityBtn}
            onClick={() => setIsSelect((select) => !select)}
        >
            <div className={styles.icon}>
                <Icon />
            </div>
            {name}
            <div
                className={cx(styles.checkBox, {
                    [styles.select]: isSelect,
                })}
            >
                <BsCheckLg />
            </div>
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
        color: #FFF;
    `,
};
