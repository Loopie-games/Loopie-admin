import axios from "axios"
import { action, makeAutoObservable, observable } from "mobx"
import { Bug, BUG_SERVERITY, BUG_SORT_BY, BUG_STATUS } from "../models/bugs/bugsInterfaces";
import authService from "../services/AuthService";
import BugReportService from "../services/BugReportService";
import securityService from "../services/securityService";

export class PopupStore {
    @observable popupOpen = false;
    @observable popupContent: JSX.Element | null = null;

    @observable popups: { id: number, element: JSX.Element, isOpen: boolean }[] = []


    constructor() {
        makeAutoObservable(this)
    }

    @action openBugOverview = (content: JSX.Element, bug: Bug) => {
        this.popups.push({ id: this.popups.length, element: content, isOpen: true })
    }

    @action openPopup = (content: JSX.Element) => {
        this.popups.push({ id: this.popups.length, element: content, isOpen: true })
    }

    @action closePopup = (id: number) => {
        console.log(this.popups.find((popup) => popup.id === id));
        this.popups = this.popups.filter((popup) => popup.id !== id)
    }

}