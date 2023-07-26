import { FlexBox, Navigation, Screen } from "../components";

export default function ScheduleScreen() {
    return (
        <Screen>
            <FlexBox direction="column" grow={1}>
                Schedule
            </FlexBox>
            <Navigation />
        </Screen>
    );
}
