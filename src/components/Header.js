import react from "react"
import Logo from "../images/logo.png"

export default function Header() {
    return (
        <header>
            <img src={Logo} className="header--img"/>
            <h5 className="header--title">my seattle journal.</h5>
        </header>
    )
}