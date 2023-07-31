import { useState } from "react";
import {
    Button,
    DaySelector,
    FlexBox,
    Footer,
    Header,
    HeaderBack,
    HeaderTitle,
    Input,
    PetButton,
    SafeArea,
    ScreenBox,
    Switch,
    Text,
} from "../components";
import { useNavigation } from "../stores/navigation";
import { usePets } from "../stores/pets";
import { ActivityButton } from "../components/ActivityButton";
import { css } from "@emotion/css";
import SelectActivityDrawer from "../components/SelectActivityDrawer";
import SelectPetDrawer from "../components/SelectPetDrawer";

export default function AddScheduleScreen() {
    const pets = usePets();
    const { push } = useNavigation();

    const [openSelectActivity, setOpenSelectActivity] = useState(false);
    const [openSelectPet, setOpenSelectPet] = useState(false);
    const [enableRepeat, setEnableRepeat] = useState(false);

    return (
        <ScreenBox>
            <SafeArea>
                <Header>
                    <HeaderBack />
                    <HeaderTitle>Add Schedule</HeaderTitle>
                </Header>
                <FlexBox
                    direction="column"
                    marginX={20}
                    marginTop={15}
                    gap={20}
                    paddingBottom={70}
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
                    <FlexBox direction="column" gap={15}>
                        <Text size={18} weight={500}>
                            Start Time
                        </Text>
                        <FlexBox alignItems="center" gap={10}>
                            <Input
                                className={styles.minInput}
                                defaultValue="1:00"
                            />
                            <Text>PM</Text>
                        </FlexBox>
                    </FlexBox>
                    <FlexBox direction="column" gap={15}>
                        <FlexBox
                            alignItems="center"
                            justifyContent="space-between"
                        >
                            <Text size={18} weight={500}>
                                Repeat
                            </Text>
                            <Switch
                                checked={enableRepeat}
                                onCheckedChange={setEnableRepeat}
                            />
                        </FlexBox>
                        <FlexBox direction="column">
                            <DaySelector disabled={!enableRepeat} />
                        </FlexBox>
                    </FlexBox>
                    <FlexBox alignItems="center" justifyContent="space-between">
                        <Text size={18} weight={500}>
                            Sound
                        </Text>
                        <Switch />
                    </FlexBox>
                    <FlexBox alignItems="center" justifyContent="space-between">
                        <Text size={18} weight={500}>
                            Vibrate
                        </Text>
                        <Switch />
                    </FlexBox>
                </FlexBox>
                <Footer>
                    <Button
                        varient="primary"
                        onClick={() => push("schedules", "fadeIn")}
                    >
                        Done
                    </Button>
                </Footer>
            </SafeArea>
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
