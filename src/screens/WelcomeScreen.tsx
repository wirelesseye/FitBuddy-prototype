import { SafeArea, Screen } from "../components";
import { useNavigation } from "../stores/navigation";

export default function WelcomeScreen() {
    const { push } = useNavigation();

    return (
        <Screen>
            <SafeArea>
                <button onClick={() => push("home")}>To Home</button>
            </SafeArea>
        </Screen>
    );
}
