import { css } from "@emotion/css";
import {
    Button,
    Card,
    FlexBox,
    Footer,
    Header,
    HeaderBack,
    HeaderTitle,
    Input,
    SafeArea,
    ScreenBox,
    Text,
} from "../components";
import { LuCamera, LuPlus, LuSearch } from "react-icons/lu";
import { useNavigation } from "../stores/navigation";

export default function RecordDietScreen() {
    const { back } = useNavigation();

    return (
        <ScreenBox>
            <SafeArea>
                <Header>
                    <HeaderBack />
                    <HeaderTitle>Record Diet</HeaderTitle>
                </Header>
                <FlexBox direction="column" marginX={20} gap={30}>
                    <FlexBox direction="column" gap={15}>
                        <Text size={18} weight={500}>
                            Food
                        </Text>
                        <FlexBox
                            direction="column"
                            className={styles.inputContainer}
                        >
                            <FlexBox direction="column">
                                <Input
                                    className={styles.input}
                                    placeholder="Search..."
                                />
                                <LuSearch className={styles.searchIcon} />
                            </FlexBox>
                        </FlexBox>
                        <Button>
                            <LuCamera className={styles.icon} />
                            Scan from Camera
                        </Button>
                    </FlexBox>
                    <FlexBox direction="column" gap={15}>
                        <Text size={18} weight={500}>
                            Time
                        </Text>
                        <FlexBox alignItems="center" gap={10}>
                            <Input
                                className={styles.timeInput}
                                defaultValue="11:30"
                            />
                            <Text>AM</Text>
                        </FlexBox>
                    </FlexBox>
                    <FlexBox direction="column" gap={15}>
                        <FlexBox alignItems="center">
                            <Text size={18} weight={500}>
                                Nutrition
                            </Text>
                            <Button varient="ghost" className={styles.addBtn}>
                                <LuPlus />
                            </Button>
                        </FlexBox>
                        <FlexBox direction="column" gap={15}>
                            <Card justifyContent="space-between">
                                <Text>Calories</Text>
                                <Text>99 kcals</Text>
                            </Card>
                        </FlexBox>
                        <FlexBox direction="column" gap={15}>
                            <Card justifyContent="space-between">
                                <Text>Fats</Text>
                                <Text>99 g</Text>
                            </Card>
                        </FlexBox>
                    </FlexBox>
                </FlexBox>
                <Footer>
                    <Button
                        varient="primary"
                        onClick={() => back("fadeIn")}
                    >
                        Done
                    </Button>
                </Footer>
            </SafeArea>
        </ScreenBox>
    );
}

const styles = {
    inputContainer: css`
        position: relative;
    `,
    input: css`
        padding-left: 40px;
    `,
    searchIcon: css`
        position: absolute;
        top: 50%;
        left: 15px;
        transform: translateY(-50%);
    `,
    icon: css`
        margin-right: 10px;
    `,
    timeInput: css`
        width: 80px;
        text-align: right;
    `,
    addBtn: css`
        margin-left: auto;
        padding: 8px;
    `,
};
