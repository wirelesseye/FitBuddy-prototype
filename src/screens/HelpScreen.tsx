import { Header, HeaderTitle, Navigation, SafeArea, ScreenBox } from "../components";

export default function HelpScreen() {
    return (
        <ScreenBox>
            <SafeArea>
                <Header>
                    <HeaderTitle>Help</HeaderTitle>
                </Header>
            </SafeArea>
            <Navigation />
        </ScreenBox>
    )
}