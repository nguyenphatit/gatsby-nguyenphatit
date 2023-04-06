import React, { useContext } from 'react';
import { MouseContext } from '../context/mouse-context';

interface Props { 
    className?: string;
    title: string;
    to: string;
}

const ALink = ({ title, to, className }: Props) => {
    return (
        <a className={`${className} active-cursor`} href={to}>
            {title}
        </a>
    )
}

export default ALink;
