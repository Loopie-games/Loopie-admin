import { action, makeAutoObservable, observable } from "mobx";
import { Bug, BugReport } from "../models/bugs/bugsInterfaces";
import BugReportService from "../services/BugReportService";

export class BugReportStore {
    @observable bugReports: BugReport[] = [];
    @observable starredBugReports: BugReport[] = [];
    @observable selectedBugReports: BugReport[] = [];

    constructor() {
        makeAutoObservable(this);
    }

    @action
    getAll = async () => {
        const response = await BugReportService.getAll();
        this.bugReports = response.data;
        return response.data
    }

    @action
    starBugReport = async (bugReport: BugReport) => {
        console.log(bugReport);

        if (this.isStarred(bugReport)) {
            this.starredBugReports = this.starredBugReports.filter((bug) => bug.id !== bugReport.id);
        } else {
            this.starredBugReports.push(bugReport);
        }
        console.log(this.starredBugReports);

    }

    @action
    isStarred = (bugReport: BugReport) => {
        return this.starredBugReports.some((bug) => bug.id === bugReport.id)
    }

    @action
    setSelectedBugReports = (bugReports: BugReport[]) => {
        this.selectedBugReports = bugReports;
    }


}