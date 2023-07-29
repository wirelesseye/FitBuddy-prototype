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
                <FlexBox direction="column" grow={1}>
                    User
                </FlexBox>
            </SafeArea>
            <Navigation />
        </ScreenBox>
    );
}
