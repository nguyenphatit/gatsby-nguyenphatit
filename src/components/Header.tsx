import { Link } from 'gatsby';
import React, { useEffect, useState } from 'react';

interface Props { }

const Header = () => {   
    return (
        <div className="relative">
            <input id="hamburger" className="hidden hamburger" type="checkbox" />
            <label className="hamburger" htmlFor="hamburger">
                <i></i>
                <span>
                    <span className="close">close</span>
                    <span className="menu"></span>
                </span>
            </label>
            <div className="fixed right-0 top-0 h-screen w-screen translate-x-[100vw] translate-y-0 box-border pointer-events-none pt-[125px] bg-green-dark bg-[url('../images/svg/sidebar-background.svg')] bg-center bg-no-repeat bg-cover overflow-x-hidden drawer-list">
                <ul className="h-full w-full list-none m-0 p-0 overflow-auto overflow-x-hidden pointer-events-none">
                    <li className="list-none uppercase pointer-events-auto whitespace-nowrap box-border translate-x-[100vw]">
                        <a className="text-center block p-4 text-6xl hover:cursor-pointer menu-link font-bold text-purple-light text-link" href="#">home</a>
                    </li>
                    <li className="list-none uppercase pointer-events-auto whitespace-nowrap box-border translate-x-[100vw]">
                        <a className="text-center block p-4 text-6xl hover:cursor-pointer menu-link font-bold text-purple-light text-link" href="#">project</a>
                    </li>
                    <li className="list-none uppercase pointer-events-auto whitespace-nowrap box-border translate-x-[100vw]">
                        <a className="text-center block p-4 text-6xl hover:cursor-pointer menu-link font-bold text-purple-light text-link" href="#">about</a>
                    </li>
                    <li className="list-none uppercase pointer-events-auto whitespace-nowrap box-border translate-x-[100vw] mb-8">
                        <a className="text-center block p-4 text-6xl hover:cursor-pointer menu-link font-bold text-purple-light text-link" href="#">contact</a>
                    </li>
                </ul>
                <div className="absolute -rotate-90 bottom-1/3 -right-[200px] uppercase text-[16rem] text-stroke">Menu</div>
            </div>
        </div>
    )
}

export default Header
