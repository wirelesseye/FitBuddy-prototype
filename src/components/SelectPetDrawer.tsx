import { Drawer, DrawerProps, FlexBox, PetButton } from ".";
import { usePets } from "../stores/pets";

export default function SelectPetDrawer(props: DrawerProps) {
    const pets = usePets();

    return (
        <Drawer title="Select a pet" {...props}>
            <FlexBox
                direction="column"
                marginX={20}
                gap={15}
                marginTop={15}
                paddingBottom={35}
            >
                {pets.map((pet) => (
                    <PetButton
                        pet={pet}
                        onClick={() => props.setIsOpen!(false)}
                    />
                ))}
            </FlexBox>
        </Drawer>
    );
}
