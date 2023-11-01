import SearchBar from "../searchBar/searchBar";
import { Link } from "react-router-dom"
import style from "./navBar.module.css"

function NavBar({ handleChange, handleSubmit }) {
    return (
      <div className={style.navbar}>
        <div className={style.logoContainer}>
          <Link to={"/"}><img  src="https://img.freepik.com/premium-vector/elegant-game-controller-design-sketch-style-esports-mascot-gaming-logo-illustration_196854-609.jpg?w=2000" alt="" />
          <br/>
          START
          </Link>
        </div>
        <div className={style.links}>
          <Link to={"/home"}>Home</Link>
          <br />
          <Link to={"/create"}>Create a game</Link>
          <br />
        </div>
        <div><SearchBar /></div>
      </div>
    );
  }
  
  export default NavBar;