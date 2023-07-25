import { css } from "@emotion/css";
import { Button, FlexBox, SafeArea, Screen } from "../components";
import { useNavigation } from "../stores/navigation";

export default function WelcomeScreen() {
    const { push } = useNavigation();

    return (
        <Screen>
            <SafeArea>
                <FlexBox direction="column" grow={1}>
                    <div className={styles.title}>Fitness App</div>
                    <FlexBox
                        className={styles.bottom}
                        gap={20}
                        direction="column"
                    >
                        <Button onClick={() => push("home")}>Log in</Button>
                        <Button varient="primary" onClick={() => push("home")}>
                            Sign up
                        </Button>
                    </FlexBox>
                </FlexBox>
            </SafeArea>
        </Screen>
    );
}

const styles = {
    title: css`
        align-self: center;
        margin-top: auto;
        font-size: 32px;
        font-weight: 600;
    `,
    bottom: css`
        margin: auto 30px 0 30px;
    `,
};
