import { screens, useNavigation } from "./stores/navigation";

export default function ControlPanel() {
    const { screenId, push } = useNavigation();

    return (
        <div>
            <label htmlFor="screen-select">Screen:</label>
            <select
                value={screenId}
                id="screen-select"
                onChange={(e) => push(e.target.value)}
            >
                {Object.keys(screens).map((screen) => (
                    <option value={screen}>{screen}</option>
                ))}
            </select>
        </div>
    );
}