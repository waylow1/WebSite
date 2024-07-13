import React, { FC, ReactNode } from "react";
import { createContext, useContext, useState } from "react";

interface ExtendsContextProps {
    isOpen: boolean;
    setIsOpen: (open: boolean) => void;
    toggleOpen: () => void;
}

const ExtendsContext = createContext<ExtendsContextProps>({
    isOpen: true,
    setIsOpen: () => {},
    toggleOpen: () => {},
});

interface TriggerProps {
    children: ReactNode;
}

interface ContentProps {
    align?: string;
    width?: string;
    contentClasses?: string;
    children: ReactNode;
}

interface ExtendsProps {
    extraClasses: string;
    children: ReactNode;
}

const Extends: FC<ExtendsProps> & {
    Trigger: FC<TriggerProps>;
    Content: FC<ContentProps>;
} = ({ extraClasses, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen((previousState) => !previousState);
    };

    return (
        <ExtendsContext.Provider value={{ isOpen, setIsOpen, toggleOpen }}>
            <div
                onClick={toggleOpen}
                className={
                    extraClasses +
                    " transition-all duration-500 overflow-hidden faq border-t py-4"
                }
            >
                {children}
            </div>
        </ExtendsContext.Provider>
    );
};

const Trigger: FC<TriggerProps> = ({ children }) => {
    const { isOpen } = useContext(ExtendsContext);

    return (
        <div className="flex justify-between cursor-pointer py-4">
            {children}
            <svg
                className={
                    " transition-all duration-500 " +
                    (isOpen ? "" : "rotate-[-90deg]")
                }
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <rect x="0" fill="none" width="24" height="24" />
                <g>
                    <path
                        fill="white"
                        d="M20 9l-8 8-8-8 1.414-1.414L12 14.172l6.586-6.586"
                    />
                </g>
            </svg>
        </div>
    );
};
const Content: FC<ContentProps> = ({ children }) => {
    const { isOpen, setIsOpen, toggleOpen } = useContext(ExtendsContext);

    return <>{isOpen && children}</>;
};

Extends.Trigger = Trigger;
Extends.Content = Content;

export default Extends;
