import {
    FlexBox,
    Header,
    HeaderTitle,
    Navigation,
    SafeArea,
    ScreenBox,
} from "../components";

export default function UserScreen() {
    return (
        <ScreenBox>
            <SafeArea>
                <Header>
                    <HeaderTitle>User</HeaderTitle>
                </Header>
                <FlexBox direction="column" marginX={20}>
                    User
                </FlexBox>
            </SafeArea>
            <Navigation />
        </ScreenBox>
    );
}
