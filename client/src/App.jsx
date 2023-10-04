import './App.css'
import { Routes, Route } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
//Importing all components
//import { useSelector, useDispatch } from 'react-redux';
import LandingPage from './views/landingPage/landingPage';
import HomePage from './views/homePage/homePage';
import DetailPage from './views/detailPage/detailPage';
import FormPage from './views/formPage/formPage';
//import Nav from './components/nav/nav';


const App = () => {

  const { pathname } = useLocation();


  return (
    <>
      {pathname !== '/'  }
      <Routes>
        <Route exact path="/home" element={<HomePage/>} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/home/:id" element={<DetailPage />} />
        <Route path="/form" element={<FormPage />} />

      </Routes>
    </>
  )
};

export default App;