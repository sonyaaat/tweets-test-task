import logo from "../../images/logo.png"
import main from "../../images/main.png"
import person from "../../images/person.png"
import css from "./Card.module.css"
const Card=()=>{
return(
    <>
    <div className={css.card}>
        <img alt="logo" src={logo} className={css.logo}/>
        <img alt="main" src={main} className={css.mainImg}/>
        <div className={css.line}></div>
        <div className={css.personBox}>
            <img alt="persopn" src={person}/>
        </div>
        <div className={css.textBox}>
            <p className={css.text}>
                777 tweets
            </p>
            <p className={css.text}>
                100,500 followers
            </p>
            <button className={css.button}>follow</button>
        </div>
    </div>
    </>
)
}
export default Card