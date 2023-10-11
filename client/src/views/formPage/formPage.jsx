import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGenres, getPlatforms, postGame } from "../../redux/actions/actions";
import style from "../formPage/formPage.module.css";

function FormPage() {
  const dispatch = useDispatch();

  const allGenres = useSelector((state) => state.allGenres);
  const allPlatforms = useSelector((state) => state.allPlatforms);

  useEffect(() => {
    dispatch(getGenres());
    dispatch(getPlatforms());
  }, []);

  // Estados locales
  const [state, setState] = useState({
    name: "",
    image: "",
    description: "",
    platforms: [],
    released_date: "",
    rating: 0,
    genres: [],
  });

  // Estados de errores
  const [errors, setErrors] = useState({
    name: "",
    image: "",
    description: "This can't be empty!",
    platforms: "",
    released_date: "",
    rating: "",
    genres: "",
  });

  // Estados para selecciones de géneros y plataformas
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [selectedPlatforms, setSelectedPlatforms] = useState([]);

  // Manejador de cambios en el formulario
  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    if (type === "checkbox") {
      if (name === "genres") {
        setSelectedGenres((prevGenres) =>
          checked ? [...prevGenres, value] : prevGenres.filter((g) => g !== value)
        );
      } else if (name === "platforms") {
        setSelectedPlatforms((prevPlatforms) =>
          checked ? [...prevPlatforms, value] : prevPlatforms.filter((p) => p !== value)
        );
      }
    } else {
      setState({
        ...state,
        [name]: value,
      });
    }

    validate(name, value);
  };

  // Función de validación
  const validate = (name, value) => {
    switch (name) {
      case "name":
        if (value === "") {
          setErrors((prevErrors) => ({
            ...prevErrors,
            name: "This can't be empty!",
          }));
        } else if (value.length > 30) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            name: "Too long! Less than 30 characters.",
          }));
        } else if (!/^[A-Za-z\s]+$/.test(value)) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            name: "Only letters and spaces are allowed.",
          }));
        } else {
          setErrors((prevErrors) => ({
            ...prevErrors,
            name: "", // Limpiar el mensaje de error si el valor es válido.
          }));
        }
        break;
      case "description":
        if (value === "") {
          setErrors((prevErrors) => ({
            ...prevErrors,
            description: "This can't be empty!",
          }));
        } else if (value.length > 1000) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            description: "Description must be 1000 characters or less.",
          }));
        } else {
          setErrors((prevErrors) => ({
            ...prevErrors,
            description: "", // Limpiar el mensaje de error si el valor es válido.
          }));
        }
        break;
      case "platforms":
        if (selectedPlatforms.length === 0) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            platforms: "Select at least one platform!",
          }));
        } else {
          setErrors((prevErrors) => ({
            ...prevErrors,
            platforms: "You've selected platforms.", // Puedes limpiarlo si lo deseas
          }));
        }
        break;
      case "released_date":
        // Puedes agregar la validación de fecha aquí, si lo deseas.
        break;
      case "rating":
        if (value === "") {
          setErrors((prevErrors) => ({
            ...prevErrors,
            rating: "This can't be empty!",
          }));
        } else if (isNaN(value) || parseFloat(value) < 0 || parseFloat(value) > 10) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            rating: "Invalid rating value!",
          }));
        } else {
          setErrors((prevErrors) => ({
            ...prevErrors,
            rating: "", // Limpiar el mensaje de error si el valor es válido.
          }));
        }
        break;
      case "genres":
        if (selectedGenres.length === 0) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            genres: "Select at least one genre!",
          }));
        } else {
          setErrors((prevErrors) => ({
            ...prevErrors,
            genres: "", // Limpiar el mensaje de error si se selecciona al menos un género.
          }));
        }
        break;
      default:
        break;
    }
  };

  // Función para deshabilitar el botón Enviar
/*   const disableFunction = () => {
    for (let error in errors) {
      if (errors[error] !== "") return true; // Hay errores, deshabilitar.
    }

    // Verifica que todos los campos obligatorios estén completos
    if (
      state.name === "" ||
      state.image === "" ||
      state.description === "" ||
      state.released_date === "" ||
      (state.rating === 0 || state.rating === "0") ||
      selectedGenres.length === 0 ||
      selectedPlatforms.length === 0
    ) {
      return true; // Faltan campos obligatorios, deshabilitar.
    }

    return false; // No hay errores y todos los campos obligatorios están completos, habilitar.
  };
 */
  // Manejador de envío del formulario
  const handleSubmit = (event) => {
    event.preventDefault();
    const updatedState = {
      ...state,
      platforms: selectedPlatforms,
      genres: selectedGenres,
    };
    dispatch(postGame(updatedState));
  };

  return (
    <div>
      <form className={style.formPage} onSubmit={handleSubmit}>
        <div className={style.new}>
          <div className={style.form}>
            <label className={style.label}>Name: </label>
            <input name="name" onChange={handleChange} type="text" value={state.name} />
            <div><p className={style.error}>{errors.name}</p></div>
  
            <br />
  
            <label className={style.label}>Image:</label>
            <input name="image" onChange={handleChange} type="text" value={state.image} />
  
            <br />
  
            <label className={style.label}>Description:</label>
            <input name="description" onChange={handleChange} type="text" value={state.description} />
  
            <br />
  
            <label className={style.label}>Release Date:</label>
            <input name="released_date" onChange={handleChange} type="text" value={state.released_date} />
  
            <br />
  
            <label className={style.label}>Rating:</label>
            <input name="rating" onChange={handleChange} type="text" value={state.rating} />
            <br />
          </div>
  
          <div className={style.checkBoxes}>
            <div className={style.platforms}>
              <h3 className={style.header}>Platforms:</h3>
              {allPlatforms.map((platform) => (
                <div key={platform.id}>
                  <input
                    type="checkbox"
                    name="platforms"
                    value={platform.name}
                    checked={selectedPlatforms.includes(platform.name)}
                    onChange={handleChange}
                  />
                  {platform.name}
                </div>
              ))}
            </div>
            <br />
  
            <div className={style.genres}>
              <h3 className={style.header}>Genres:</h3>
              {allGenres.map((genre) => (
                <div key={genre.id}>
                  <input
                    type="checkbox"
                    name="genres"
                    value={genre.name}
                    checked={selectedGenres.includes(genre.name)}
                    onChange={handleChange}
                  />
                  {genre.name}
                </div>
              ))}
              {selectedGenres.map((g) => <span key={g}>{g}--</span>)}
            </div>
          </div>
        </div>
        <input className={style.button} type="submit" />
      </form>
    </div>
  );
}

export default FormPage;

