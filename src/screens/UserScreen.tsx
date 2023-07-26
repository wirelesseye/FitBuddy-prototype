import { FlexBox, Navigation, ScreenBox } from "../components";

export default function UserScreen() {
    return (
        <ScreenBox>
            <FlexBox direction="column" grow={1}>
                User
            </FlexBox>
            <Navigation />
        </ScreenBox>
    );
}
