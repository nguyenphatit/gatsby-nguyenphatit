import React from 'react'
import './styles.scss';

interface Props {
    text: string;
    background: string;
}

const GlitchText = ({ text, background }: Props) => {
    const style = { '--background': background } as React.CSSProperties;
    return (
        <div
            className="select-none inline-block uppercase relative p-0 glitch-text"
            style={style}
            data-text={text.toUpperCase()}>
            {text}
        </div>
    )
}

export default GlitchText
