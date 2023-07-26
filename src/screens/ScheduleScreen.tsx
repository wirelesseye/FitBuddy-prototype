import { FlexBox, Navigation, ScreenBox } from "../components";

export default function ScheduleScreen() {
    return (
        <ScreenBox>
            <FlexBox direction="column" grow={1}>
                Schedule
            </FlexBox>
            <Navigation />
        </ScreenBox>
    );
}
