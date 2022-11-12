import {action, makeAutoObservable} from "mobx";
import BugReportService from "../services/BugReportService";

export class BugReportStore {

    constructor() {
        makeAutoObservable(this);
    }

    @action
    getAll = async () => {
        const response = await BugReportService.getAll();
        return response.data
    }

}