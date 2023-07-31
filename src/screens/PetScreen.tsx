import { LuEdit, LuWallpaper } from "react-icons/lu";
import {
    Button,
    FlexBox,
    Footer,
    Header,
    HeaderBack,
    HeaderButton,
    Input,
    PetPreview,
    Progress,
    SafeArea,
    ScreenBox,
    Text,
} from "../components";
import { usePets } from "../stores/pets";
import { useSettings } from "../stores/settings";
import { css, cx } from "@emotion/css";
import { BsHeartFill, BsStarFill } from "react-icons/bs";
import colors from "../consts/colors";

export default function PetScreen() {
    const pets = usePets();
    const nextScene = useSettings((state) => state.nextScene);

    return (
        <ScreenBox>
            <SafeArea avoidHeader={false}>
                <PetPreview
                    skinID={pets[0].skin}
                    className={styles.petPreview}
                />
                <Header className={styles.header}>
                    <HeaderBack border />
                    <HeaderButton
                        className={styles.sceneBtn}
                        border
                        onClick={nextScene}
                    >
                        <LuWallpaper size={20} />
                    </HeaderButton>
                </Header>
                <div className={styles.inputContainer}>
                    <Input
                        className={styles.nameInput}
                        placeholder="Name your pet..."
                        value={pets[0].name}
                    />
                    <div className={styles.editIcon}>
                        <LuEdit />
                    </div>
                </div>
                <FlexBox
                    direction="column"
                    marginX={20}
                    marginTop={10}
                    gap={20}
                >
                    <FlexBox direction="column" gap={15} marginX={10}>
                        <Text size={18} weight={500}>Lv.8</Text>
                        <FlexBox alignItems="center" gap={20}>
                            <BsHeartFill className={styles.heart} />
                            <Progress
                                value={1}
                                className={cx(
                                    styles.progress,
                                    styles.healthBar
                                )}
                            />
                            <Text weight={500}>100 / 100</Text>
                        </FlexBox>
                        <FlexBox alignItems="center" gap={20}>
                            <BsStarFill className={styles.exp} />
                            <Progress
                                value={6 / 20}
                                className={cx(styles.progress)}
                            />
                            <Text weight={500}>6 / 20</Text>
                        </FlexBox>
                    </FlexBox>
                </FlexBox>
                <Footer>
                    <Button>Start Workout</Button>
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
    name: css`
        margin-left: auto;
    `,
    sceneBtn: css`
        margin-left: auto;
    `,
    heart: css`
        color: #ef0000;
    `,
    exp: css`
        color: ${colors.primary};
    `,
    progress: css`
        flex: 1;
    `,
    healthBar: css`
        & > div {
            background-color: #ef0000;
            outline-color: #a20000;
            box-shadow: 0 4px rgba(239, 0, 0, 0.3);
        }
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
};
