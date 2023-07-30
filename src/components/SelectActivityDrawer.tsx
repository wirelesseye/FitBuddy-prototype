import { Drawer, DrawerProps, FlexBox } from ".";
import { ActivityID, activities } from "../consts/activities";
import { ActivityButton } from "./ActivityButton";

export default function SelectActivityDrawer(props: DrawerProps) {
    return (
        <Drawer title="Select an activity" {...props}>
            <FlexBox
                direction="column"
                marginX={20}
                gap={15}
                marginTop={15}
                paddingBottom={35}
            >
                {(Object.keys(activities) as ActivityID[]).map((activity) => (
                    <ActivityButton
                        key={activity}
                        activity={activity}
                        selectable={false}
                        onClick={() => props.setIsOpen!(false)}
                    />
                ))}
            </FlexBox>
        </Drawer>
    );
}
