import { css } from "@emotion/css";
import {
    Button,
    FlexBox,
    Header,
    HeaderButton,
    Navigation,
    PetPreview,
    Popover,
    PopoverContent,
    PopoverTrigger,
    Progress,
    ScreenBox,
    Text,
} from "../components";
import { usePets } from "../stores/pets";
import { LuBell, LuBellDot, LuClipboardList } from "react-icons/lu";
import { useState } from "react";
import { useNavigation } from "../stores/navigation";

export default function HomeScreen() {
    const pets = usePets();

    return (
        <ScreenBox className={styles.screen}>
            <PetPreview
                skinID={pets[0].skin}
                distance={300}
                className={styles.petPreview}
            />
            <Header className={styles.header}>
                <FlexBox direction="column" gap={10} className={styles.info}>
                    <FlexBox gap={8}>
                        <Text size={14}>Lv.8</Text>
                        <Text size={14} weight={500}>
                            {pets[0].name}
                        </Text>
                    </FlexBox>
                    <FlexBox alignItems="center" gap={10}>
                        <Progress className={styles.progress} value={1 / 3} />
                    </FlexBox>
                </FlexBox>
                <FlexBox direction="column" gap={10}>
                    <Tasks />
                    <Notifications />
                </FlexBox>
            </Header>
            <Navigation />
        </ScreenBox>
    );
}

function Tasks() {
    const { push } = useNavigation();

    return (
        <Popover>
            <PopoverTrigger asChild>
                <HeaderButton border>
                    <LuClipboardList size={20} />
                </HeaderButton>
            </PopoverTrigger>
            <PopoverContent align="end">
                <FlexBox direction="column">
                    <Text weight={500}>Tasks</Text>
                    <FlexBox direction="column" gap={10} marginTop={10}>
                        <Button
                            className={styles.taskItem}
                            onClick={() => {
                                push("workoutInProgress", "fadeIn");
                            }}
                        >
                            <span>Bicep curl</span>
                            <span>4×5</span>
                        </Button>
                        <Button
                            className={styles.taskItem}
                            onClick={() => {
                                push("schedules", "fadeIn");
                            }}
                        >
                            Go to Schedules
                        </Button>
                    </FlexBox>
                </FlexBox>
            </PopoverContent>
        </Popover>
    );
}

const defaultNotifications = [
    { id: 1, content: "You have just completed your daily goal!" },
];

function Notifications() {
    const [notifications, setNotifications] = useState(defaultNotifications);

    return (
        <Popover>
            <PopoverTrigger asChild>
                <HeaderButton border>
                    {notifications.length > 0 ? (
                        <LuBellDot size={20} />
                    ) : (
                        <LuBell size={20} />
                    )}
                </HeaderButton>
            </PopoverTrigger>
            <PopoverContent align="end">
                <FlexBox direction="column" gap={10}>
                    <Text weight={500}>Notifications</Text>
                    {notifications.length > 0 ? (
                        <ul className={styles.notiList}>
                            {notifications.map((noti) => (
                                <li
                                    key={noti.id}
                                    className={styles.notiListItem}
                                >
                                    <Text size={14}>{noti.content}</Text>
                                    <Button
                                        className={styles.actionBtn}
                                        onClick={() => setNotifications([])}
                                    >
                                        Clear
                                    </Button>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <Text size={14}>No notifications.</Text>
                    )}
                </FlexBox>
            </PopoverContent>
        </Popover>
    );
}

const styles = {
    screen: css`
        /* background-color: red; */
    `,
    header: css`
        position: absolute;
        top: 47px;
        justify-content: space-between;
        align-items: start;
    `,
    petPreview: css`
        flex-grow: 1;
    `,
    info: css`
        width: 120px;
        background-color: rgba(255, 255, 255, 0.9);
        backdrop-filter: blur(5px);
        border-radius: 8px;
        padding: 10px;
        box-shadow: 0 3px rgba(0, 0, 0, 0.1);
    `,
    progress: css`
        height: 10px;
        flex-grow: 1;
    `,
    notiList: css`
        margin: 0;
        padding: 0;
    `,
    notiListItem: css`
        display: flex;
        align-items: center;
        ::before {
            content: "・";
        }
    `,
    actionBtn: css`
        font-size: 12px;
        padding: 5px 8px;
        margin-left: 10px;
    `,
    taskItem: css`
        font-size: 15px;
        padding: 5px 8px;
        gap: 12px;
    `,
};
