import { observer } from 'mobx-react-lite'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Login from '../../components/LoginPage/LoginComponent/Login'
import { useStore } from '../../stores/store'
import './LoginPage.scss'
const LoginPage = () => {
    const navigate = useNavigate()
    const {authStore} = useStore()


    useEffect(() => {

        if(authStore.user) {
            navigate('/');
            return;
        }

        if (authStore.user === null && localStorage.getItem('token')) {
            getLogged();
        }
    }, [])

    useEffect(() => {
        if(authStore.user) {
        navigate('/dashboard');
        return;
        }
    }, [authStore.user])

    const getLogged = async () => {
        await authStore.getLogged();
    }

    return (
        <div className='LoginPage_Container'>
            <div className='LoginPage_Wrapper'>
                <Login />
            </div>
        </div>
    )
}

export default observer(LoginPage)