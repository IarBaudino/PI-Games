import './App.css'
import { Routes, Route } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
//Importing all components
//import HomePage from './components/homePage/HomePage'
//import { useSelector, useDispatch } from 'react-redux';
import LandingPage from './views/landingPage/landingPage';
//import Nav from './components/nav/nav';


const App = () => {

  const { pathname } = useLocation();

 return (
    <>
      {pathname !== '/' && <Nav />}
      <Routes>
        <Route path="/" element={<LandingPage />} />
              
      </Routes>
    </>
  )
};

export default App;