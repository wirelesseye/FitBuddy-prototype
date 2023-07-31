import { css, cx } from "@emotion/css";
import {
    Button,
    FlexBox,
    Footer,
    Progress,
    SafeArea,
    ScreenBox,
    Text,
} from "../components";
import { usePets } from "../stores/pets";
import { getSkinThumbnail } from "../consts/skins";
import { useNavigation } from "../stores/navigation";
import colors from "../consts/colors";
import { BsFillCheckCircleFill } from "react-icons/bs";

export default function SleepCompleteScreen() {
    const { push } = useNavigation();
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
                    <FlexBox direction="column" alignItems="center" gap={15}>
                        <Text size={60} color={colors.primary}>
                            <BsFillCheckCircleFill />
                        </Text>

                        <Text weight={600} size={24}>
                            Sleep Completed
                        </Text>
                    </FlexBox>
                    <FlexBox
                        direction="column"
                        marginX={20}
                        className={styles.info}
                    >
                        <FlexBox alignItems="center" gap={10}>
                            <div
                                className={cx(
                                    styles.pet,
                                    css`
                                        background-image: url(${thumbnail});
                                    `
                                )}
                            ></div>
                            <Text size={20} weight={600}>
                                {pets[0].name}
                            </Text>
                        </FlexBox>
                        <FlexBox
                            className={css`
                                position: relative;
                            `}
                            direction="column"
                            marginX={20}
                            marginY={20}
                        >
                            <Progress value={16 / 20} />
                            <FlexBox
                                marginTop={10}
                                justifyContent="space-between"
                            >
                                <Text size={14}>Lv.8</Text>
                                <Text size={14}>16 / 20</Text>
                                <Text size={14}>Lv.9</Text>
                            </FlexBox>
                            <div className={styles.bubble}>+10</div>
                        </FlexBox>
                    </FlexBox>
                    <FlexBox alignItems="center" gap={15}>
                        <FlexBox
                            direction="column"
                            alignItems="flex-end"
                            gap={18}
                        >
                            <Text>Time</Text>
                            <Text>Quality</Text>
                        </FlexBox>
                        <FlexBox
                            direction="column"
                            alignItems="flex-start"
                            gap={10}
                        >
                            <Text weight={600} size={22}>
                                08:12:16
                            </Text>
                            <FlexBox alignItems="center" gap={10}>
                                <Text weight={600} size={22}>
                                    Good
                                </Text>
                            </FlexBox>
                        </FlexBox>
                    </FlexBox>
                </FlexBox>
            </SafeArea>
            <Footer>
                <FlexBox direction="column" gap={15}>
                    <Button
                        varient="primary"
                        onClick={() => push("home", "fadeIn")}
                    >
                        Done
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
        width: 100px;
        height: 100px;
    `,
    info: css`
        align-self: stretch;
        background-color: #eeeeee;
        border-radius: 8px;
    `,
    bubble: css`
        position: absolute;
        top: -33px;
        left: 180px;
        padding: 3px 8px;
        border-radius: 8px;
        background-color: ${colors.primary};
        box-shadow: 0 3px ${colors.primaryShadow};
        color: #fff;
    `,
};
