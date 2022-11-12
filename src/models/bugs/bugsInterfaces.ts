import {SimpleUserDTO} from "../user/userInterface";

export enum BUG_SERVERITY {
    SEVERE = 'SEVERE',
    MAJOR = 'MAJOR',
    MINOR = 'MINOR',
    TRIVIAL = 'TRIVIAL'
}

export enum BUG_STATUS {
    NEW = 'New',
    ASSIGNED = 'Assigned',
    REOPENED = 'Reopened',
    RESOLVED = 'Resolved',
    VERIFIED = 'Verified',
    CLOSED = 'Closed'
}

export interface Bug {
    id: number;
    description: string;
    severity: BUG_SERVERITY | null;
    status: BUG_STATUS;
    createdDate: Date;
}

export interface BugReport {
    id: string;
    title: string;
    description: string;
    reportingUser: SimpleUserDTO;

}

