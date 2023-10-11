import SearchBar from "../searchBar/searchBar";
import { Link } from "react-router-dom"
import style from "./navBar.module.css"

function NavBar({ handleChange, handleSubmit }) {


    return (
        <div className={style.navbar}>
            <div>
                <img src="" alt="" />
            </div>
            <div>
                <Link to={"/home"}>Home</Link>
                <br />
                <Link to={"/form"}>Create a game</Link>
                <br />
            </div>
            <div><SearchBar /></div>
        </div>

    )
}

export default NavBar;