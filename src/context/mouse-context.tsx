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
        const links = document.querySelectorAll('a');
        const buttons = document.querySelectorAll('button');
        const classes = document.querySelectorAll('.active-cursor');

        links.forEach((element: any) => {
            element.addEventListener('mouseenter', onMouseEnter);
            element.addEventListener('mouseleave', onMouseLeave);
            element.addEventListener('mousedown', onMouseDown);
            element.addEventListener('mouseup', onMouseUp)
        });

        buttons.forEach((element: any) => {
            element.addEventListener('mouseenter', onMouseEnter);
            element.addEventListener('mouseleave', onMouseLeave);
            element.addEventListener('mousedown', onMouseDown);
            element.addEventListener('mouseup', onMouseUp)
        });

        classes.forEach((element: any) => {
            element.addEventListener('mouseenter', onMouseEnter);
            element.addEventListener('mouseleave', onMouseLeave);
            element.addEventListener('mousedown', onMouseDown);
            element.addEventListener('mouseup', onMouseUp)
        });

        return (() => {
            links.forEach((element: any) => {
                element.removeEventListener('mouseenter', onMouseEnter);
                element.removeEventListener('mouseleave', onMouseLeave);
                element.removeEventListener('mousedown', onMouseDown);
                element.removeEventListener('mouseup', onMouseUp)
            });

            buttons.forEach((element: any) => {
                element.removeEventListener('mouseenter', onMouseEnter);
                element.removeEventListener('mouseleave', onMouseLeave);
                element.removeEventListener('mousedown', onMouseDown);
                element.removeEventListener('mouseup', onMouseUp)
            });

            classes.forEach((element: any) => {
                element.removeEventListener('mouseenter', onMouseEnter);
                element.removeEventListener('mouseleave', onMouseLeave);
                element.removeEventListener('mousedown', onMouseDown);
                element.removeEventListener('mouseup', onMouseUp)
            });
    
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
