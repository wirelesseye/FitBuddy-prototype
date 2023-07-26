import { css } from "@emotion/css";
import { Button, FlexBox, Navigation, Screen } from "../components";
import { useNavigation } from "../stores/navigation";

export default function HomeScreen() {
    const { back } = useNavigation();
    return (
        <Screen className={styles.screen}>
            <FlexBox direction="column" grow={1}>
                Home
                <Button onClick={() => back()}>Back</Button>
            </FlexBox>

            <Navigation />
        </Screen>
    );
}

const styles = {
    screen: css`
        /* background-color: red; */
    `
}
