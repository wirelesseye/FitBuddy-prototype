import { css, cx } from "@emotion/css";
import { LuCalendarCheck, LuDog, LuHome, LuUser, LuUtensils } from "react-icons/lu";
import NavBg from "../assets/NavBg.svg";
import Play from "../assets/Play.svg";
import Play2 from "../assets/Play2.svg";
import { ScreenID, useNavigation } from "../stores/navigation";
import colors from "../consts/colors";

export function Navigation() {
    return (
        <div className={styles.navigation}>
            <img className={styles.bg} src={NavBg} draggable={false} />
            <div className={styles.playBtn}></div>
            <div className={styles.btnContainer}>
                <NavButton screen="home">
                    <LuHome />
                </NavButton>
                <NavButton screen="pets">
                    <LuDog />
                </NavButton>
                <NavButton screen="schedule">
                    <LuCalendarCheck />
                </NavButton>
                <NavButton screen="diet">
                    <LuUtensils />
                </NavButton>
                <NavButton screen="user">
                    <LuUser />
                </NavButton>
            </div>
            <div className={styles.padding}></div>
        </div>
    );
}

interface NavButtonProps {
    children: React.ReactNode;
    screen: ScreenID;
}

function NavButton(props: NavButtonProps) {
    const { push, screenId } = useNavigation();

    return (
        <div
            className={cx(styles.navBtn, {
                [styles.select]: screenId === props.screen,
            })}
            onClick={() => push(props.screen)}
        >
            {props.children}
        </div>
    );
}

const styles = {
    navigation: css`
        position: relative;
    `,
    padding: css`
        width: 100%;
        height: 34px;
        background-color: #ffffff;
    `,
    bg: css`
        width: 100%;
        transform: translateY(5px);
    `,
    playBtn: css`
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: 8px;
        left: 50%;
        transform: translateX(-50%);
        width: 80px;
        height: 38px;
        font-size: 24px;
        background-image: url(${Play});
        background-position: center;
        :active {
            background-image: url(${Play2});
        }
    `,
    btnContainer: css`
        display: flex;
        align-items: center;
        justify-content: space-between;
        position: absolute;
        left: 15px;
        right: 15px;
        height: 50px;
        top: 50px;
    `,
    navBtn: css`
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 8px;
        font-size: 30px;
        color: ${colors.primary};
        border-radius: 100%;
    `,
    select: css`
        background-color: ${colors.primary};
        color: #FFF;
        box-shadow: 0 3px rgba(2, 134, 0, 0.2);
    `,
};
