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
import GoalsScreen from "../screens/GoalsScreen";
import StartWorkoutScreen from "../screens/StartWorkoutScreen";
import WorkoutInProgressScreen from "../screens/WorkoutInProgressScreen";
import CustomWorkoutScreen from "../screens/CustomWorkoutScreen";
import WorkoutCompleteScreen from "../screens/WorkoutCompleteScreen";
import DietScreen from "../screens/DietScreen";
import SleepInProgressScreen from "../screens/SleepInProgressScreen";
import SleepCompleteScreen from "../screens/SleepCompleteScreen";
import AddScheduleScreen from "../screens/AddScheduleScreen";
import SchedulesScreen from "../screens/SchedulesScreen";
import WorkoutHelpScreen from "../screens/WorkoutHelpScreen";
import RecordDietScreen from "../screens/RecordDietScreen";
import PetScreen from "../screens/PetScreen";
import GuideScreen from "../screens/GuideScreen";

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
    goals: GoalsScreen,
    startWorkout: StartWorkoutScreen,
    workoutInProgress: WorkoutInProgressScreen,
    customWorkout: CustomWorkoutScreen,
    workoutComplete: WorkoutCompleteScreen,
    diet: DietScreen,
    sleepInProgress: SleepInProgressScreen,
    sleepComplete: SleepCompleteScreen,
    addSchedule: AddScheduleScreen,
    schedules: SchedulesScreen,
    workoutHelp: WorkoutHelpScreen,
    recordDiet: RecordDietScreen,
    pet: PetScreen,
    guide: GuideScreen,
};

export type ScreenID = keyof typeof screens;
