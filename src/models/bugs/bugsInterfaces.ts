import { SimpleUserDTO } from "../user/userInterface";

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
    title: string;
    description: string;
    severity: BUG_SERVERITY | null;
    asignees: SimpleUserDTO[]
    createdDate: Date;
    relatedBugs: BugReport[];
}

export enum BUG_SORT_BY {
    ID = 'Id',
    SEVERITY = 'Severity',
    STATUS = 'Status',
    ASIGNEE = 'Asignee',
    CREATED_DATE = 'Created Date'
}

export interface BugReport {
    id: string;
    title: string;
    description?: string;
    reportingUser: SimpleUserDTO;
    starId?: string;
}
