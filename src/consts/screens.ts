import WelcomeScreen from "../screens/WelcomeScreen";
import HomeScreen from "../screens/HomeScreen";
import PetsScreen from "../screens/PetsScreen";
import ScheduleScreen from "../screens/ScheduleScreen";
import DietScreen from "../screens/DietScreen";
import UserScreen from "../screens/UserScreen";
import SignUpScreen from "../screens/SignUpScreen";
import SelectActivitiesScreen from "../screens/SelectActivitiesScreen";
import CreatePetScreen from "../screens/CreatePetScreen";

export const screens: Record<string, () => JSX.Element> = {
    welcome: WelcomeScreen,
    signup: SignUpScreen,
    selectActivites: SelectActivitiesScreen,
    createPet: CreatePetScreen,
    home: HomeScreen,
    pets: PetsScreen,
    schedule: ScheduleScreen,
    diet: DietScreen,
    user: UserScreen,
};

export type ScreenID = keyof typeof screens;