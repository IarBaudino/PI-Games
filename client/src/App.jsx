import { Routes, Route } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
//Se importan los componentes de las vistas y el navBar que es nuestra barra de navegacion
import LandingPage from './views/landingPage/landingPage';
import HomePage from './views/homePage/homePage';
import DetailPage from './views/detailPage/detailPage';
import NavBar from '../src/components/navBar/navBar';
import CreatePage from './views/createPage/createPage';
//estilado
import './App.css'

const App = () => {
  const { pathname } = useLocation();
  return (
    <>
      {pathname !== '/'  }
      <NavBar />
      <Routes>
        <Route exact path="/home" element={<HomePage/>} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/home/:id" element={<DetailPage />} />
        <Route path="/create" element={<CreatePage />} />
      </Routes>
    </>
  )
};

export default App;

                                  //QUE SUCEDE EN ESTE CODIGO:

 //Primero se importan dos conjuntos de componentes de la librería react-router-dom. Routes y Route se utilizan para configurar las rutas y el enrutamiento en la aplicación. useLocation se usa para obtener información sobre la ubicación actual de la URL en la aplicación.
 //Se declara una constante llamada App que almacena una función flecha (componente funcional). Este es el componente raíz de la aplicación.
 //se utiliza la función useLocation para obtener la propiedad pathname de la ubicación actual. El pathname representa la porción de la URL que describe la ubicación actual en la aplicación.
 //fragmento vacío (<>...</>) que permite agrupar elementos sin introducir un contenedor adicional en el DOM. Luego, se verifica si el pathname no es igual a "/", lo que implica que no estamos en la página de inicio.
  //Se renderiza el componente NavBar,  contiene la barra de navegación de la aplicación. Esto se muestra en todas las páginas.
  //Se inicia la sección de enrutamiento utilizando el componente Routes. Aquí se definirán las rutas de la aplicación y los componentes asociados con ellas.
  //Se configura una ruta que coincide exactamente con "/home" y renderiza el componente HomePage cuando se accede a esa ruta.
  //Se configura una ruta que coincide con cualquier ruta ("/") y renderiza el componente LandingPage como página de inicio
  //Se configura una ruta dinámica que coincide con "/home/:id" y renderiza el componente DetailPage. El :id indica que se espera un parámetro variable en la URL.
  //Se configura una ruta que coincide con "/form" y renderiza el componente FormPage cuando se accede a esa ruta.
  //Finalmente, se cierra la sección de enrutamiento y el componente App. Todo el contenido entre los corchetes {...} se renderizará en la aplicación.
 //En resumen, este código configura un componente App que sirve como el componente raíz de la aplicación y define las rutas de la aplicación utilizando la librería react-router-dom. Dependiendo de la URL actual, se renderizan diferentes componentes, como la página de inicio, la página de detalles, la página de formulario y una barra de navegación en todas las páginas.