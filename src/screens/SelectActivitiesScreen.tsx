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
                    <Button>Walking</Button>
                    <Button>Swimming</Button>
                    <Button>Cycling</Button>
                    <Button>Running</Button>
                    <Button>Weight Training</Button>
                    <Button>Tennis</Button>
                    <Button>Golf</Button>
                    <Button>Yoga</Button>
                </FlexBox>
                <Footer>
                    <Button
                        varient="primary"
                        onClick={() => push("home")}
                    >
                        Next
                    </Button>
                </Footer>
            </SafeArea>
        </ScreenBox>
    );
}
