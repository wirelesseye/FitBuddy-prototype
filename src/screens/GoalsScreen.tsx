import {
    FlexBox,
    Header,
    HeaderBack,
    HeaderTitle,
    Progress,
    SafeArea,
    ScreenBox,
    Text,
} from "../components";

export default function GoalsScreen() {
    return (
        <ScreenBox>
            <SafeArea>
                <Header>
                    <HeaderBack />
                    <HeaderTitle>Goals</HeaderTitle>
                </Header>
                <FlexBox direction="column" marginX={20} gap={30}>
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
                    <FlexBox direction="column">
                        <Text size={20} weight={600}>Schedules</Text>
                    </FlexBox>
                </FlexBox>
            </SafeArea>
        </ScreenBox>
    );
}
