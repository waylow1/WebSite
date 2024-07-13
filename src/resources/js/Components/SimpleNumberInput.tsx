import { useState } from "react";

interface Props {
    defaultValue: number;
    className: string;
    [key: string]: any;
}

export default function SimpleNumberInput({
    defaultValue,
    className,
    ...props
}: Props) {
    const [val, setVal] = useState(defaultValue);
    const onUpdateNumber = (evt: React.ChangeEvent<HTMLInputElement>) => {
        const newPrice = Number.isNaN(parseInt(evt.target.value))
            ? val
            : parseInt(evt.target.value);
        setVal(newPrice as number);
    };
    return (
        <input
            type="number"
            className={
                "block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 " +
                className
            }
            value={val}
            onChange={onUpdateNumber}
            {...props}
        ></input>
    );
}
