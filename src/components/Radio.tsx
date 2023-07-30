import { css, cx } from "@emotion/css";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import colors from "../consts/colors";
import { LuCheck } from "react-icons/lu";

export function RadioGroup(props: RadioGroupPrimitive.RadioGroupProps) {
    const { className, ...other } = props;

    return (
        <RadioGroupPrimitive.RadioGroup
            className={cx(styles.group, className)}
            {...other}
        />
    );
}

export function RadioItem(props: RadioGroupPrimitive.RadioGroupItemProps) {
    const { className, ...other } = props;

    return (
        <RadioGroupPrimitive.Item
            className={cx(styles.item, className)}
            {...other}
        >
            <RadioGroupPrimitive.Indicator className={styles.indicator}>
                <LuCheck />
            </RadioGroupPrimitive.Indicator>
        </RadioGroupPrimitive.Item>
    );
}

const styles = {
    group: css`
        display: flex;
        gap: 10px;
        align-items: center;
    `,
    item: css`
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: white;
        width: 25px;
        height: 25px;
        border: 2px solid ${colors.border};
        border-radius: 100%;
        &[data-state="checked"] {
            background-color: ${colors.primary};
            border-color: ${colors.primaryBorder};
            box-shadow: 0 3px ${colors.primaryShadow};
        }
    `,
    indicator: css`
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
        font-size: 20px;
    `,
};
