import React, { useState, useEffect } from "react";

interface Props {
    message: string;
    duration: number;
    isError: boolean;
    /**
     * Fonction a appelé pour reset l'etat contenant le feedback à sa valeur par défaut pour pouvoir redéclencher l'apparition de plusieurs feedbacks
     * @returns
     */
    onDisappear?: () => void;
}

const Feedback = ({
    message,
    duration,
    isError = false,
    onDisappear,
}: Props) => {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(false);
            if (onDisappear) {
                onDisappear();
            }
        }, duration);

        return () => clearTimeout(timer);
    }, [duration, onDisappear]);

    if (!visible) {
        return null;
    }

    return (
        <div
            className={
                (!isError
                    ? "bg-green-100 text-green-500 "
                    : " bg-red-100 text-red-500 ") +
                " duration-1000 flex font-bold fixed left-[50%] translate-x-[-50%] w-fit z-20 px-8 py-4 rounded-xl text-center m-auto bottom-5"
            }
        >
            <div>{message}</div>
        </div>
    );
};

export default Feedback;
