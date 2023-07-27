import {
    Button,
    FlexBox,
    Footer,
    Header,
    HeaderBack,
    HeaderTitle,
    SafeArea,
    ScreenBox,
} from "../components";
import { ActivityButton } from "../components/ActivityButton";
import { useNavigation } from "../stores/navigation";

export default function SelectActivitiesScreen() {
    const { push } = useNavigation();
    
    return (
        <ScreenBox>
            <SafeArea>
                <Header>
                    <HeaderBack />
                    <HeaderTitle>Select Activities</HeaderTitle>
                </Header>
                <FlexBox direction="column" marginX={20} gap={15}>
                    <ActivityButton name="Walking" />
                    <ActivityButton name="Swimming" />
                    <ActivityButton name="Cycling" />
                    <ActivityButton name="Running" />
                    <ActivityButton name="Weight Training" />
                    <ActivityButton name="Tennis" />
                    <ActivityButton name="Golf" />
                    <ActivityButton name="Yoga" />
                </FlexBox>
                <Footer>
                    <Button
                        varient="primary"
                        onClick={() => push("home", "fadeIn")}
                    >
                        Next
                    </Button>
                </Footer>
            </SafeArea>
        </ScreenBox>
    );
}
