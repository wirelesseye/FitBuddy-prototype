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

export default function DietScreen() {
    return (
        <ScreenBox>
            <SafeArea>
                <Header>
                    <HeaderBack />
                    <HeaderTitle>Diet</HeaderTitle>
                </Header>
                <FlexBox direction="column" gap={20} marginX={20}>
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
            </SafeArea>
        </ScreenBox>
    );
}
