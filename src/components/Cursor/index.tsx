import React, { useContext } from 'react'
import useMousePosition from '../../hooks/use-mouse-position';
import { MouseContext } from '../../context/mouse-context';
import './styles.scss';

const Cursor = () => {
    const { cursorType } = useContext(MouseContext);
    const { x, y } = useMousePosition();

    return (
        <>
            <div style={{ left: `${x}px`, top: `${y}px` }} className={`cursor cursor__ring cursor__ring--${cursorType}`}></div>
            <div style={{ left: `${x}px`, top: `${y}px` }} className={`cursor cursor__dot cursor__dot--${cursorType}`}></div>
        </>
    )
}

export default Cursor
