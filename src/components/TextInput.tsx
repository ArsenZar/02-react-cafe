interface TextInputProps{
    label: string;
    value: string;
    setInput: (value: string) => void;
}

export default function TextInput({ label, value, setInput }: TextInputProps) { 
    return (
        <>
            <label>{label}</label>
            <input
                type="text"
                value={value}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setInput(e.target.value);
                 } }
            />
        </>
    );
}