import { css } from "@emotion/css";
import {
    Header,
    HeaderButton,
    Navigation,
    PetPreview,
    ScreenBox,
} from "../components";
import { usePets } from "../stores/pets";
import { LuBell, LuStethoscope } from "react-icons/lu";

export default function HomeScreen() {
    const pets = usePets();

    return (
        <ScreenBox className={styles.screen}>
            <PetPreview
                skinID={pets[0].skin}
                distance={300}
                className={styles.petPreview}
            />
            <Header className={styles.header}>
                <HeaderButton border>
                    <LuStethoscope size={20} />
                </HeaderButton>
                <HeaderButton border>
                    <LuBell size={20} />
                </HeaderButton>
            </Header>
            <Navigation />
        </ScreenBox>
    );
}

const styles = {
    screen: css`
        /* background-color: red; */
    `,
    header: css`
        position: absolute;
        top: 47px;
        justify-content: space-between;
    `,
    petPreview: css`
        flex-grow: 1;
    `,
};
