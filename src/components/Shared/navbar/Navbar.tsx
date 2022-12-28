import React, { useEffect, useState } from 'react'
import Icon from '../icon/Icon'
import './Navbar.scss'
import logo from '../../../assets/Shared/loopie_logo_white.png'
import { useStore } from '../../../stores/store'
import { observer } from 'mobx-react-lite'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const { authStore } = useStore()
    const navigate = useNavigate()
    const routes = [
        { path: '/dashboard', element: <Icon name='dashboard' /> },
        { path: '/feedback', element: <Icon name='feedback' /> },
        { path: '/tilepack', element: <Icon name='tilepack_creator' /> },
        { path: '/usermanagement', element: <Icon name='profile' /> },
    ]

    const [BugSubMenuShown, setBugSubMenuShown] = useState(false)



    const getCurrentPath = () => {
        const path = window.location.pathname
        return path
    }

    const handleLogout = () => {
        authStore.logout()
        console.log('logout');
    }

    const handleNavigate = (path: string) => {
        navigate(path)
        setBugSubMenuShown(false)
    }

    useEffect(() => {
        console.log(getCurrentPath());
    }, [window.location.pathname])


    const handleBugSubMenu = () => {
        setBugSubMenuShown(!BugSubMenuShown)
    }

    return (
        <div className='Navbar_Container'>
            <div className='Navbar_LogoContainer' onClick={() => handleNavigate(routes[0].path)}>
                <img src={logo} alt='logo' />
            </div>
            <div className='Navbar_MainButtonContainer'>
                <ul className='Navbar_MainButtonWrapper'>
                    {routes.map((route, index) => (
                        <li key={index} className={`Navbar_MainButton ${getCurrentPath() === route.path ? 'active-link' : ''} `} onClick={() => handleNavigate(route.path)}>
                            {route.element}
                        </li>
                    ))}


                    <div>
                        <li className={`Navbar_MainButton ${BugSubMenuShown || getCurrentPath() === '/bug' || getCurrentPath() === '/test' ? 'active-link' : ''} `} onClick={handleBugSubMenu}>
                            <Icon name='bug' />
                        </li>
                        {
                            <div className={`Navbar_BugSubMenu ${BugSubMenuShown ? 'BugMenu_Open' : 'BugMenu_Closed'}`}>
                                <div className={`Navbar_MainButton ${getCurrentPath() === '/bug' ? 'active-link' : ''} `} onClick={() => handleNavigate('/bug')}>
                                    <Icon name='bugreports' />
                                </div>
                                <div className={`Navbar_MainButton ${getCurrentPath() === '/test' ? 'active-link' : ''} `} onClick={() => handleNavigate('/test')}>
                                    <Icon name='exclamation' />
                                </div>
                            </div>

                        }
                    </div>
                </ul>
            </div>
            <div className='Navbar_LogoutContainer'>
                <div className={`Navbar_MainButton`} onClick={handleLogout}>
                    <Icon name="logout" />
                </div>
            </div>
        </div>
    )
}

export default observer(Navbar)