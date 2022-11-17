import React from "react"
import { CSSReset } from "../src/Styles/CSSReset"

function MyApp({ Component, pageProps }) {
    return (
        <>
            <CSSReset />
            <Component {...pageProps} />
        </>
    )   
}   

export default function _App(props) {
    return (
        <>
            <MyApp {...props}/>
        </>
    )
}