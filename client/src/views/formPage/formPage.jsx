import React, { useState } from "react";


function FormPage() {

    //DECLARO ESTADOS LOCALES

    const [state, setState] = useState({ //capto la info del imput con un estado local
        name: "",
        image: "",
        description: "",
        platforms: [],
        released_date: "",
        rating: 0,
        genres: []

    })

    const [errors, setErrors] = useState({ //este estado almacena errores/ son todos string
        name: "this can´t be empty!",
        image: "",
        description: "",
        platforms: "",
        released_date: "",
        rating: "",
        /* genres: "" */
    })

    const validate = (state, name) => {
        switch (name) {
            case "name":
                if (state.name === "") {
                    setErrors({ ...errors, name: "this can´t be empty!" })
                } else if (state.name.length > 30) {
                    setErrors({ ...errors, name: "Too long! les thna 30 characters" })
                } else {
                    setErrors({ ...errors, name: "" })
                }
            case "image":

            case "description":

            case "platforms":

            case "released_date":

            case "rating":

            case "genres":


                break;

            default:
                break;
        }
    }


    const disableFunction = () => {
        let disableAux = true;
        for (let error in errors) {
            if (errors[error] === "") disableAux = false
            else {
                disableAux = true;
                break;
            }
        }
        return disableAux
    }


    //MANEJADORES DE ESTADO

    const handleChange = (event) => { // toma los cambios de los imput y actualiza el estado
        if (event.target.name === "genres") {
            setState({
                ...state,
                genres: [...state.genres, event.target.value]
            })
        } else {
            setState({
                ...state,
                [event.target.name]: event.target.value
            })
        }
        validate({
            ...state,
            [event.target.name]: event.target.value
        }, event.target.name)
    }

    const genres = ["action", "indie", "terror", "adventure"];

    const handleSubmit = (event) => { //maneja las acciones a realizar cuando se envia el form
        event.preventDefault();
        console.log(state)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                {console.log(state)}

                <label>Name: </label>
                <input name="name" onChange={handleChange} type="text" />
                <div><p>{errors.name}</p></div>

                <br />

                <label>Image:</label>
                <input name="image" onChange={handleChange} type="text" />

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
                <select onChange={handleChange} name="genres" >
                    {genres.map(genre => <option key={genre} value={genre}>{genre}</option>)}
                </select>
                <button name="genres" onClick={handleChange} type="button">Add genre</button>

                <br />

                <input disabled={disableFunction()} type="submit" />

            </form>
        </div>

    )
}

export default FormPage;