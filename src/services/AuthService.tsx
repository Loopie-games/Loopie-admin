import http from '../http-common';

class AuthService {
    async getLogged() {
        console.log(localStorage.getItem("token"));

        return http.get("/Admin/GetLogged", {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        })
    }
    async getSaltByUsername(username: string) {
        return http.get("/User/GetSalt/" + username)
    }
    async login(data: any) {
        return http.post("/Auth", data)
    }
}

export default new AuthService();