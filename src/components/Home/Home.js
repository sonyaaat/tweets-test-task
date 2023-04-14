import main from '../../images/welcome.jpg';
import css from "./Home.module.css"
const Home=()=>{
return(
    <div className={css.wrapper}>
        <h1 className={css.header}>Welcome to my app!</h1>
        <img alt='main' src={main} className={css.img}/>
    </div>
)
}
export default Home