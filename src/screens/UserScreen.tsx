import { css } from "@emotion/css";
import {
    Button,
    Card,
    FlexBox,
    Navigation,
    SafeArea,
    ScreenBox,
    Text,
} from "../components";
import { LuMedal, LuSettings, LuUser, LuUsers } from "react-icons/lu";
import colors from "../consts/colors";
import { BsFillPatchCheckFill, BsStarFill } from "react-icons/bs";

export default function UserScreen() {
    return (
        <ScreenBox>
            <SafeArea>
                <FlexBox
                    direction="column"
                    marginX={20}
                    marginTop={30}
                    gap={20}
                >
                    <FlexBox alignItems="center" gap={15}>
                        <div className={styles.avatar}>
                            <LuUser size={40} />
                        </div>
                        <FlexBox direction="column" gap={5}>
                            <Text weight={600} size={24}>
                                John Smith
                            </Text>
                            <Text size={14}>Joined July 2023</Text>
                        </FlexBox>
                    </FlexBox>
                    <FlexBox direction="column" gap={15}>
                        <Button>
                            <LuUsers className={styles.icon} />
                            Friends
                        </Button>
                        <Button>
                            <LuMedal className={styles.icon} />
                            Rewards
                        </Button>
                        <Button>
                            <LuSettings className={styles.icon} />
                            Settings
                        </Button>
                    </FlexBox>
                    <FlexBox direction="column" gap={10}>
                        <Card alignItems="center" gap={15}>
                            <BsFillPatchCheckFill className={styles.streak} />
                            <Text size={17} weight={500}>
                                3 day streak
                            </Text>
                        </Card>
                        <Card alignItems="center" gap={15}>
                            <BsStarFill className={styles.exp} />
                            <Text size={17} weight={500}>
                                584 exp gained
                            </Text>
                        </Card>
                    </FlexBox>
                </FlexBox>
            </SafeArea>
            <Navigation />
        </ScreenBox>
    );
}

const styles = {
    avatar: css`
        display: flex;
        align-items: center;
        justify-content: center;
        width: 60px;
        height: 60px;
        border: 2px solid ${colors.border};
        border-radius: 100%;
    `,
    icon: css`
        margin-right: 10px;
    `,
    streak: css`
        font-size: 30px;
        color: #ff6a00;
    `,
    exp: css`
        font-size: 30px;
        color: ${colors.primary};
    `,
};
