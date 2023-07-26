import {
    FlexBox,
    Header,
    HeaderTitle,
    Navigation,
    SafeArea,
    ScreenBox,
} from "../components";

export default function PetsScreen() {
    return (
        <ScreenBox>
            <SafeArea avoidFooter={false}>
                <Header>
                    <HeaderTitle>My Pets</HeaderTitle>
                </Header>
                <FlexBox direction="column" grow={1}>
                    Pets
                </FlexBox>
            </SafeArea>

            <Navigation />
        </ScreenBox>
    );
}
