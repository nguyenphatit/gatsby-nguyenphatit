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
    
    useEffect(() => {
        const activeCursor = document.querySelectorAll('.active-cursor');

        for (let i = 0; i < activeCursor.length; i++) {
            activeCursor[i].addEventListener('mouseenter', onMouseEnter);
            activeCursor[i].addEventListener('mouseleave', onMouseLeave);
            activeCursor[i].addEventListener('mousedown', onMouseDown);
            activeCursor[i].addEventListener('mouseup', onMouseUp)
        }

        return (() => {
            for (let i = 0; i < activeCursor.length; i++) {
                activeCursor[i].removeEventListener('mouseenter', onMouseEnter);
                activeCursor[i].removeEventListener('mouseleave', onMouseLeave);
                activeCursor[i].removeEventListener('mousedown', onMouseDown);
                activeCursor[i].removeEventListener('mouseup', onMouseUp)
            }
        })
    });

    const onMouseEnter = () => cursorChangeHandler('hovered');
    const onMouseLeave = () => cursorChangeHandler('');
    const onMouseDown = () => cursorChangeHandler('down');
    const onMouseUp = () => cursorChangeHandler('up');

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
