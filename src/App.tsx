import './App.scss';
import { observer } from 'mobx-react-lite';
import { BrowserRouter as Router, Routes, Route, useParams, useNavigate, useLocation } from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage';
import LoginPage from './pages/LoginPage/LoginPage';
import DashboardPage from './pages/DashboardPage/DashboardPage';
import { useStore } from './stores/store';
import { useEffect } from 'react';

function App() {
  const { authStore } = useStore();

  const routes = [
    { path: '/', element: <LoginPage /> },
    { path: '/dashboard', element: <DashboardPage /> },
    { path: '/feedback', element: <DashboardPage /> },
    { path: '/bug', element: <DashboardPage /> },
    { path: '/tilepack', element: <DashboardPage /> },
    { path: '/usermanagement', element: <DashboardPage /> },
    { path: '/test', element: <DashboardPage /> },
  ]

  useEffect(() => {
    if (!authStore.user) {
      if (localStorage.getItem('token')) {
        authStore.getLogged()
      }
    }

  }, [authStore.user])



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
