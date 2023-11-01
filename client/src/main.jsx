import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import {store} from './redux/store/store.js'
import {Provider} from 'react-redux'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
  <BrowserRouter>
 
    <App />
  
  </BrowserRouter>
  </Provider>,
)


                                    //QUE SUCEDE EN ESTE CODIGO:
//Se importa la librería React y el módulo ReactDOM de react-dom/client. ReactDOM se utiliza para renderizar componentes de React en el navegador.
//Se importa el componente App desde el archivo App.jsx. Este es el componente principal de tu aplicación.
//Se importa un archivo CSS llamado index.css que se utiliza para estilizar la aplicación.
//Se importa el componente BrowserRouter de la librería react-router-dom. Este componente se utiliza para configurar el enrutamiento en la aplicación.
//Se importa el objeto store desde un archivo en la ubicación './redux/store/store.js'. Este objeto es parte de la configuración de Redux, que se utiliza para gestionar el estado global de la aplicación. También se importa el componente Provider de react-redux, que se utiliza para proporcionar el estado global a los componentes de la aplicación.
//Se crea una raíz de renderización usando ReactDOM.createRoot. Esta raíz se asocia al elemento HTML con el id 'root' en el DOM, lo que indica dónde se renderizará la aplicación.
//Se utiliza la raíz de renderización para renderizar la aplicación. La aplicación se envuelve en el componente Provider de Redux para proporcionar el estado global a la aplicación. Además, se envuelve la aplicación con el componente BrowserRouter para habilitar el enrutamiento. El componente principal de la aplicación, App, se renderiza dentro del BrowserRouter y el Provider.
//En resumen, este código configura la raíz de renderización de React, importa y utiliza componentes y configuraciones necesarios, como Redux y enrutamiento, y renderiza el componente App en el elemento HTML con el id 'root' en el DOM. Esto proporciona la funcionalidad de enrutamiento y el manejo del estado global en tu aplicación.