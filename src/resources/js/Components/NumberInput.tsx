import { useState } from "react";

interface Props {
  value: string | number;
  onUpdate: (v: number) => void;
  className: string;
  [key: string]: any;
}

export default function NumberInput({
  value,
  onUpdate,
  className,
  ...props
}: Props) {
  const onUpdateNumber = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const newPrice = Number.isNaN(parseInt(evt.target.value))
      ? value
      : parseInt(evt.target.value);
    onUpdate(newPrice as number);
  };
  return (
    <input
      type="number"
      className={
        "block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 " +
        className
      }
      value={value}
      onChange={onUpdateNumber}
      {...props}
    ></input>
  );
}
