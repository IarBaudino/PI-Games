/* SearchBar: un input de búsqueda para encontrar videojuegos por nombre. */
import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';


function SearchBar() {
    const dispatch = useDispatch();
    const [game, setGame] = useState("");

    const handleChange = (event) =>{
        setGame(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <div>
            <form  >
                <div>
                    <div>
                        <input className='input' name="input" id="input" type='search' placeholder='Find your favorite game' />
                    </div>
                </div>
                <button type='submit'>Go!</button>
            </form>
        </div>

    )
}

export default SearchBar;