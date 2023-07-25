import { useNavigation } from "./stores/navigation";

export default function Layout() {
    const { Screen } = useNavigation();

    return (
        <div>
            <Screen />
        </div>
    );
}
