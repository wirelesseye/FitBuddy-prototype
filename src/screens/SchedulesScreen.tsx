import { css } from "@emotion/css";
import {
    Button,
    WeeklyCalendar,
    FlexBox,
    Header,
    HeaderBack,
    HeaderTitle,
    SafeArea,
    ScreenBox,
    Text,
} from "../components";
import { LuPlusCircle } from "react-icons/lu";
import { useNavigation } from "../stores/navigation";
import { GiWeightLiftingUp } from "react-icons/gi";

export default function SchedulesScreen() {
    const { push } = useNavigation();

    return (
        <ScreenBox>
            <SafeArea>
                <Header>
                    <HeaderBack />
                    <HeaderTitle>Schedules</HeaderTitle>
                </Header>
                <FlexBox direction="column" marginX={20} gap={20}>
                    <WeeklyCalendar />
                    <FlexBox direction="column" gap={15}>
                        <Button>
                            <GiWeightLiftingUp
                                className={styles.scheduleIcon}
                            />
                            <span>Bicep curl</span>
                            <span className={styles.scheduleIntensity}>
                                4×5
                            </span>
                        </Button>
                        <Button
                            varient="primary"
                            onClick={() => push("addSchedule", "slideToLeft")}
                        >
                            <LuPlusCircle className={styles.icon} />
                            <Text>Add</Text>
                        </Button>
                    </FlexBox>
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
    icon: css`
        margin-right: 10px;
    `,
};
