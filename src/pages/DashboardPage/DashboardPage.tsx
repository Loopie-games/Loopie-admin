import { observer } from 'mobx-react-lite'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Bug from '../../components/Dashboard/Bug/Bug'
import Dashboard from '../../components/Dashboard/Dasboard/Dashboard'
import Feedback from '../../components/Dashboard/Feedback/Feedback'
import Tilepack from '../../components/Dashboard/Tilepack/Tilepack'
import Usermanagement from '../../components/Dashboard/Usermanagement/Usermanagement'
import Navbar from '../../components/Shared/navbar/Navbar'
import { useStore } from '../../stores/store'
import './DashboardPage.scss'

const DashboardPage = () => {
    const { authStore } = useStore()
    const navigate = useNavigate()

    useEffect(() => {
        if (authStore.user === null) {
            navigate('/')
        }
    }, [authStore.user])

    const getCurrentPath = () => {
        const path = window.location.pathname
        return path
    }


    const routes = [
        { path: '/dashboard', element: <Dashboard /> },
        { path: '/feedback', element: <Feedback /> },
        { path: '/bug', element: <Bug /> },
        { path: '/tilepack', element: <Tilepack /> },
        { path: '/usermanagement', element: <Usermanagement /> },
    ]

    return (
        <div className='Dashboard_Container'>
            <div className='Dashboard_NavContainer'>
                <Navbar />
            </div>
            <div className='Dashboard_MainContainer'>
                {routes.find(route => route.path === getCurrentPath())?.element}
            </div>
        </div>
    )
}

export default observer(DashboardPage)