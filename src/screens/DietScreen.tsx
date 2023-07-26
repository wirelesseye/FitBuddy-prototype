import { FlexBox, Navigation, Screen } from "../components";

export default function DietScreen() {
    return (
        <Screen>
            <FlexBox direction="column" grow={1}>
                Diet
            </FlexBox>
            <Navigation />
        </Screen>
    );
}
