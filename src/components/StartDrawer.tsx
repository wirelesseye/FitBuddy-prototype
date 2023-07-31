import { LuBed, LuDumbbell, LuUtensils } from "react-icons/lu";
import { Button, Drawer, DrawerProps, FlexBox } from ".";
import { css } from "@emotion/css";
import { useNavigation } from "../stores/navigation";

export function StartDrawer(props: DrawerProps) {
    const {push} = useNavigation();

    return (
        <Drawer {...props}>
            <FlexBox marginX={20} direction="column" marginTop={15} paddingBottom={35} gap={15}>
                <Button onClick={() => push("startWorkout", "fadeIn")}><LuDumbbell className={styles.icon} />Start Workout</Button>
                <Button onClick={() => push("sleepInProgress", "fadeIn")}><LuBed className={styles.icon} />Start Sleep</Button>
                <Button onClick={() => push("recordDiet", "fadeIn")}><LuUtensils className={styles.icon} />Record Diet</Button>
            </FlexBox>
        </Drawer>
    );
}

const styles = {
    icon: css`
        margin-right: 10px;
    `
}