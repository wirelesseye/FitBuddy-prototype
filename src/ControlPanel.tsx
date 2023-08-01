import { screens } from "./consts/screens";
import { useNavigation } from "./stores/navigation";

export default function ControlPanel() {
    const { screenId, push } = useNavigation();

    return (
        <div>
            <label htmlFor="screen-select">Screen:</label>
            <select
                value={screenId}
                id="screen-select"
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                onChange={(e) => push((e.target as any).value)}
            >
                {Object.keys(screens).map((screen) => (
                    <option key={screen} value={screen}>{screen}</option>
                ))}
            </select>
        </div>
    );
}
