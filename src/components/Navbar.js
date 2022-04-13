import React from "react"
import Trollface from "../images/trollface.jpg"

export default function Navbar() {
    return (
        <header className = "header">
        <img className = "header--image" src={Trollface} />
        <h2 className = "header--title ">Meme Generator </h2>
        <h4 className = "header--project"> React Course  - Project</h4>
        </header>
        
    )}

