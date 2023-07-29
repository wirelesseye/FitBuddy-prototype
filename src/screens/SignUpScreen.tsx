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
                <FlexBox direction="column" gap={20} marginX={20} marginTop={50}>
                    <FlexBox direction="column" gap={8}>
                        Email
                        <Input />
                    </FlexBox>
                    <FlexBox direction="column" gap={8}>
                        Password
                        <Input type="password" />
                    </FlexBox>
                    <FlexBox direction="column" gap={8}>
                        Confirm Password
                        <Input type="password" />
                    </FlexBox>
                </FlexBox>
                <Footer>
                    <Button
                        varient="primary"
                        onClick={() => push("createPet", "slideToLeft")}
                    >
                        Next
                    </Button>
                </Footer>
            </SafeArea>
        </ScreenBox>
    );
}
