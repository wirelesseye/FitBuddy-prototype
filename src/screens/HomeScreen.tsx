import { css } from "@emotion/css";
import { Navigation, PetPreview, ScreenBox } from "../components";

export default function HomeScreen() {
    return (
        <ScreenBox className={styles.screen}>
            <PetPreview distance={300} className={styles.petPreview} />
            <Navigation />
        </ScreenBox>
    );
}

const styles = {
    screen: css`
        /* background-color: red; */
    `,
    petPreview: css`
        flex-grow: 1;
    `
}
