import { css, cx } from "@emotion/css";
import {
    Button,
    FlexBox,
    Footer,
    SafeArea,
    ScreenBox,
    Text,
} from "../components";
import { useNavigation } from "../stores/navigation";
import { usePets } from "../stores/pets";
import { getSkinThumbnail } from "../consts/skins";
import { BsDropletFill, BsHeartFill } from "react-icons/bs";
import { LuInfo } from "react-icons/lu";

export default function WorkoutInProgressScreen() {
    const { push, back } = useNavigation();
    const pets = usePets();

    const thumbnail = getSkinThumbnail(pets[0].skin);

    return (
        <ScreenBox>
            <SafeArea>
                <FlexBox
                    grow={1}
                    alignItems="center"
                    justifyContent="center"
                    direction="column"
                    marginBottom={80}
                    gap={30}
                >
                    <div
                        className={cx(
                            styles.pet,
                            css`
                                background-image: url(${thumbnail});
                            `
                        )}
                    >
                        <BsDropletFill className={styles.drop} />
                    </div>
                    <FlexBox alignItems="center" gap={15}>
                        <FlexBox
                            direction="column"
                            alignItems="flex-end"
                            gap={18}
                        >
                            <Text>Time</Text>
                            <Text>Heart Rate</Text>
                        </FlexBox>
                        <FlexBox
                            direction="column"
                            alignItems="flex-start"
                            gap={10}
                        >
                            <Text weight={600} size={22}>
                                00:01:34
                            </Text>
                            <FlexBox alignItems="center" gap={10}>
                                <Text weight={600} size={22}>
                                    83 BPM
                                </Text>
                                <BsHeartFill className={styles.heart} />
                            </FlexBox>
                        </FlexBox>
                    </FlexBox>
                    <FlexBox direction="column">
                        <Button>
                            <LuInfo className={styles.icon} />
                            Help & Examples
                        </Button>
                    </FlexBox>
                </FlexBox>
            </SafeArea>
            <Footer>
                <FlexBox direction="column" gap={15}>
                    <Button onClick={() => back("fadeIn")}>Cancel</Button>
                    <Button
                        varient="primary"
                        onClick={() => push("workoutComplete", "fadeIn")}
                    >
                        Finish
                    </Button>
                </FlexBox>
            </Footer>
        </ScreenBox>
    );
}

const styles = {
    pet: css`
        position: relative;
        background-size: cover;
        width: 150px;
        height: 150px;
    `,
    drop: css`
        position: absolute;
        left: 70px;
        top: 60px;
        color: #6f9cdd;
        animation: drop 5s infinite;

        @keyframes drop {
            0% {
                transform: translateY(0);
                opacity: 1;
            }
            50% {
                transform: translateY(10px);
                opacity: 1;
            }
            90% {
                transform: translateY(10px);
                opacity: 0;
            }
            100% {
                transform: translateY(0);
                opacity: 0;
            }
        }
    `,
    heart: css`
        color: #ff0000;
        animation: pump 2s infinite;

        @keyframes pump {
            0% {
                transform: scale(1);
            }
            50% {
                transform: scale(1.3);
            }
            100% {
                transform: scale(1);
            }
        }
    `,
    icon: css`
        margin-right: 10px;
    `,
};
