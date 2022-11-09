import './App.scss';
import { observer } from 'mobx-react-lite';
import { BrowserRouter as Router, Routes, Route, useParams, useNavigate, useLocation } from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage';
import LoginPage from './pages/LoginPage/LoginPage';

function App() {
  const routes = [
    { path: '/', element: <LoginPage /> },
  ]

  return (
    <div className="App">
    <div className='ellipse'></div>
    <div className='ellipse'></div>
    <div className='ellipse'></div>
    <div className='ellipse'></div>
      <Router>
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={
              <>
                <div className='Route_Container'>
                  {route.element}
                </div>
              </>
            } />
          ))}
        </Routes>
      </Router>

    </div>
  );
}

export default observer(App);
