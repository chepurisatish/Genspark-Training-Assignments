import "./Button.css";
interface ButtonProps {
    children: string;
    onClick: () => void;
    style?: React.CSSProperties;
}

const Button: React.FC<ButtonProps> = ({ onClick, children, style }) => {
    return (
        <button
            onClick={onClick}
            style={{
                padding: "8px 16px",
                margin: "5px",
                backgroundColor: "green",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                ...style,
            }}
        >
            {children}
        </button>
    );
};

export default Button;
