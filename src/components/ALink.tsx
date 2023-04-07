import React, { useContext } from 'react';
import { MouseContext } from '../context/mouse-context';

interface Props { 
    className?: string;
    title: string;
    to: string;
}

const ALink = ({ title, to, className }: Props) => {
    const { cursorChangeHandler } = useContext(MouseContext);

    return (
        <a
            className={className}
            href={to}
            onMouseEnter={() => cursorChangeHandler("hovered")}
            onMouseLeave={() => cursorChangeHandler("")}
            onMouseDown={() => cursorChangeHandler("down")}
            onMouseUp={() => cursorChangeHandler("up")}
        >
            {title}
        </a>
    )
}

export default ALink;
