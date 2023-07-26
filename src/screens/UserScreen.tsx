import { FlexBox, Navigation, Screen } from "../components";

export default function UserScreen() {
    return (
        <Screen>
            <FlexBox direction="column" grow={1}>
                User
            </FlexBox>
            <Navigation />
        </Screen>
    );
}
