import { css } from "@emotion/css";
import {
    Button,
    Card,
    FlexBox,
    Header,
    HeaderBack,
    HeaderTitle,
    Progress,
    SafeArea,
    ScreenBox,
    Text,
    WeeklyCalendar,
} from "../components";
import { LuPlus } from "react-icons/lu";
import { useNavigation } from "../stores/navigation";

export default function DietScreen() {
    const { push } = useNavigation();

    return (
        <ScreenBox>
            <SafeArea>
                <Header>
                    <HeaderBack />
                    <HeaderTitle>Diet</HeaderTitle>
                </Header>
                <FlexBox direction="column" marginX={20} gap={30}>
                    <WeeklyCalendar showStreaks />
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
                    <FlexBox direction="column" gap={20}>
                        <FlexBox alignItems="center">
                            <Text size={20} weight={600}>
                                Record
                            </Text>
                            <Button
                                varient="ghost"
                                className={styles.addBtn}
                                onClick={() =>
                                    push("recordDiet", "slideToLeft")
                                }
                            >
                                <LuPlus />
                            </Button>
                        </FlexBox>

                        <Card direction="column" gap={10}>
                            <Text weight={500}>Breakfast</Text>
                            <FlexBox justifyContent="space-between">
                                <Text>Calories</Text>
                                <Text>99 kcals</Text>
                            </FlexBox>
                            <FlexBox justifyContent="space-between">
                                <Text>Fats</Text>
                                <Text>99 g</Text>
                            </FlexBox>
                            <FlexBox justifyContent="space-between">
                                <Text>Carbs</Text>
                                <Text>99 g</Text>
                            </FlexBox>
                        </Card>
                        <Card direction="column" gap={10}>
                            <Text weight={500}>Lunch</Text>
                            <FlexBox justifyContent="space-between">
                                <Text>Calories</Text>
                                <Text>99 kcals</Text>
                            </FlexBox>
                            <FlexBox justifyContent="space-between">
                                <Text>Fats</Text>
                                <Text>99 g</Text>
                            </FlexBox>
                            <FlexBox justifyContent="space-between">
                                <Text>Carbs</Text>
                                <Text>99 g</Text>
                            </FlexBox>
                        </Card>
                    </FlexBox>
                </FlexBox>
            </SafeArea>
        </ScreenBox>
    );
}

const styles = {
    addBtn: css`
        margin-left: auto;
        padding: 8px;
    `,
};
