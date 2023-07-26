import { FlexBox, Navigation, ScreenBox } from "../components";

export default function PetsScreen() {
    return (
        <ScreenBox>
            <FlexBox direction="column" grow={1}>
                Pets
            </FlexBox>
            <Navigation />
        </ScreenBox>
    )
}