import { css } from "@emotion/css";
import {
    Button,
    FlexBox,
    Footer,
    Header,
    HeaderBack,
    HeaderButton,
    Input,
    PetPreview,
    SafeArea,
    ScreenBox,
    SkinButton,
} from "../components";
import { useNavigation } from "../stores/navigation";
import { LuEdit, LuWallpaper } from "react-icons/lu";
import { useSettings } from "../stores/settings";
import { useState } from "react";
import { SkinID, getSkinIDs } from "../consts/skins";
import { usePetStore } from "../stores/pets";

export default function CreatePetScreen() {
    const { push } = useNavigation();
    const nextScene = useSettings((state) => state.nextScene);
    const { pet, setPet } = usePetStore();

    const [name, setName] = useState(pet.name);
    const [skinID, setSkinID] = useState<SkinID>("shiba");

    const onSubmit = () => {
        push("selectActivities", "slideToLeft");
        setPet({ name, skin: skinID });
    };

    return (
        <ScreenBox>
            <SafeArea avoidHeader={false}>
                <PetPreview skinID={skinID} className={styles.petPreview} />
                <Header className={styles.header}>
                    <HeaderBack border />
                    <HeaderButton
                        className={styles.sceneBtn}
                        border
                        onClick={nextScene}
                    >
                        <LuWallpaper size={22} />
                    </HeaderButton>
                </Header>
                <div className={styles.inputContainer}>
                    <Input
                        className={styles.nameInput}
                        placeholder="Name your pet..."
                        value={name}
                        onValueChange={setName}
                    />
                    <div className={styles.editIcon}>
                        <LuEdit />
                    </div>
                </div>
                <FlexBox marginX={20} gap={10}>
                    {getSkinIDs().map((id) => (
                        <SkinButton
                            key={id}
                            skinID={id}
                            select={skinID === id}
                            onSelect={setSkinID}
                        />
                    ))}
                </FlexBox>
                <Footer>
                    <Button varient="primary" onClick={onSubmit}>
                        Next
                    </Button>
                </Footer>
            </SafeArea>
        </ScreenBox>
    );
}

const styles = {
    header: css`
        position: absolute;
        top: 47px;
    `,
    petPreview: css`
        height: 250px;
        border-bottom-left-radius: 30px;
        border-bottom-right-radius: 30px;
        overflow: hidden;
        border-bottom: 2px solid #a5a5a5;
    `,
    inputContainer: css`
        position: relative;
        display: flex;
        flex-direction: column;
    `,
    editIcon: css`
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        right: 35px;
        top: 50%;
        transform: translateY(-50%);
    `,
    nameInput: css`
        text-align: center;
        margin: 10px 20px;
        padding-right: 40px;
    `,
    sceneBtn: css`
        margin-left: auto;
    `,
};
