import React, { useContext, useEffect, useState } from 'react';
import '../styles/components/header.scss';
import { MouseContext } from '../context/mouse-context';
import ALink from './ALink';

interface Props { }

const Header = () => {
    const { cursorChangeHandler } = useContext(MouseContext);
    const [isOpened, setIsOpened] = useState<boolean>(false);

    useEffect(() => {
        if (isOpened) {
            document.body.setAttribute('aria-scrollable', 'none');
        } else {
            document.body.setAttribute('aria-scrollable', 'scroll');
        }

        return () => {
            document.body.setAttribute('aria-scrollable', 'scroll');
        }
    }, [isOpened]);

    const toggleMenu = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIsOpened(e.target.checked);
    }

    return (
        <header className="fixed top-0 left-0 right-0 z-50">
            <div className="w-full p-4 flex flex-row justify-between items-center">
                <div className="font-bold text-2xl uppercase text-white">nguyenphatit</div>
                <div className="top-9 left-8 font-bold text-2xl uppercase text-black">
                    <input onChange={(e) => toggleMenu(e)} id="hamburger" className="hidden hamburger" type="checkbox" />
                    <label
                        className="hamburger"
                        htmlFor="hamburger"
                        onMouseEnter={() => cursorChangeHandler("hovered")}
                        onMouseLeave={() => cursorChangeHandler("")}
                        onMouseDown={() => cursorChangeHandler("down")}
                        onMouseUp={() => cursorChangeHandler("up")}
                    >
                        <i></i>
                        <span>
                            <span className="close">close</span>
                            <span className="menu"></span>
                        </span>
                    </label>
                    <div className="fixed right-0 top-0 h-screen w-screen translate-x-[100vw] translate-y-0 box-border pointer-events-none pt-[125px] bg-green-dark bg-[url('../images/svg/sidebar-background.svg')] bg-center bg-no-repeat bg-cover overflow-x-hidden drawer-list">
                        <ul className="h-full w-full list-none m-0 p-0 overflow-hidden overflow-x-hidden pointer-events-none">
                            <li className="list-none uppercase pointer-events-auto whitespace-nowrap box-border translate-x-[100vw]">
                                <ALink className="text-center block p-4 text-6xl menu-link text-purple-light text-link" to="#" title="home" />
                            </li>
                            <li className="list-none uppercase pointer-events-auto whitespace-nowrap box-border translate-x-[100vw]">
                                <ALink className="text-center block p-4 text-6xl menu-link text-purple-light text-link" to="#" title="project" />
                            </li>
                            <li className="list-none uppercase pointer-events-auto whitespace-nowrap box-border translate-x-[100vw]">
                                <ALink className="text-center block p-4 text-6xl menu-link text-purple-light text-link" to="#" title="about" />
                            </li>
                            <li className="list-none uppercase pointer-events-auto whitespace-nowrap box-border translate-x-[100vw] mb-8">
                                <ALink className="text-center block p-4 text-6xl menu-link text-purple-light text-link" to="#" title="contact" />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
