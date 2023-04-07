import React from 'react'
import './styles.scss';

interface Props {
    text: string;
    background: string;
    className?: string;
}

const GlitchText = ({ text, background, className }: Props) => {
    const style = { '--background': background } as React.CSSProperties;
    return (
        <div
            className={`select-none inline-block uppercase relative p-0 glitch-text ${className}`}
            style={style}
            data-text={text.toUpperCase()}>
            {text}
        </div>
    )
}

export default GlitchText
