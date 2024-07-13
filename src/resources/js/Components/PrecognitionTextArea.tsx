interface Props {
    form: any;
    field: string;
}

export default function PrecognitionTextArea({ form, field }: Props) {
    return (
        <>
            <div className="relative z-0 w-full mb-5 group">
                <textarea
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2
    border-gray-300 appearance-none outline-none focus:ring-0 focus:border-gold_primary pr-12 peer invalid"
                    value={form.data[field]}
                    placeholder=""
                    onChange={(e) => form.setData(field, e.target.value)}
                    onBlur={() => form.validate(field)}
                ></textarea>
                <label
                    className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-2
    -z-10 origin-[0] peer-focus:start-0 peer-focus:text-gold_primary peer-placeholder-shown:scale-100
    peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-[100%]"
                    htmlFor="name"
                >
                    Message
                </label>
            </div>
            {form.invalid(field) && (
                <div className="text-red-800 my-2">{form.errors[field]}</div>
            )}
        </>
    );
}
