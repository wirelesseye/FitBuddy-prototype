import { Header, HeaderBack, HeaderTitle, SafeArea, ScreenBox } from "../components";

export default function ScheduleScreen() {
    return (
        <ScreenBox>
            <SafeArea>
                <Header>
                    <HeaderBack />
                    <HeaderTitle>Schedule</HeaderTitle>
                </Header>
            </SafeArea>
        </ScreenBox>
    );
}
