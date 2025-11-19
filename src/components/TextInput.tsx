interface TextInputProps{
    label: string;
    value: string;
    onValueChange: (value: string) => void;
}

export default function TextInput({ label, value, onValueChange }: TextInputProps) { 
    return (
        <>
            <label>{label}</label>
            <input
                type="text"
                value={value}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    onValueChange(e.target.value);
                 } }
            />
        </>
    );
}