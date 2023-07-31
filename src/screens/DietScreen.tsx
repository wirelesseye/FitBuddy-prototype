import {
    FlexBox,
    Header,
    HeaderBack,
    HeaderTitle,
    SafeArea,
    ScreenBox,
} from "../components";

export default function DietScreen() {
    return (
        <ScreenBox>
            <SafeArea>
                <Header>
                    <HeaderBack />
                    <HeaderTitle>Diet</HeaderTitle>
                </Header>
                <FlexBox direction="column"></FlexBox>
            </SafeArea>
        </ScreenBox>
    );
}
