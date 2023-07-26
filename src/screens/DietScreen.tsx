import { FlexBox, Navigation, ScreenBox } from "../components";

export default function DietScreen() {
    return (
        <ScreenBox>
            <FlexBox direction="column" grow={1}>
                Diet
            </FlexBox>
            <Navigation />
        </ScreenBox>
    );
}
