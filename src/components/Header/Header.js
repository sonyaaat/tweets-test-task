import {  NavLink } from "react-router-dom"
import css from "./Header.module.css"
const Header=()=>{
return(
    <nav className={css.navigation}>
        <NavLink to="/home"  className={({ isActive }) =>
                      isActive ? `${css.linkActive}` : `${css.link}`
                    }>Home</NavLink>
        <NavLink to="/main"  className={({ isActive }) =>
                      isActive ? `${css.linkActive}` : `${css.link}`}>Main</NavLink>
    </nav>
)
}
export default Header