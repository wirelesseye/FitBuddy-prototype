import { SafeArea, Screen } from "../components";
import { useNavigation } from "../stores/navigation";

export default function HomeScreen() {
    const { back } = useNavigation();
    return (
        <Screen>
            <SafeArea>
                Home
                <button onClick={() => back()}>Back</button>
            </SafeArea>
        </Screen>
    );
}
