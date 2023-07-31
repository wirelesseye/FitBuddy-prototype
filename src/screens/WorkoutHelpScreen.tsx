import { css } from "@emotion/css";
import {
    Button,
    FlexBox,
    Header,
    HeaderBack,
    SafeArea,
    ScreenBox,
    Text,
} from "../components";
import { LuChevronsUpDown, LuPlay, LuSubtitles } from "react-icons/lu";
import colors from "../consts/colors";
import { GrYoga } from "react-icons/gr";
import SelectActivityDrawer from "../components/SelectActivityDrawer";
import { useState } from "react";

export default function WorkoutHelpScreen() {
    const [openSelectActivity, setOpenSelectActivity] = useState(false);

    return (
        <ScreenBox>
            <SafeArea avoidHeader={false}>
                <Header className={styles.header}>
                    <HeaderBack border />
                </Header>
                <FlexBox
                    direction="column"
                    className={styles.video}
                    alignItems="center"
                >
                    <Button className={styles.play}>
                        <LuPlay />
                    </Button>
                    <FlexBox className={styles.bottom}>
                        <Button varient="ghost" paddingX={10}>
                            <LuSubtitles />
                        </Button>
                    </FlexBox>
                </FlexBox>
                <div className={styles.acitivity} onClick={() => setOpenSelectActivity(true)}>
                    <FlexBox gap={10}>
                        <GrYoga size={20} />
                        <Text weight={500}>Yoga</Text>
                    </FlexBox>
                    <LuChevronsUpDown />
                </div>
                <FlexBox
                    direction="column"
                    marginX={20}
                    marginTop={20}
                    gap={10}
                >
                    <Text weight={600}>Transcript</Text>
                    <Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Aliquam mollis, nibh ut dictum sagittis, odio dolor
                        scelerisque ex, nec ultrices diam sapien et nibh. Duis
                        fermentum orci ac sapien condimentum faucibus. Sed
                        tristique quam odio, quis iaculis urna fermentum non.
                        Cras eu diam a lacus interdum dignissim.
                    </Text>
                    <Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Aliquam mollis, nibh ut dictum sagittis, odio dolor
                        scelerisque ex, nec ultrices diam sapien et nibh.
                    </Text>
                </FlexBox>
            </SafeArea>
            <SelectActivityDrawer
                isOpen={openSelectActivity}
                setIsOpen={setOpenSelectActivity}
            />
        </ScreenBox>
    );
}

const styles = {
    header: css`
        position: absolute;
        top: 47px;
    `,
    video: css`
        height: 230px;
        background-color: #606060;
    `,
    play: css`
        margin-top: 120px;
        padding: 0;
        height: 40px;
        width: 40px;
        border-radius: 100%;
        background-color: #fff;
    `,
    bottom: css`
        display: flex;
        width: 100%;
        margin-top: auto;
        justify-content: flex-end;
        padding-bottom: 5px;
        padding-right: 10px;
    `,
    acitivity: css`
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 12px 15px;
        border-bottom: 2px solid ${colors.border};
        :active {
            background-color: ${colors.border};
        }
    `,
};
