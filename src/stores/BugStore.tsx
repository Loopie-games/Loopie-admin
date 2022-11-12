import axios from "axios"
import { action, makeAutoObservable, observable } from "mobx"
import { Bug, BUG_SERVERITY, BUG_SORT_BY, BUG_STATUS } from "../models/bugs/bugsInterfaces";
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
        console.log(this.bugs);

    }

    @action deleteBug = async (id: number) => {
        console.log('deleteBug');
        this.bugs = this.bugs.filter(bug => bug.id !== id)
    }

    @action sortBugs = async (sortType: BUG_SORT_BY) => {
        console.log('sortBugs');


        switch (sortType) {
            case BUG_SORT_BY.SEVERITY:
                this.bugs = this.bugs.slice().sort((a, b) => {
                    return Object.keys(BUG_SERVERITY).indexOf(a.severity!) - Object.keys(BUG_SERVERITY).indexOf(b.severity!)
                })

                console.log('severity');

                break;
            case BUG_SORT_BY.STATUS:
                this.bugs = this.bugs.slice().sort((a, b) => {
                    return Object.values(BUG_STATUS).indexOf(a.status) - Object.values(BUG_STATUS).indexOf(b.status)
                })

                console.log('status');
                break;
            case BUG_SORT_BY.ASIGNEE:
                this.bugs = this.bugs.slice().sort((a, b) => {
                    return (a.asignee || '').localeCompare(b.asignee || '')
                })
                console.log('asignee');
                break;
            case BUG_SORT_BY.CREATED_DATE:
                this.bugs = this.bugs.slice().sort((a, b) => {
                    return a.createdDate.getTime() - b.createdDate.getTime()
                })
                console.log('createdDate');
                break;
            default:
                break;
        }
    }

}