import { Header, HeaderBack, HeaderTitle, SafeArea, ScreenBox } from "../components";

export default function GoalsScreen() {
    return (
        <ScreenBox>
            <SafeArea>
                <Header>
                    <HeaderBack />
                    <HeaderTitle>Goals</HeaderTitle>
                </Header>
            </SafeArea>
        </ScreenBox>
    );
}
