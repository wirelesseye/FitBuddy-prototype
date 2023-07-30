import { css, cx } from "@emotion/css";
import { Button } from ".";
import { Pet } from "../stores/pets";
import { getSkinThumbnail } from "../consts/skins";

interface PetButtonProps {
    pet: Pet;
    onClick?: () => void;
}

export function PetButton({ pet, onClick }: PetButtonProps) {
    const thumbnail = getSkinThumbnail(pet.skin);
    return (
        <Button className={styles.btn} onClick={onClick}>
            <div
                className={cx(
                    css`
                        background-image: url(${thumbnail});
                    `,
                    styles.thumbnail
                )}
            ></div>{" "}
            {pet.name}
        </Button>
    );
}

const styles = {
    btn: css`
        justify-content: start;
    `,
    thumbnail: css`
        width: 80px;
        height: 80px;
        background-size: cover;
        margin-left: -15px;
        margin-top: -8px;
        margin-bottom: -20px;
        transform: translateY(-10px);
    `,
};
