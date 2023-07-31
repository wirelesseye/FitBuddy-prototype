import {
    FlexBox,
    Header,
    HeaderTitle,
    Navigation,
    PetButton,
    SafeArea,
    ScreenBox,
} from "../components";
import { useNavigation } from "../stores/navigation";
import { usePets } from "../stores/pets";

export default function PetsScreen() {
    const { push } = useNavigation();
    const pets = usePets();

    return (
        <ScreenBox>
            <SafeArea avoidFooter={false}>
                <Header>
                    <HeaderTitle>My Pets</HeaderTitle>
                </Header>
                <FlexBox direction="column" grow={1} marginX={20} gap={15}>
                    {pets.map((pet, index) => (
                        <PetButton
                            onClick={() => push("pet", "slideToLeft")}
                            key={index}
                            pet={pet}
                        />
                    ))}
                </FlexBox>
            </SafeArea>
            <Navigation />
        </ScreenBox>
    );
}
