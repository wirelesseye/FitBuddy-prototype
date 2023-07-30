import {
    FlexBox,
    Header,
    HeaderTitle,
    Navigation,
    PetButton,
    SafeArea,
    ScreenBox,
} from "../components";
import { usePets } from "../stores/pets";

export default function PetsScreen() {
    const pets = usePets();

    return (
        <ScreenBox>
            <SafeArea avoidFooter={false}>
                <Header>
                    <HeaderTitle>My Pets</HeaderTitle>
                </Header>
                <FlexBox direction="column" grow={1} marginX={20} gap={15}>
                    {pets.map((pet, index) => (
                        <PetButton key={index} pet={pet} />
                    ))}
                </FlexBox>
            </SafeArea>
            <Navigation />
        </ScreenBox>
    );
}
