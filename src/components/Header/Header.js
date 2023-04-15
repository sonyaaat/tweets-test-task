import {  NavLink } from "react-router-dom"
import css from "./Header.module.css"
const Header=()=>{
return(
    <nav className={css.navigation}>
        <NavLink to="/main"  className={({ isActive }) =>
                      isActive ? `${css.linkActive}` : `${css.link}`
                    }>Main</NavLink>
        <NavLink to="/tweets"  className={({ isActive }) =>
                      isActive ? `${css.linkActive}` : `${css.link}`}>Tweets</NavLink>
    </nav>
)
}
export default Header