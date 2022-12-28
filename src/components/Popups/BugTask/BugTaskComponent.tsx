import { observer } from 'mobx-react-lite'
import React, { useEffect } from 'react'
import ReactDropdown from 'react-dropdown'
import { Bug, BugReport, BUG_SERVERITY } from '../../../models/bugs/bugsInterfaces'
import { SimpleUserDTO } from '../../../models/user/userInterface'
import { useStore } from '../../../stores/store'
import Icon from '../../Shared/icon/Icon'
import StarredBugsComponent from '../StarredBugs/StarredBugsComponent'
import './BugTaskComponent.scss'



const BugTask = () => {
    const { popupStore, bugStore, authStore, bugReportStore } = useStore();
    const [bugTitle, setBugTitle] = React.useState('');
    const [bugDescription, setBugDescription] = React.useState('');
    const [bugSeverity, setBugSeverity] = React.useState<BUG_SERVERITY>();
    const [bugSeverityColor, setBugSeverityColor] = React.useState('');
    const [bugAssignees, setBugAssignees] = React.useState<SimpleUserDTO[]>([]);
    const [relatedBugs, setRelatedBugs] = React.useState<BugReport[]>([]);

    const handleSetBugSeverity = (severity: any) => {
        setBugSeverity(severity.value);
    }

    useEffect(() => {
        getSeverityColor();
    }, [bugSeverity])

    useEffect(() => {
        setRelatedBugs(bugReportStore.selectedBugReports);
    }, [bugReportStore.selectedBugReports])


    const getSeverityColor = () => {
        switch (bugSeverity) {
            case BUG_SERVERITY.SEVERE:
                setBugSeverityColor('BugOverviewComponent_Severe')
                break;
            case BUG_SERVERITY.MAJOR:
                setBugSeverityColor('BugOverviewComponent_Major')
                break;
            case BUG_SERVERITY.MINOR:
                setBugSeverityColor('BugOverviewComponent_Minor')
                break;
            case BUG_SERVERITY.TRIVIAL:
                setBugSeverityColor('BugOverviewComponent_Trivial')
                break;
            case null:
                setBugSeverityColor('BugOverviewComponent_Unknown')
                break;
            case undefined:
                setBugSeverityColor('BugOverviewComponent_Unknown')
                break;
            default:
                setBugSeverityColor('BugOverviewComponent_Unknown')
                break;
        }
    }

    const handleSave = () => {
        const newBug: Bug = {
            id: Math.random(),
            title: bugTitle,
            description: bugDescription,
            severity: bugSeverity !== undefined ? bugSeverity : BUG_SERVERITY.TRIVIAL,
            asignees: bugAssignees,
            createdDate: new Date(),
            relatedBugs: relatedBugs,
        }

        console.log(newBug);

        bugStore.newBug(newBug);
        popupStore.closePopup(0)
    }

    const handleAddAssignee = (user: SimpleUserDTO) => {
        setBugAssignees([...bugAssignees, user]);
        console.log(bugAssignees);

    }

    const handleOpenStarredBugs = () => {
        popupStore.openPopup(<StarredBugsComponent />);
    }


    return (
        <>
            <div className={`BugOverview_Container ${bugSeverityColor}`}>
                <div className='BugOverview_Wrapper'>
                    <div className='BugOverview_TitleHeader'>
                        <div className='BugOverview_Title'>New Bug Task</div>
                        <div className='BugOverview_CloseButton' onClick={() => popupStore.closePopup(0)}>
                            <Icon name='cross' />
                        </div>
                    </div>
                    <div className='BugOverview_TitleContainer'>
                        <textarea className='BugOverview_TitleInput' placeholder='Title' name="" id="" value={bugTitle} onChange={(e) => setBugTitle(e.target.value)} />
                    </div>
                    <div className='BugOverview_DescriptionContainer'>
                        <textarea className='BugOverview_DescriptionInput' placeholder='Description' name="" id="" value={bugDescription} onChange={(e) => setBugDescription(e.target.value)} />
                    </div>
                    <div className='BugOverview_AssigneeSeverityContainer'>
                        <div className='BugOverview_AssigneesContainer'>
                            <p className='BugOverview_AssigneesTitle'>Assignees</p>
                            <div className='BugOverview_AssigneesCardsContainer'>
                                {bugAssignees.length > 0 ? bugAssignees.map((assignee, index) => {
                                    return (

                                        <div className='BugOverview_AssigneesCard' key={index}>
                                            <p className='BugOverview_AssigneesCardText'>
                                                {assignee.username}
                                            </p>
                                        </div>
                                    )
                                }) : <div className='BugOverview_AssigneesCard' onClick={() => handleAddAssignee(authStore.user)}>
                                    <p className='BugOverview_AssigneesCardText'>Add Me</p>
                                </div>
                                }
                            </div>
                        </div>
                        <div className='BugOverview_SeverityContainer'>
                            <p className='BugOverview_SeverityTitle'>Severity</p>
                            <ReactDropdown options={Object.values(BUG_SERVERITY)}
                                onChange={(e) => handleSetBugSeverity(e)}
                                placeholderClassName='BugOverview_Placeholder'
                                className='BugOverview_SeverityDropdown'
                                controlClassName='BugOverview_SeverityDropdownControl'
                                menuClassName='BugOverview_SeverityDropdownMenu' />
                        </div>
                    </div>
                    <div className='BugOverview_RelatedBugReportsContainer'>
                        <p className='BugOverview_RelatedBugReportsTitle'>Related bug reports</p>
                        <div className='BugTask_RelatedBugReportsCardsContainer'>
                            <div className='BugTask_AddCardContainer' onClick={() => handleOpenStarredBugs()}>
                                <Icon name="plus" />
                            </div>
                            {relatedBugs.length > 0 && relatedBugs.map((bug, index) => {
                                return (
                                    <div className='BugOverview_RelatedBugReportsCard' key={index}>
                                        <p className='BugOverview_RelatedBugReportsCardText'>
                                            {bug.title}
                                        </p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className='BugOverview_ButtonContainer'>
                        <div className='BugOverview_Button' onClick={() => popupStore.closePopup(0)}>
                            Close
                        </div>
                        <div className='BugOverview_Button' onClick={() => handleSave()}>
                            Save
                        </div>
                    </div>
                </div>
            </div>
            <div className='BugOverview_Background' onClick={() => popupStore.closePopup(0)}>
            </div>
        </>
    )
}

export default observer(BugTask)