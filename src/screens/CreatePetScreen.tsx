import { css } from "@emotion/css";
import {
    Button,
    Footer,
    Header,
    HeaderBack,
    HeaderButton,
    Input,
    PetPreview,
    SafeArea,
    ScreenBox,
} from "../components";
import { useNavigation } from "../stores/navigation";
import { LuWallpaper } from "react-icons/lu";
import { useSettings } from "../stores/settings";

export default function CreatePetScreen() {
    const { push } = useNavigation();
    const nextScene = useSettings(state => state.nextScene);

    return (
        <ScreenBox>
            <SafeArea avoidHeader={false}>
                <PetPreview className={styles.petPreview} />
                <Header className={styles.header}>
                    <HeaderBack border />
                    <HeaderButton className={styles.sceneBtn} border onClick={nextScene}>
                        <LuWallpaper size={22} />
                    </HeaderButton>
                </Header>
                <Input className={styles.nameInput} placeholder="Name your pet..." />
                <Footer>
                    <Button
                        varient="primary"
                        onClick={() => push("selectActivities", "slideToLeft")}
                    >
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
    nameInput: css`
        text-align: center;
        margin: 10px 20px;
    `,
    sceneBtn: css`
        margin-left: auto;
    `
};
