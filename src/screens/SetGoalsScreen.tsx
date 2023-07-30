import { css } from "@emotion/css";
import {
    Button,
    FlexBox,
    Footer,
    Header,
    HeaderBack,
    HeaderTitle,
    Input,
    RadioGroup,
    RadioItem,
    SafeArea,
    ScreenBox,
    Slider,
    Text,
} from "../components";
import { useNavigation } from "../stores/navigation";
import { useState } from "react";

export default function SetGoalsScreen() {
    const { push } = useNavigation();
    const [step, setStep] = useState(5000);
    const [exp, setExp] = useState(10);

    return (
        <ScreenBox>
            <SafeArea>
                <Header>
                    <HeaderBack />
                    <HeaderTitle>Set Goals</HeaderTitle>
                </Header>
                <FlexBox
                    direction="column"
                    marginX={20}
                    marginTop={20}
                    gap={40}
                >
                    <FlexBox direction="column" gap={15}>
                        <Text size={20} weight={600}>
                            Step Goal
                        </Text>
                        <FlexBox direction="column" marginX={10} gap={15}>
                            <RadioGroup defaultValue="daily">
                                <RadioItem
                                    value="daily"
                                    id="radio-steps-daily"
                                />
                                <label htmlFor="radio-steps-daily">Daily</label>
                                <FlexBox />
                                <RadioItem
                                    value="weekly"
                                    id="radio-steps-weekly"
                                />
                                <label htmlFor="radio-steps-weekly">
                                    Weekly
                                </label>
                            </RadioGroup>
                            <Input
                                className={styles.stepInput}
                                value={step}
                                onValueChange={(value) =>
                                    setStep(parseInt(value))
                                }
                                type="number"
                            />
                            <Slider
                                value={[step]}
                                onValueChange={(v) => setStep(v[0])}
                                max={10000}
                                step={50}
                            />
                        </FlexBox>
                    </FlexBox>
                    <FlexBox direction="column" gap={15}>
                        <Text size={20} weight={600}>
                            Workout Exp Goal
                        </Text>
                        <FlexBox direction="column" marginX={10} gap={15}>
                            <RadioGroup defaultValue="daily">
                                <RadioItem
                                    value="daily"
                                    id="radio-workout-daily"
                                />
                                <label htmlFor="radio-workout-daily">
                                    Daily
                                </label>
                                <FlexBox />
                                <RadioItem
                                    value="weekly"
                                    id="radio-workout-weekly"
                                />
                                <label htmlFor="radio-workout-weekly">
                                    Weekly
                                </label>
                            </RadioGroup>
                            <Input
                                className={styles.stepInput}
                                value={exp}
                                onValueChange={(value) =>
                                    setExp(parseInt(value))
                                }
                                type="number"
                            />
                            <Slider
                                value={[exp]}
                                onValueChange={(v) => setExp(v[0])}
                                max={100}
                                step={5}
                            />
                        </FlexBox>
                    </FlexBox>
                </FlexBox>
                <Footer>
                    <Button
                        varient="primary"
                        onClick={() => push("home", "fadeIn")}
                    >
                        Done
                    </Button>
                </Footer>
            </SafeArea>
        </ScreenBox>
    );
}

const styles = {
    stepInput: css`
        text-align: center;
        font-size: 24px;
        letter-spacing: 5px;
        font-weight: 600;
        &::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
        }
    `,
};
