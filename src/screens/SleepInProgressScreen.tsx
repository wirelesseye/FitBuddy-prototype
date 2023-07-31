import { css } from "@emotion/css";
import {
    Button,
    FlexBox,
    Footer,
    Input,
    SafeArea,
    ScreenBox,
    Text,
} from "../components";
import { LuPlay, LuSkipForward } from "react-icons/lu";
import { useNavigation } from "../stores/navigation";

export default function SleepInProgressScreen() {
    const { push, back } = useNavigation();

    return (
        <ScreenBox>
            <SafeArea>
                <FlexBox
                    grow={1}
                    alignItems="center"
                    justifyContent="center"
                    direction="column"
                    marginBottom={80}
                    gap={30}
                >
                    <Text size={60}>💤</Text>
                    <FlexBox direction="column" gap={15}>
                        <FlexBox alignItems="center" justifyContent="space-between" gap={15}>
                            <Text>Time</Text>
                            <Text weight={600} size={22}>
                                00:01:34
                            </Text>
                        </FlexBox>
                        <FlexBox alignItems="center" justifyContent="space-between" gap={15}>
                            <Text>Alarm</Text>
                            <Input
                                defaultValue={"8:00"}
                                className={css`
                                    width: 80px;
                                `}
                            />
                        </FlexBox>
                        <FlexBox alignItems="center" justifyContent="space-between" gap={15}>
                            <Text>Relexing Sound</Text>
                            <FlexBox gap={10}>
                                <Button className={styles.mediaBtn}>
                                    <LuPlay />
                                </Button>
                                <Button className={styles.mediaBtn}>
                                    <LuSkipForward />
                                </Button>
                            </FlexBox>
                        </FlexBox>
                    </FlexBox>
                </FlexBox>
            </SafeArea>
            <Footer>
                <FlexBox direction="column" gap={15}>
                    <Button onClick={() => back("fadeIn")}>Cancel</Button>
                    <Button
                        varient="primary"
                        onClick={() => push("sleepComplete", "fadeIn")}
                    >
                        Finish
                    </Button>
                </FlexBox>
            </Footer>
        </ScreenBox>
    );
}

const styles = {
    mediaBtn: css`
        padding: 8px;
    `
};
