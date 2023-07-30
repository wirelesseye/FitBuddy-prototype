import { GiWeightLiftingUp } from "react-icons/gi";
import {
    Button,
    FlexBox,
    Footer,
    Header,
    HeaderBack,
    HeaderTitle,
    SafeArea,
    ScreenBox,
    Text,
} from "../components";
import { useNavigation } from "../stores/navigation";
import { css } from "@emotion/css";

export default function StartWorkoutScreen() {
    const { push } = useNavigation();

    return (
        <ScreenBox>
            <SafeArea>
                <Header>
                    <HeaderBack />
                    <HeaderTitle>Start Workout</HeaderTitle>
                </Header>
                <FlexBox direction="column" marginX={20} marginTop={15}>
                    <FlexBox direction="column" gap={15}>
                        <Text size={18} weight={500}>
                            From Schedule
                        </Text>
                        <Button
                            onClick={() => push("workoutInProgress", "fadeIn")}
                        >
                            <GiWeightLiftingUp
                                className={styles.scheduleIcon}
                            />
                            <span>Bicep curl</span>
                            <span className={styles.scheduleIntensity}>
                                4×5
                            </span>
                        </Button>
                        <Button onClick={() => push("goals", "slideToLeft")}>
                            Go to Schedules
                        </Button>
                    </FlexBox>
                    <Footer>
                        <Button onClick={() => push("customWorkout", "slideToLeft")}>
                            Start Custom Workout
                        </Button>
                    </Footer>
                </FlexBox>
            </SafeArea>
        </ScreenBox>
    );
}

const styles = {
    scheduleIcon: css`
        margin-right: 10px;
    `,
    scheduleIntensity: css`
        margin-left: auto;
    `,
};
