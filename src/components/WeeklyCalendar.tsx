import { css, cx } from "@emotion/css";
import { Button, FlexBox } from ".";
import colors from "../consts/colors";
import { LuLayoutGrid } from "react-icons/lu";
import { BsFillPatchCheckFill } from "react-icons/bs";

interface WeeklyCalendarProps {
    showStreaks?: boolean;
}

export function WeeklyCalendar({ showStreaks }: WeeklyCalendarProps) {
    return (
        <FlexBox direction="column" gap={10}>
            <FlexBox>
                <Button className={styles.showMonth} varient="ghost">
                    <LuLayoutGrid className={styles.icon} /> Show Month
                </Button>
            </FlexBox>
            <FlexBox justifyContent="space-between">
                <Day showStreak={showStreaks}>23</Day>
                <Day showStreak={showStreaks}>24</Day>
                <Day>25</Day>
                <Day showStreak={showStreaks}>26</Day>
                <Day select>27</Day>
                <Day>28</Day>
                <Day>29</Day>
            </FlexBox>
        </FlexBox>
    );
}

interface DayProps {
    children: React.ReactNode;
    select?: boolean;
    showStreak?: boolean;
}

function Day({ children, select, showStreak }: DayProps) {
    return (
        <div className={cx(styles.day, { [styles.select]: select })}>
            {children}
            {showStreak ? <div className={styles.streak}><BsFillPatchCheckFill size={14} /></div> : null}
        </div>
    );
}

const styles = {
    day: css`
        display: flex;
        position: relative;
        align-items: center;
        justify-content: center;
        padding: 8px;
        border-radius: 8px;
        width: 20px;
        height: 20px;
        font-size: 22px;

        :active {
            background-color: ${colors.primary};
            color: #fff;
            box-shadow: none;
            transform: translateY(2px);
        }
    `,
    select: css`
        background-color: ${colors.primary};
        color: #fff;
        box-shadow: 0 3px ${colors.primaryShadow};
        font-weight: 500;
    `,
    showMonth: css`
        font-size: 15px;
        padding: 5px 8px;
    `,
    icon: css`
        margin-right: 10px;
    `,
    streak: css`
        position: absolute;
        right: 0;
        top: -10px;
        color: #ff6a00;
    `
};
