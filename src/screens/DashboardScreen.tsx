import { LuChevronRight, LuSettings2 } from "react-icons/lu";
import {
    Button,
    Card,
    FlexBox,
    Header,
    HeaderButton,
    HeaderTitle,
    Navigation,
    Progress,
    SafeArea,
    ScreenBox,
    Text,
} from "../components";
import { useNavigation } from "../stores/navigation";
import { css } from "@emotion/css";
import { GiWeightLiftingUp } from "react-icons/gi";

export default function DashboardScreen() {
    return (
        <ScreenBox>
            <SafeArea>
                <Header>
                    <HeaderTitle>Dashboard</HeaderTitle>
                    <HeaderButton className={styles.editBtn}>
                        <LuSettings2 size={20} />
                    </HeaderButton>
                </Header>
                <FlexBox
                    direction="column"
                    marginX={20}
                    gap={20}
                    paddingBottom={130}
                >
                    <Goal />
                    <Schedules />
                    <Diet />
                </FlexBox>
            </SafeArea>
            <Navigation />
        </ScreenBox>
    );
}

function Goal() {
    const { push } = useNavigation();

    return (
        <Card direction="column">
            <FlexBox
                alignItems="center"
                justifyContent="space-between"
                marginBottom={20}
            >
                <Text size={20} weight={500}>
                    Goals
                </Text>
                <Button
                    varient="ghost"
                    paddingX={2}
                    paddingY={0}
                    onClick={() => push("goals", "slideToLeft")}
                >
                    <LuChevronRight size={22} />
                </Button>
            </FlexBox>
            <FlexBox direction="column" gap={20}>
                <FlexBox direction="column" gap={10}>
                    <FlexBox justifyContent="space-between">
                        <Text weight={500}>Exp (Daily)</Text>
                        <Text weight={500}>6 / 30</Text>
                    </FlexBox>
                    <Progress value={6 / 30} />
                </FlexBox>
                <FlexBox direction="column" gap={10}>
                    <FlexBox justifyContent="space-between">
                        <Text weight={500}>Steps (Daily)</Text>
                        <Text weight={500}>3,000 / 10,000</Text>
                    </FlexBox>
                    <Progress value={3000 / 10000} />
                </FlexBox>
            </FlexBox>
        </Card>
    );
}

function Schedules() {
    const { push } = useNavigation();

    return (
        <Card direction="column">
            <FlexBox
                alignItems="center"
                justifyContent="space-between"
                marginBottom={20}
            >
                <Text size={20} weight={500}>
                    Schedules
                </Text>
                <Button
                    varient="ghost"
                    paddingX={2}
                    paddingY={0}
                    onClick={() => push("schedules", "slideToLeft")}
                >
                    <LuChevronRight size={22} />
                </Button>
            </FlexBox>
            <FlexBox direction="column" gap={20}>
                <FlexBox gap={8}>
                    <Text weight={600}>Thursday</Text>
                    <Text>27 July</Text>
                </FlexBox>
                <FlexBox>
                    <GiWeightLiftingUp className={styles.scheduleIcon} />
                    <span>Bicep curl</span>
                    <span className={styles.scheduleIntensity}>4×5</span>
                </FlexBox>
            </FlexBox>
        </Card>
    );
}

function Diet() {
    const { push } = useNavigation();

    return (
        <Card direction="column">
            <FlexBox
                alignItems="center"
                justifyContent="space-between"
                marginBottom={20}
            >
                <Text size={20} weight={500}>
                    Diet
                </Text>
                <Button
                    varient="ghost"
                    paddingX={2}
                    paddingY={0}
                    onClick={() => push("diet", "slideToLeft")}
                >
                    <LuChevronRight size={22} />
                </Button>
            </FlexBox>
            <FlexBox direction="column" gap={20}>
                <FlexBox direction="column" gap={10}>
                    <FlexBox justifyContent="space-between">
                        <Text weight={500}>Calories</Text>
                        <Text weight={500}>600 / 2,500 (Net)</Text>
                    </FlexBox>
                    <Progress value={3000 / 10000} />
                </FlexBox>
                <FlexBox direction="column" gap={10}>
                    <FlexBox justifyContent="space-between">
                        <Text weight={500}>Fats</Text>
                        <Text weight={500}>24 / 60 g</Text>
                    </FlexBox>
                    <Progress value={24 / 60} />
                </FlexBox>
                <FlexBox direction="column" gap={10}>
                    <FlexBox justifyContent="space-between">
                        <Text weight={500}>Carbs</Text>
                        <Text weight={500}>50 / 135 g</Text>
                    </FlexBox>
                    <Progress value={50 / 135} />
                </FlexBox>
            </FlexBox>
        </Card>
    );
}

const styles = {
    editBtn: css`
        margin-left: auto;
    `,
    scheduleIcon: css`
        margin-right: 10px;
    `,
    scheduleIntensity: css`
        margin-left: auto;
    `,
};
