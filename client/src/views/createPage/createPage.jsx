import React, { useEffect } from 'react'
import { useState } from 'react'
import style from './createPage.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { getGenres } from '../../redux/actions/actions'

const CreatePage = () => {

  const dispatch = useDispatch();
  const allGenres = useSelector((state) => state.allGenres);

  useEffect(() => {
    dispatch(getGenres())
  },[])


  const [state, setState] = useState({
    name: '',
    image: '',
    description: '',
    release_date: '',
    rating: '',
    platforms: '',
    genres: ''
  })

  const [errors, setErrors] = useState({
    name: 'Campo requerido',
    image: 'Campo requerido',
    description: 'Descripción no válida',
    release_date: 'Fecha no válida',
    rating: 'Rating no válido',
    platforms: 'Plataformas no válidas',
    genres: 'Géneros no válidos'
  })

  const validate = (state, name) => {
    switch (name) {
      case 'name':
        if (state.name === "") setErrors({ ...errors, name: 'El nombre es requerido' })
        else if (state.name.length > 20) setErrors({ ...errors, name: 'es muy largo!' })
        else setErrors({ ...errors, name: '' })
        break;

      case 'description':
        if (state.description.length === 0) setErrors({ ...errors, name: 'Campo requerido' })
        else setErrors({ ...errors, name: '' })
        break;
    }
  }

  const disableSubmit = () => {
    let aux = true;
    for(let error in errors){
      if(errors[error] === "")aux=false
      else{
        aux=true;
        break;
      }
  }
  return aux
}

  const handleChange = (event) => {
    if (event.target.name === "genres") {
      setState({
        ...state,
        genres: [...state.genres, event.target.value]
      })
    } else {
      setState({ //modifica el estado, le paso un objeto con una copia del estado anterior
        ...state,
        [event.target.name]: event.target.value,
      })
    }
    validate({ //modifica el estado, le paso un objeto con una copia del estado anterior
      ...state,
      [event.target.name]: event.target.value,
    })
  }

  return (
    <div className={style.form}>
      <form >
        <label >Name:</label>
        <input name="name" onChange={handleChange} type="text" />
        {errors.name && <p>{errors.name}</p>}
<br/>
        <label >Image:</label>
        <input onChange={handleChange} type="text" />
<br/>
        <label >Description:</label>
        <input name="description" onChange={handleChange} type="text" />
        {errors.name && <p>{errors.name}</p>}
<br/>
        <label >Release Date:</label>
        <input name="release_date" onChange={handleChange} type="text" />
<br/>
        <label >Rating: </label>
        <input name="rating" onChange={handleChange} type="text" />
<br/>
        <label > Platforms:</label>
        <select name="platforms" onChange={handleChange} type="text" />
<br/>
        <label> Genres:</label>
        <select name="genres" onChange={handleChange} type="text" />
<br/>
        <button disabled={disableSubmit()} type="submit">SUBMIT</button>

      </form>
    </div>
  )

}

export default CreatePage