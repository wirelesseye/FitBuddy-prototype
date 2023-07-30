import { css, cx } from "@emotion/css";
import * as PopoverPrimitive from "@radix-ui/react-popover";

export const Popover = PopoverPrimitive.Root;

export const PopoverTrigger = PopoverPrimitive.Trigger;

export function PopoverContent(props: PopoverPrimitive.PopoverContentProps) {
    const { children, className, ...other } = props;

    return (
        <PopoverPrimitive.Portal>
            <PopoverPrimitive.Content
                className={cx(styles.content, className)}
                {...other}
            >
                {children}
            </PopoverPrimitive.Content>
        </PopoverPrimitive.Portal>
    );
}

const styles = {
    content: css`
        background-color: #FFF;
        padding: 10px;
        max-width: 250px;
        border-radius: 8px;
        box-shadow: 0 3px rgba(0, 0, 0, 0.1);
        animation-duration: 400ms;
        animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
        outline: none;

        &[data-state="open"][data-side="top"] {
            animation-name: slideDownAndFade;
        }

        &[data-state="open"][data-side="right"] {
            animation-name: slideLeftAndFade;
        }

        &[data-state="open"][data-side="bottom"] {
            animation-name: slideUpAndFade;
        }

        &[data-state="open"][data-side="left"] {
            animation-name: slideRightAndFade;
        }

        @keyframes slideUpAndFade {
            from {
                opacity: 0;
                transform: translateY(2px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        @keyframes slideRightAndFade {
            from {
                opacity: 0;
                transform: translateX(-2px);
            }
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }

        @keyframes slideDownAndFade {
            from {
                opacity: 0;
                transform: translateY(-2px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        @keyframes slideLeftAndFade {
            from {
                opacity: 0;
                transform: translateX(2px);
            }
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }
    `,
};
