import { css, cx } from "@emotion/css";
import {
    Button,
    FlexBox,
    Input,
    Navigation,
    SafeArea,
    ScreenBox,
    Text,
} from "../components";
import { LuDumbbell, LuMessagesSquare, LuPlay, LuSearch } from "react-icons/lu";
import animalDoctor from "../assets/animal_doctor.png";
import { useNavigation } from "../stores/navigation";

export default function HelpScreen() {
    const { push } = useNavigation();

    return (
        <ScreenBox>
            <SafeArea>
                <FlexBox direction="column" marginX={20} gap={20}>
                    <FlexBox alignItems="flex-end">
                        <div
                            className={cx(
                                styles.doctor,
                                css`
                                    background-image: url(${animalDoctor});
                                `
                            )}
                        ></div>
                        <FlexBox marginBottom={14} direction="column" gap={4}>
                            <Text weight={600} size={24}>
                                Hello,
                            </Text>
                            <Text size={18}>How can I help you?</Text>
                        </FlexBox>
                    </FlexBox>
                    <FlexBox
                        direction="column"
                        className={styles.inputContainer}
                    >
                        <FlexBox direction="column">
                            <Input
                                className={styles.input}
                                placeholder="Search..."
                            />
                            <LuSearch className={styles.searchIcon} />
                        </FlexBox>
                    </FlexBox>
                    <FlexBox direction="column" gap={15}>
                        <Button
                            className={styles.helpBtn}
                            onClick={() => push("workoutHelp", "slideToLeft")}
                        >
                            <LuDumbbell /> Get Workout Help & Examples
                        </Button>
                        <Button className={styles.helpBtn}>
                            <LuMessagesSquare /> Online Consultation
                        </Button>
                        <Button className={styles.helpBtn}>
                            <LuPlay />
                            Play Guided Tour
                        </Button>
                    </FlexBox>
                </FlexBox>
            </SafeArea>
            <Navigation />
        </ScreenBox>
    );
}

const styles = {
    doctor: css`
        width: 100px;
        height: 100px;
        background-size: cover;
        margin-left: -10px;
        margin-right: -10px;
        margin-top: 30px;
    `,
    inputContainer: css`
        position: relative;
    `,
    input: css`
        padding-left: 40px;
    `,
    searchIcon: css`
        position: absolute;
        top: 50%;
        left: 15px;
        transform: translateY(-50%);
    `,
    helpBtn: css`
        gap: 15px;
        justify-content: flex-start;
    `,
};
