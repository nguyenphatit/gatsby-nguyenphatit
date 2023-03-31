import "@fontsource/anton"
import "@fontsource/roboto"
import "@fontsource/material-icons"

import './src/styles/tailwind.css'
import './src/styles/global.scss'

import React from "react"
import { GatsbyBrowser } from "gatsby"
import MouseContextProvider from './src/context/mouse-context';

export const wrapRootElement: GatsbyBrowser["wrapPageElement"] = ({ element }) => (
    <MouseContextProvider>{element}</MouseContextProvider>
)
