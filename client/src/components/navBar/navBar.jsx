import SearchBar from "../searchBar/searchBar";
import { Link } from "react-router-dom"

function NavBar({ handleChange, handleSubmit }) {


    return (
        <div>
            <div>
                <img src="" alt="" />
            </div>
            <div>
                <Link to={"/home"}>Home</Link>
                 <br/>                <Link to= {"/form"}>Create</Link>
            </div>
            <div><SearchBar /></div>
        </div>

    )
}

export default NavBar;