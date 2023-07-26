import { css } from "@emotion/css";
import { Button, FlexBox, SafeArea, ScreenBox } from "../components";
import { useNavigation } from "../stores/navigation";

export default function WelcomeScreen() {
    const { push } = useNavigation();

    return (
        <ScreenBox>
            <SafeArea>
                <FlexBox direction="column" grow={1}>
                    <div className={styles.title}>Fitness App</div>
                    <FlexBox
                        className={styles.bottom}
                        gap={20}
                        direction="column"
                    >
                        <Button onClick={() => push("home")}>Log in</Button>
                        <Button varient="primary" onClick={() => push("signup")}>
                            Sign up
                        </Button>
                    </FlexBox>
                </FlexBox>
            </SafeArea>
        </ScreenBox>
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
        margin: auto 30px 10px 30px;
    `,
};
