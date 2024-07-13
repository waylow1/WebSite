import React, {
    ReactNode,
    useState,
    createContext,
    useContext,
    FC,
} from "react";

interface DropDownContextProps {
    open: boolean;
    setOpen: (open: boolean) => void;
    toggleOpen: () => void;
}

const DropDownContext = createContext<DropDownContextProps>({
    open: true,
    setOpen: () => {},
    toggleOpen: () => {},
});

interface TriggerProps {
    children: ReactNode;
    additionnalActionOnClose?: () => void;
}

interface ContentProps {
    align?: string;
    width?: string;
    contentClasses?: string;
    children: ReactNode;
}

interface DropdownProps {
    children: ReactNode;
}

const Dropdown: FC<DropdownProps> & {
    Trigger: FC<TriggerProps>;
    Content: FC<ContentProps>;
} = ({ children }) => {
    const [open, setOpen] = useState(false);

    const toggleOpen = () => {
        setOpen((previousState) => !previousState);
    };

    return (
        <DropDownContext.Provider value={{ open, setOpen, toggleOpen }}>
            <div className="relative">{children}</div>
        </DropDownContext.Provider>
    );
};

const Trigger: FC<TriggerProps> = ({
    children,
    additionnalActionOnClose = () => {},
}) => {
    const { open, setOpen, toggleOpen } = useContext(DropDownContext);

    return (
        <>
            <div onClick={toggleOpen}>{children}</div>
            {open && (
                <div
                    className="fixed inset-0 z-40"
                    onClick={() => {
                        additionnalActionOnClose();
                        setOpen(false);
                    }}
                ></div>
            )}
        </>
    );
};

const Content: FC<ContentProps> = ({
    align = "right",
    width = "48",
    contentClasses = "dark:bg-gray-700",
    children,
}) => {
    const { open, setOpen } = useContext(DropDownContext);

    let alignmentClasses = "origin-top";

    if (align === "left") {
        alignmentClasses = "ltr:origin-top-left rtl:origin-top-right start-0";
    } else if (align === "right") {
        alignmentClasses = "ltr:origin-top-right rtl:origin-top-left end-0";
    }

    let widthClasses = "";

    if (width === "48") {
        widthClasses = "w-48";
    }

    return (
        <>
            {open && (
                <div
                    className={`absolute z-50 mt-2 rounded-md shadow-lg ${alignmentClasses} ${widthClasses}`}
                    onClick={() => setOpen(false)}
                >
                    <div
                        className={`rounded-md ring-1 ring-black ring-opacity-5 ${contentClasses}`}
                    >
                        {children}
                    </div>
                </div>
            )}
        </>
    );
};

Dropdown.Trigger = Trigger;
Dropdown.Content = Content;

export default Dropdown;
