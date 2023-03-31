import React, { createContext, useState, useEffect } from "react";

export const MouseContext = createContext<{cursorType: string, cursorChangeHandler: Function}>({
    cursorType: "",
    cursorChangeHandler: () => { },
});

interface Props {
    children: string | JSX.Element | JSX.Element[];
}

const MouseContextProvider = ({ children }: Props) => {
    const [cursorType, setCursorType] = useState("");

    const cursorChangeHandler = (cursorType: string) => {
        setCursorType(cursorType);
    };

    return (
        <MouseContext.Provider
            value={{
                cursorType: cursorType,
                cursorChangeHandler: cursorChangeHandler,
            }}
        >
            {children}
        </MouseContext.Provider>
    );
};

export default MouseContextProvider;
