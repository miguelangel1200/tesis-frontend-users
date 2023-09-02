import React from "react"
import Hero from "./Components/Hero"
import Companies from "./Components/Companies"
import Guide from "./Components/Guide"
import Properties from "./Components/Properties"
import Details from "./Components/Details"
import GetStarted from "./Components/GetStarted"
import Footer from "./Components/Footer"

export function App() {
    return(
        <>
            <Hero />
            <Companies />
            <Guide />
            <Properties />
            <Details />
            <GetStarted />
            <Footer />
        </>
    )
}