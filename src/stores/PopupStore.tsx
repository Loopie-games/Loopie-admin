import axios from "axios"
import { action, makeAutoObservable, observable } from "mobx"
import { Bug, BUG_SERVERITY, BUG_SORT_BY, BUG_STATUS } from "../models/bugs/bugsInterfaces";
import authService from "../services/AuthService";
import BugReportService from "../services/BugReportService";
import securityService from "../services/securityService";

export class PopupStore {
    @observable popupOpen = false;
    @observable popupContent: JSX.Element | null = null;


    constructor() {
        makeAutoObservable(this)
    }

    @action openBugOverview = (content: JSX.Element, bug: Bug) => {
        this.popupContent = content;
        this.popupContent.props.bug = bug;

        this.popupOpen = true;
    }

    @action openPopup = (content: JSX.Element) => {
        this.popupContent = content;
        this.popupOpen = true;

    }

    @action closePopup = () => {
        this.popupOpen = false;

        this.popupContent = null;
    }

}