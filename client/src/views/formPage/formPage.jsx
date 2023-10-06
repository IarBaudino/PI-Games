import React, { useState } from "react";


function FormPage() {


    const [state, setState] = useState({ //capto la info con un estado local
        //estado inicial, que es un objeto que son las propiedades que tiene mi objeto
        name: "",
        image: "",
        description: "",
        platforms: [],
        released_date: "",
        rating: "",
        genres: []

    })

    const handleChange = (event) => { //se encarga de captar la info del form y enviarla al setState para modificar el state. Se ejecuta en cada input 
        if (event.target.name === "genres") {
            setState({
                ...state,
                genres: [...state.genres, document.getElementById("genres").value]
            })
            document.getElementById("genres").value = ""
        } else {
            setState({
                ...state,
                [event.target.name]: event.target.value //lo que va en mi input se guarda en la propiedad name del value
            })
        }



        //target(input) es un objeto que tiene una propiedad value, value es lo que yo ingreso en el imput
    }

    const genres = ["action", "indie", "terror", "adventure"];

    const handleSubmit =(event)=>{
        event.preventDefault();
        console.log(state)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                {console.log(state)}

                <label>Name: </label>
                <input name="name" onChange={handleChange} type="text" /> {/* cuando escribo en el input modifico la propiedad nombre de mi estado local por medio del handleChange(el que se encarga del cambio) */}

                <br />

                <label>Image:</label>
                <input name="image" onChange={handleChange} type="text" />{/* el atributo name */}

                <br />

                <label>Description:</label>
                <input name="description" onChange={handleChange} type="text" />

                <br />

                <label>Platforms:</label>
                <input name="platforms" onChange={handleChange} type="text" />

                <br />

                <label>Realease Date:</label>
                <input name="released_date" onChange={handleChange} type="text" />

                <br />

                <label>Rating:</label>
                <input name="rating" onChange={handleChange} type="text" />

                <br />

                <label>Genre:</label>
                <select name="genres" id="genres">
                    {genres.map(g => <option key={g} value={g}>{g}</option>)}
                </select>
                <button name="genres" onClick={handleChange} type="button">add genre</button>

                <br />

                <input type="submit" />

            </form>
        </div>

    )
}

export default FormPage;