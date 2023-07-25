import { useNavigation } from "../stores/navigation"

export default function WelcomeScreen() {
    const { push } = useNavigation();

    return (
        <div>
            Welcome
            <button onClick={() => push("home")}>To Home</button>
        </div>
    )
}