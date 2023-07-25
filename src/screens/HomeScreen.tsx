import { useNavigation } from "../stores/navigation";

export default function HomeScreen() {
    const { back } = useNavigation();
    return (
        <div>
            Home
            <button onClick={() => back()}>Back</button>
        </div>
    );
}
