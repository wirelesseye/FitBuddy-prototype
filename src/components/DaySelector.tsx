import { FlexBox } from ".";
import { DayButton } from "./DayButton";

const days = ["M", "Tu", "W", "Th", "F", "Sa", "Su"];

interface DaySelectorProps {
    disabled?: boolean;
}

export function DaySelector({ disabled }: DaySelectorProps) {
    return (
        <FlexBox justifyContent="space-between">
            {days.map((day) => (
                <DayButton key={day} disabled={disabled}>{day}</DayButton>
            ))}
        </FlexBox>
    );
}
