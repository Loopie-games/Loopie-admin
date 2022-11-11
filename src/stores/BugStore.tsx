import axios from "axios"
import { action, makeAutoObservable, observable } from "mobx"
import { Bug, BUG_SERVERITY, BUG_STATUS } from "../models/bugs/bugsInterfaces";
import authService from "../services/AuthService";
import securityService from "../services/securityService";

export class BugStore {
    @observable bugs: Bug[] = [{
        id: 1,
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque mollitia sapiente a veniam, facere saepe dolorum sequi aperiam soluta maiores asperiores, voluptatibus consequuntur, repudiandae culpa dolore dolores. Ipsam, exercitationem provident!',
        severity: BUG_SERVERITY.SEVERE,
        status: BUG_STATUS.NEW,
        asignee: null,
        createdDate: new Date(),
    },
    {
        id: 2,
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque mollitia sapiente a veniam, facere saepe dolorum sequi aperiam soluta maiores asperiores, voluptatibus consequuntur, repudiandae culpa dolore dolores. Ipsam, exercitationem provident!',
        severity: BUG_SERVERITY.MAJOR,
        status: BUG_STATUS.NEW,
        asignee: 'test',
        createdDate: new Date(),
    },
    {
        id: 3,
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque mollitia sapiente a veniam, facere saepe dolorum sequi aperiam soluta maiores asperiores, voluptatibus consequuntur, repudiandae culpa dolore dolores. Ipsam, exercitationem provident!',
        severity: BUG_SERVERITY.MINOR,
        status: BUG_STATUS.NEW,
        asignee: 'test',
        createdDate: new Date(),
    },
    {
        id: 4,
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque mollitia sapiente a veniam, facere saepe dolorum sequi aperiam soluta maiores asperiores, voluptatibus consequuntur, repudiandae culpa dolore dolores. Ipsam, exercitationem provident!',
        severity: BUG_SERVERITY.TRIVIAL,
        status: BUG_STATUS.NEW,
        asignee: 'test',
        createdDate: new Date(),
    },
    ];

    constructor() {
        makeAutoObservable(this)
    }


    @action getBugs = async () => {
        console.log('getBugs');

    }

    @action claimBug = async (id: number, user: any) => {
        console.log('claimBug');
        this.bugs.find(bug => bug.id === id)!.asignee = user.username

        console.log(this.bugs);
        
    }

    @action changeStatus = async (id: number, status: BUG_STATUS) => {
        console.log('changeStatus');
        this.bugs.find(bug => bug.id === id)!.status = status
    }

}