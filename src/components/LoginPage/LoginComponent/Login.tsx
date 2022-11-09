import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../../../assets/Shared/loopie_logo_white.png'
import { useStore } from '../../../stores/store'
import Icon from '../../Shared/icon/Icon'
import './Login.scss'

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const {authStore} = useStore()

    const handleLogin = async () => {
        console.log(username, password);
        await authStore.login({username, password})
    }


    return (
        <div className='Login_Container'>
            <div className='Login_Wrapper'>
                <div className='Login_LogoContainer'>
                    <div className='Login_LogoWrapper'>
                        <img src={logo} alt="logo" />
                    </div>
                </div>
                <div className='Login_InputContainer'>
                    <div className='Login_InputWrapper'>
                        <div className='Login_InputIcon'>
                            <Icon name='username' />
                        </div>
                        <input type='text' className='Login_Input' placeholder='Username' onChange={e => setUsername(e.target.value)}/>
                    </div>
                </div>
                <div className='Login_InputContainer'>
                    <div className='Login_InputWrapper'>
                        <div className='Login_InputIcon'>

                            <Icon name='password' />
                        </div>
                        <input type='password' className='Login_Input' placeholder='Password' onChange={e => setPassword(e.target.value)} />
                    </div>
                </div>
                <button className='Login_Button' onClick={handleLogin}>Login</button>
            </div>
        </div>
    )
}

export default Login