import { ReactNode } from "react";

interface Props {
    form: any;
    label: string;
    field: string;
    type: string;
    padding: boolean;
    children: ReactNode;
}

export default function PrecognitionInput({
    form,
    label,
    field,
    type,
    padding,
    children,
    ...props
}: Props) {
    return (
        <div {...props}>
            <div className="relative z-0 w-full mb-6 group">
                <input
                    className={
                        "block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none outline-none focus:ring-0 focus:border-gold_primary  peer invalid " +
                        (padding ? " pr-12" : "")
                    }
                    id={field}
                    value={form.data[field]}
                    placeholder=""
                    type={type}
                    onChange={(e) => form.setData(field, e.target.value)}
                    onBlur={() => form.validate(field)}
                />
                <label
                    className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-2
    -z-10 origin-[0] peer-focus:start-0 peer-focus:text-gold_primary peer-placeholder-shown:scale-100
    peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-[100%]"
                    htmlFor="name"
                >
                    {label}
                </label>
                <div className="absolute h-6 w-6 top-2.5 right-2.5 peer-focus:text-gold_primary">
                    {children}
                </div>
            </div>
            {form.invalid(field) && (
                <div className="text-red-800 mb-6">{form.errors[field]}</div>
            )}
        </div>
    );
}
