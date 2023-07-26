import { FlexBox, Navigation, Screen } from "../components";

export default function PetsScreen() {
    return (
        <Screen>
            <FlexBox direction="column" grow={1}>
                Pets
            </FlexBox>
            <Navigation />
        </Screen>
    )
}