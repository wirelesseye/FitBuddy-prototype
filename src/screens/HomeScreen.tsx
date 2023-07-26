import { css } from "@emotion/css";
import { Button, FlexBox, Navigation, ScreenBox } from "../components";
import { useNavigation } from "../stores/navigation";

export default function HomeScreen() {
    const { back } = useNavigation();
    
    return (
        <ScreenBox className={styles.screen}>
            <FlexBox direction="column" grow={1}>
                Home
                <Button onClick={() => back()}>Back</Button>
            </FlexBox>

            <Navigation />
        </ScreenBox>
    );
}

const styles = {
    screen: css`
        /* background-color: red; */
    `
}
