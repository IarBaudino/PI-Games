import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGenres, getPlatforms, postGame } from "../../redux/actions/actions";

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
              setErrors({ ...errors, name: "This can't be empty!" });
            } else if (value.length > 30) {
              setErrors({ ...errors, name: "Too long! Less than 30 characters." });
            } else if (!/^[A-Za-z\s]+$/.test(value)) {
              setErrors({ ...errors, name: "Only letters and spaces are allowed." });
            } else {
              setErrors({ ...errors, name: "" });
            }
            break;
            case "description":
                if (value === "") {
                  setErrors({ ...errors, description: "This can't be empty!" });
                } else if (value.length > 1000) {
                  setErrors({ ...errors, description: "Description must be 1000 characters or less." });
                } else {
                  setErrors({ ...errors, description: "" });
                }
                break;
      case "platforms":
        if (selectedPlatforms.length === 0) {
          setErrors({ ...errors, platforms: "Select at least one platform!" });
        } else {
          setErrors({ ...errors, platforms: "You've selected platforms." });
        }
        break;
      case "released_date":
        // Puedes agregar la validación de fecha aquí, si lo deseas.
        break;
      case "rating":
        if (value === "") {
          setErrors({ ...errors, rating: "This can't be empty!" });
        } else if (isNaN(value) || parseFloat(value) < 0 || parseFloat(value) > 10) {
          setErrors({ ...errors, rating: "Invalid rating value!" });
        } else {
          setErrors({ ...errors, rating: "" });
        }
        break;
      case "genres":
        if (selectedGenres.length === 0) {
          setErrors({ ...errors, genres: "Select at least one genre!" });
        } else {
          setErrors({ ...errors, genres: "" });
        }
        break;
      case "image":
        // Puedes implementar una validación de URL o accesibilidad de imagen aquí si es necesario.
        break;
      default:
        break;
    }
  };

  // Función para deshabilitar el botón Enviar
  const disableFunction = () => {
    for (let error in errors) {
      if (errors[error] !== "") return true; // Hay errores, deshabilitar.
    }

    // Verifica que todos los campos obligatorios estén completos
    if (
      state.name === "" ||
      state.released_date === "" ||
      state.rating === 0 ||
      selectedGenres.length === 0 ||
      selectedPlatforms.length === 0
    ) {
      return true; // Faltan campos obligatorios, deshabilitar.
    }

    return false; // No hay errores y todos los campos obligatorios están completos, habilitar.
  };

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
      <form onSubmit={handleSubmit}>
        <label>Name: </label>
        <input name="name" onChange={handleChange} type="text" value={state.name} />
        <div><p>{errors.name}</p></div>

        <br />

        <label>Image:</label>
        <input name="image" onChange={handleChange} type="text" value={state.image} />

        <br />

        <label>Description:</label>
        <input name="description" onChange={handleChange} type="text" value={state.description} />

        <br />

        <label>Release Date:</label>
        <input name="released_date" onChange={handleChange} type="text" value={state.released_date} />

        <br />

        <label>Rating:</label>
        <input name="rating" onChange={handleChange} type="text" value={state.rating} />
        <br />

        <label>Platforms:</label>
        {allPlatforms.map((platform) => (
          <div key={platform.id}>
            <input
              type="checkbox"
              name="platforms"
              value={platform.name} // Utiliza el ID como valor del checkbox
              checked={selectedPlatforms.includes(platform.name)} // Comprueba si el ID está en los seleccionados
              onChange={handleChange}
            />
            {platform.name}
          </div>
        ))}

        <br />

        <label>Genres:</label>
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

        <br />
        <div>
          {selectedGenres.map((g) => <span key={g}>{g}--</span>)}
        </div>

        <input disabled={disableFunction()} type="submit" />
      </form>
    </div>
  );
}

export default FormPage;

