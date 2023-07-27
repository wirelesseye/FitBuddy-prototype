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
import { ActivityID, activities } from "../consts/activities";
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
                    {(Object.keys(activities) as ActivityID[]).map((activity) => (
                        <ActivityButton key={activity} activity={activity} />
                    ))}
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
