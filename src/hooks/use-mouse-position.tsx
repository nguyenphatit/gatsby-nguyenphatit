import { useEffect, useState } from 'react'

const useMousePosition = () => {
    const [mousePosition, setMousePosition] = useState<{ x: number, y: number }>({ x: 0, y: 0 });

    useEffect(() => {
        const mouseMoveHandler = (event: MouseEvent) => {
            const { clientX, clientY } = event;
            setMousePosition({ x: clientX, y: clientY });
        }

        document.addEventListener('mousemove', mouseMoveHandler);

        return (() => {
            document.removeEventListener('mousemove', mouseMoveHandler);
        })
    }, []);

    return mousePosition;
}

export default useMousePosition
