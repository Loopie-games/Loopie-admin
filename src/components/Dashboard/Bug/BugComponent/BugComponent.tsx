
import { observer } from 'mobx-react-lite'
import React, { useEffect } from 'react'
import ReactDropdown from 'react-dropdown'
import { Bug, BUG_SERVERITY, BUG_SORT_BY, BUG_STATUS, BugReport } from '../../../../models/bugs/bugsInterfaces'
import { useStore } from '../../../../stores/store'
import Icon from '../../../Shared/icon/Icon'
import './BugComponent.scss'
const BugComponent = (bugReport: BugReport) => {
    const { bugStore, authStore, bugReportStore } = useStore()
    const [isStarred, setIsStarred] = React.useState(false);

    const getCurrentPath = () => {
        const path = window.location.pathname
        return path
    }

    useEffect(() => {
        setIsStarred(
            bugReportStore.starredBugReports.some((bug) => bug.id === bugReport.id)
        )

    }, [])

    const handleStar = () => {
        bugReportStore.starBugReport(bugReport);
        setIsStarred(bugReportStore.isStarred(bugReport));

    }

    /*
    const getSeverity = () => {
        switch (bugReport.severity) {
            case BUG_SERVERITY.SEVERE:
                return 'Bug_Severe'
            case BUG_SERVERITY.MAJOR:
                return 'Bug_Major'
            case BUG_SERVERITY.MINOR:
                return 'Bug_Minor'
            case BUG_SERVERITY.TRIVIAL:
                return 'Bug_Trivial'
            default:
                return 'Bug_Unknown'
        }
    }






    const handleAssign = () => {
        console.log('Assign')
        console.log(authStore.user);

        bugStore.claimBug(bugReport.id, authStore.user)
        console.log(bugReport.asignee);
    }

    const handleChangeStatus = (e: any) => {
        console.log(e.value);
        bugStore.changeStatus(bugReport.id, e.value)
    }

    const handleDelete = () => {
        console.log('Delete')
        bugStore.deleteBug(bugReport.id)
    }
   return (
        <div className='BugComponent_Container'>
            <div className={`BugComponent_SeverityContainer ${getSeverity()}`}></div>
            <div className={`BugComponent_RestContainer ${getCurrentPath() === '/bug' ? 'BugComponent_OnSite' : 'BugComponent_OffSite'}`}>
                <div className='BugComponent_DescriptionContainer'>
                    <span className='BugComponent_Description'>
                        {bugReport.description}
                    </span>
                </div>
                {getCurrentPath() === '/bug' && <>
                    <div className='BugComponent_StatusContainer'>
                        <ReactDropdown onChange={handleChangeStatus} className='BugComponent_StatusDropdown' controlClassName='BugComponent_StatusDropdownControl' menuClassName='BugComponent_StatusDropdownMenu' options={Object.values(BUG_STATUS)} value={bugReport.status} />

                    </div>

                    <div className='BugComponent_AssigneeContainer'>
                        {bugReport.asignee === null ?
                            <button className='BugComponent_ClaimButton' onClick={handleAssign}>Claim</button> :
                            <div className='BugComponent_Assignee'>{bugReport.asignee}</div>
                        }
                    </div>
                    <div className='BugComponent_MoreContainer' onClick={handleDelete}>
                        <Icon name='cross' />
                    </div>

                </>
                }
            </div>
        </div>
    )
     */

    return (
        <div className='BugComponent_Container'>
            <div className={`BugComponent_RestContainer ${getCurrentPath() === '/bug' ? 'BugComponent_OnSite' : 'BugComponent_OffSite'}`}>
                <div className='BugComponent_DescriptionContainer'>
                    <div className='BugComponent_StarContainer' onClick={() => handleStar()}>
                        {isStarred ?
                            <div className='BugComponent_StarFilled'>
                                <Icon name='star_filled' />
                            </div> :
                            <div className='BugComponent_StarOutline'>
                                <Icon name='star_outline' />
                            </div>
                        }
                    </div>
                    <span className='BugComponent_Description'>
                        {bugReport.title}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default observer(BugComponent)