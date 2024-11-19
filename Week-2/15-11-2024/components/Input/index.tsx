import "./Input.css";
interface InputProps {
    placeholder: string;
    value: string | number;
    type: React.HTMLInputTypeAttribute;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ placeholder, value, type, onChange }) => {
    return (
        <input
            placeholder={placeholder}
            value={value}
            type={type}
            onChange={onChange}
            style={{
                margin: "5px",
                padding: "8px",
                borderRadius: "5px",
                border: "1px solid #ccc",
                flex: 1,
                minWidth: "200px",
            }}
        />
    );
};

export default Input;
