 import { useDispatch } from "react-redux";
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getGames, getGenres, paginatedGames } from "../../redux/actions/actions";

import Cards from "../../components/cards/cards";

import style from "../homePage/homePage.module.css"


function HomePage() {
    const dispatch = useDispatch();
    const allGames = useSelector(state => state.allVideogames);


    useEffect(() => {
        dispatch(getGames());
        dispatch(getGenres());
    }, [dispatch]);

    const paginate=(event) => {
        dispatch(paginatedGames(event.target.name))
        event.preventDefault()
    }

    return (
        <div className={style.background}>
            <div className={style.navbar}>
                <button name="prev" onClick={paginate}>Prev</button>
                <button name="next" onClick={paginate}>Next</button>
            </div>
            <div className={style.home}>
                <h2 className={style.titleone}>WELCOME!</h2>
                <div className={style.cardcontainer}>
                    <Cards allGames={allGames} />
                </div>
            </div>
        </div>
    );
}

export default HomePage;