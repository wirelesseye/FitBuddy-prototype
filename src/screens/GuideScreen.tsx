import { useState } from "react";
import guide1 from "../assets/guide1.png";
import guide2 from "../assets/guide2.png";
import guide3 from "../assets/guide3.png";
import guide4 from "../assets/guide4.png";
import guide5 from "../assets/guide5.png";
import guide6 from "../assets/guide6.png";
import { css, cx } from "@emotion/css";
import { useNavigation } from "../stores/navigation";

export default function GuideScreen() {
    const { push } = useNavigation();
    const [currPic, setCurrPic] = useState(guide1);

    const next = () => {
        if (currPic === guide1) {
            setCurrPic(guide2);
        } else if (currPic === guide2) {
            setCurrPic(guide3);
        } else if (currPic === guide3) {
            setCurrPic(guide4);
        } else if (currPic === guide4) {
            setCurrPic(guide5);
        } else if (currPic === guide5) {
            setCurrPic(guide6);
        } else {
            push("home", "fadeIn");
        }
    };

    return (
        <div
            onClick={next}
            className={cx(
                styles.pic,
                css`
                    background-image: url(${currPic});
                `
            )}
        ></div>
    );
}

const styles = {
    pic: css`
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-size: cover;
    `,
};
