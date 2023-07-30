import WelcomeScreen from "../screens/WelcomeScreen";
import HomeScreen from "../screens/HomeScreen";
import PetsScreen from "../screens/PetsScreen";
import UserScreen from "../screens/UserScreen";
import SignUpScreen from "../screens/SignUpScreen";
import SelectActivitiesScreen from "../screens/SelectActivitiesScreen";
import CreatePetScreen from "../screens/CreatePetScreen";
import DashboardScreen from "../screens/DashboardScreen";
import HelpScreen from "../screens/HelpScreen";
import SetGoalsScreen from "../screens/SetGoalsScreen";

export const screens = {
    welcome: WelcomeScreen,
    signup: SignUpScreen,
    createPet: CreatePetScreen,
    selectActivities: SelectActivitiesScreen,
    setGoals: SetGoalsScreen,
    home: HomeScreen,
    pets: PetsScreen,
    dashboard: DashboardScreen,
    help: HelpScreen,
    user: UserScreen,
};

export type ScreenID = keyof typeof screens;