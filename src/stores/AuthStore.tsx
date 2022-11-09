import axios from "axios"
import { action, makeAutoObservable, observable } from "mobx"
import authService from "../services/AuthService";
import securityService from "../services/securityService";

export class AuthStore{
    @observable token: string | undefined;
    @observable user: any;

    constructor(){
        makeAutoObservable(this)
    }
    

    @action login = async (data: {username: string, password:string}) => {
        localStorage.removeItem('token')

        const salt = await (await authService.getSaltByUsername(data.username)).data;
        if (salt === null) {
            return
        }

        const password = await securityService.hashPassword(data.password, salt)
        data.password = password
    
        const response = await authService.login({username: data.username, password: data.password})
        if (response !== undefined ){
            localStorage.setItem('token', response.data.jwt)
            this.token = response.data.jwt;
            await this.getLogged();
        }
    }

    @action getLogged = async () => {
        const response = await authService.getLogged();
        if (response !== undefined){
            this.user = response.data;
        }
    }

    @action logout = () => {
        localStorage.removeItem('token')
        this.token = undefined;
        this.user = null;

    }
}