import { create } from "zustand";
import { SkinID } from "../consts/skins";

export interface Pet {
    name: string;
    skin: SkinID;
}

interface PetsState {
    pet: Pet;
    setPet: (pet: Pet) => void;
}

export const usePetStore = create<PetsState>((set) => ({
    pet: { name: "", skin: "shiba" },
    setPet: (pet) => set({ pet }),
}));

export const usePets = (): Pet[] => {
    const firstPet = usePetStore((state) => state.pet);
    return [
        firstPet,
        {
            name: "Deno",
            skin: "dinosaur",
        },
    ];
};
