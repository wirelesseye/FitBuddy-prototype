import { css } from "@emotion/css";
import {
    Button,
    FlexBox,
    Footer,
    Header,
    HeaderBack,
    HeaderTitle,
    Input,
    PetButton,
    SafeArea,
    ScreenBox,
    Text,
} from "../components";
import { ActivityButton } from "../components/ActivityButton";
import { usePets } from "../stores/pets";
import { useState } from "react";
import SelectActivityDrawer from "../components/SelectActivityDrawer";
import SelectPetDrawer from "../components/SelectPetDrawer";
import { useNavigation } from "../stores/navigation";

export default function CustomWorkoutScreen() {
    const pets = usePets();
    const { push } = useNavigation();

    const [openSelectActivity, setOpenSelectActivity] = useState(false);
    const [openSelectPet, setOpenSelectPet] = useState(false);

    return (
        <ScreenBox>
            <SafeArea>
                <Header>
                    <HeaderBack />
                    <HeaderTitle>Custom Workout</HeaderTitle>
                </Header>
                <FlexBox
                    direction="column"
                    marginX={20}
                    marginTop={15}
                    gap={20}
                >
                    <FlexBox direction="column" gap={15}>
                        <Text size={18} weight={500}>
                            Pet
                        </Text>
                        <PetButton
                            pet={pets[0]}
                            onClick={() => setOpenSelectPet(true)}
                        />
                    </FlexBox>
                    <FlexBox direction="column" gap={15}>
                        <Text size={18} weight={500}>
                            Activity
                        </Text>
                        <ActivityButton
                            activity="walking"
                            selectable={false}
                            onClick={() => setOpenSelectActivity(true)}
                        />
                    </FlexBox>
                    <FlexBox direction="column" gap={15}>
                        <Text size={18} weight={500}>
                            Intensity
                        </Text>
                        <FlexBox alignItems="center" gap={10}>
                            <Input
                                className={styles.minInput}
                                type="number"
                                defaultValue={60}
                            />
                            <Text>minutes</Text>
                        </FlexBox>
                    </FlexBox>
                </FlexBox>
            </SafeArea>
            <Footer>
                <Button
                    varient="primary"
                    onClick={() => push("workoutInProgress", "fadeIn")}
                >
                    Start
                </Button>
            </Footer>

            <SelectActivityDrawer
                isOpen={openSelectActivity}
                setIsOpen={setOpenSelectActivity}
            />
            <SelectPetDrawer
                isOpen={openSelectPet}
                setIsOpen={setOpenSelectPet}
            />
        </ScreenBox>
    );
}

const styles = {
    minInput: css`
        width: 60px;
        text-align: right;
    `,
};
