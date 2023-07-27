import { GiWalkingBoot, GiWeightLiftingUp } from "react-icons/gi";
import { TbSwimming } from "react-icons/tb";
import { BiCycling, BiRun } from "react-icons/bi";
import { MdGolfCourse, MdSportsTennis } from "react-icons/md";
import { GrYoga } from "react-icons/gr";

const activities = {
    walking: "Walking",
    swimming: "Swimming",
    cycling: "Cycling",
    running: "Running",
    weightTraining: "Weight Training",
    tennis: "Tennis",
    golf: "Golf",
    yoga: "Yoga",
};

export type ActivityID = keyof typeof activities;

const activityIcons: Record<ActivityID, () => JSX.Element> = {
    walking: GiWalkingBoot,
    swimming: TbSwimming,
    cycling: BiCycling,
    running: BiRun,
    weightTraining: GiWeightLiftingUp,
    tennis: MdSportsTennis,
    golf: MdGolfCourse,
    yoga: GrYoga,
};

export { activities, activityIcons };
