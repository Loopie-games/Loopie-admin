import http from "../http-common"
import {BugReport} from "../models/bugs/bugsInterfaces";

class tilePackService {

    getAll = async () => {
        return await http.get<BugReport[]>("/BugReport")
    }

    getById = async (id:string) =>{
        return await http.get<BugReport>("/BugReport/" + id)
    }

}

export default new tilePackService();