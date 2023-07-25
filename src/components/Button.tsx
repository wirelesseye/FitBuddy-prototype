interface ButtonProps {
    onClick?: () => void;
    children?: React.ReactNode;
}

export function Button(props: ButtonProps) {
    return (
        <div onClick={props.onClick}>
            {props.children}
        </div>
    )
}