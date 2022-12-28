import axios from "axios"
import { action, makeAutoObservable, observable } from "mobx"
import { Bug, BUG_SERVERITY, BUG_SORT_BY, BUG_STATUS } from "../models/bugs/bugsInterfaces";
import authService from "../services/AuthService";
import BugReportService from "../services/BugReportService";
import securityService from "../services/securityService";

export class BugStore {
    @observable bugs: Bug[] = [{
        id: 1,
        title: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque mollitia sapiente a veniam, facere saepe dolorum sequi aperiam soluta maiores asperiores, voluptatibus consequuntur, repudiandae culpa dolore dolores. Ipsam, exercitationem provident!',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque mollitia sapiente a veniam, facere saepe dolorum sequi aperiam soluta maiores asperiores, voluptatibus consequuntur, repudiandae culpa dolore dolores. Ipsam, exercitationem provident!',
        severity: BUG_SERVERITY.SEVERE,
        asignees: [],
        createdDate: new Date(),
        relatedBugs: [],
    },
    {
        id: 2,
        title: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque mollitia sapiente a veniam, facere saepe dolorum sequi aperiam soluta maiores asperiores, voluptatibus consequuntur, repudiandae culpa dolore dolores. Ipsam, exercitationem provident!',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque mollitia sapiente a veniam, facere saepe dolorum sequi aperiam soluta maiores asperiores, voluptatibus consequuntur, repudiandae culpa dolore dolores. Ipsam, exercitationem provident!',
        severity: BUG_SERVERITY.MAJOR,
        asignees: [],
        createdDate: new Date(),
        relatedBugs: [],
    },
    {
        id: 3,
        title: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque mollitia sapiente a veniam, facere saepe dolorum sequi aperiam soluta maiores asperiores, voluptatibus consequuntur, repudiandae culpa dolore dolores. Ipsam, exercitationem provident!',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque mollitia sapiente a veniam, facere saepe dolorum sequi aperiam soluta maiores asperiores, voluptatibus consequuntur, repudiandae culpa dolore dolores. Ipsam, exercitationem provident!',
        severity: BUG_SERVERITY.MINOR,
        asignees: [],
        createdDate: new Date(),
        relatedBugs: [],
    },
    {
        id: 4,
        title: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque mollitia sapiente a veniam, facere saepe dolorum sequi aperiam soluta maiores asperiores, voluptatibus consequuntur, repudiandae culpa dolore dolores. Ipsam, exercitationem provident!',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque mollitia sapiente a veniam, facere saepe dolorum sequi aperiam soluta maiores asperiores, voluptatibus consequuntur, repudiandae culpa dolore dolores. Ipsam, exercitationem provident!',
        severity: BUG_SERVERITY.TRIVIAL,
        asignees: [],
        createdDate: new Date(),
        relatedBugs: [],
    },
    ];

    constructor() {
        makeAutoObservable(this)
    }

    @action changeSeverity = (bugid: number, severity: BUG_SERVERITY) => {
        const bug = this.bugs.find(b => b.id === bugid);
        if (bug) {
            bug.severity = severity;
        }
    }


    @action getBugs = async () => {
        console.log('getBugs');
        const response = await BugReportService.getAll();
        console.log(response.data);

    }

    @action claimBug = async (id: number, user: any) => {
        console.log('claimBug');
        this.bugs.find(bug => bug.id === id)!.asignees.push(user);

        console.log(this.bugs);

    }


    @action deleteBug = async (id: number) => {
        console.log('deleteBug');
        this.bugs = this.bugs.filter(bug => bug.id !== id)
    }


    @action searchBugs = (searchText: string) => {
        return this.bugs.filter(bug => {
            return Object.values(bug).some(value => {
                return value.toString().toLowerCase().includes(searchText.toLowerCase())

            })
        })
    }

    @action saveBug = async (bug: Bug) => {
        console.log('saveBug');

        const index = this.bugs.findIndex(b => b.id === bug.id)
        if (index !== -1) {
            this.bugs[index] = bug
        } else {
            this.bugs.push(bug)
        }
        //const response = await BugReportService.save(bug);
        //console.log(response.data);
    }

    @action newBug = (bug: Bug) => {
        console.log('newBug');
        this.bugs.push(bug)
    }

}