interface NumberInputProps{
    label?: string;
    value: number;
    onValueChange: (value: number) => void;
}

export default function NumberInput({ label, value, onValueChange }: NumberInputProps) {
    return (
    <>
        <label>{ label }</label>
        <input
            type="number"
            value={value}
            onChange={(event) => {
                onValueChange(Number(event.target.value));
            }} />
    </>
    )
}
