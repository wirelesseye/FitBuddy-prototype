import {
    ScreenBox,
    SafeArea,
    Button,
    Header,
    HeaderTitle,
    FlexBox,
    Footer,
    Input,
    HeaderBack,
} from "../components";
import { useNavigation } from "../stores/navigation";

export default function SignUpScreen() {
    const { push } = useNavigation();

    return (
        <ScreenBox>
            <SafeArea>
                <Header>
                    <HeaderBack />
                    <HeaderTitle>Sign up</HeaderTitle>
                </Header>
                <FlexBox direction="column" gap={25} marginX={20} marginY={30}>
                    <FlexBox direction="column" gap={10}>
                        Email
                        <Input />
                    </FlexBox>
                    <FlexBox direction="column" gap={10}>
                        Password
                        <Input type="password" />
                    </FlexBox>
                    <FlexBox direction="column" gap={10}>
                        Confirm Password
                        <Input type="password" />
                    </FlexBox>
                </FlexBox>
                <Footer>
                    <Button
                        varient="primary"
                        onClick={() => push("selectActivites", "slideToLeft")}
                    >
                        Next
                    </Button>
                </Footer>
            </SafeArea>
        </ScreenBox>
    );
}
