import { css, cx } from "@emotion/css";
import colors from "../consts/colors";
import * as SliderPrimitive from "@radix-ui/react-slider";

export function Slider(props: SliderPrimitive.SliderProps) {
    const { className, ...other } = props;

    return (
        <SliderPrimitive.Root className={cx(styles.root, className)} {...other}>
            <SliderPrimitive.Track className={styles.track}>
                <SliderPrimitive.Range className={styles.range} />
            </SliderPrimitive.Track>
            <SliderPrimitive.Thumb className={styles.thumb} />
        </SliderPrimitive.Root>
    );
}

const styles = {
    root: css`
        position: relative;
        display: flex;
        align-items: center;
        width: 100%;
        height: 15px;
    `,
    track: css`
        position: relative;
        background-color: #fff;
        flex-grow: 1;
        height: 100%;
        border-radius: 5px;
        outline: 2px solid ${colors.border};
    `,
    range: css`
        position: absolute;
        height: 100%;
        background-color: ${colors.primary};
        outline: 2px solid ${colors.primaryBorder};
        border-radius: 5px;
        box-shadow: 0 4px ${colors.primaryShadow};
        ::after {
            content: "";
            position: absolute;
        left: 5px;
        right: 5px;
        top: 2px;
        height: 5px;
        border-radius: 2px;
        background-color: rgba(255, 255, 255, 0.2);
        }
    `,
    thumb: css`
        display: block;
        width: 12px;
        height: 22px;
        background-color: #fff;
        border: 2px solid ${colors.border};
        border-radius: 5px;
        box-shadow: 0 3px rgba(0, 0, 0, 0.1);
        outline: none;
        :active {
            background-color: #e5e5e5;
            box-shadow: none;
        }
    `,
};
