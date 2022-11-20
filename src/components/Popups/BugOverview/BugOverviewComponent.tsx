import { observer } from 'mobx-react-lite'
import React, { useEffect } from 'react'
import ReactDropdown from 'react-dropdown'
import { Bug, BUG_SERVERITY } from '../../../models/bugs/bugsInterfaces'
import { SimpleUserDTO } from '../../../models/user/userInterface'
import { useStore } from '../../../stores/store'
import Icon from '../../Shared/icon/Icon'
import './BugOverviewComponent.scss'

export interface BugOverviewComponentProps {
    bug: Bug;
}


const BugOverviewComponent = ({ bug }: BugOverviewComponentProps) => {
    const { popupStore, bugStore, authStore } = useStore();
    const [bugTitle, setBugTitle] = React.useState(bug.title);
    const [bugDescription, setBugDescription] = React.useState(bug.description);
    const [bugSeverity, setBugSeverity] = React.useState(bug.severity);
    const [bugSeverityColor, setBugSeverityColor] = React.useState<string>('');
    const [bugAssignees, setBugAssignees] = React.useState(bug.asignees);
    const handleSetBugSeverity = (severity: any) => {
        console.log(severity);
        setBugSeverity(severity.value);
        console.log(bugStore.bugs);
    }

    useEffect(() => {
        console.log(bug.asignees);

    }, [])


    useEffect(() => {
        console.log(bugSeverity);
        getSeverityColor();
        console.log(bug);

    }, [bugSeverity])


    const getSeverityColor = () => {
        console.log(bugSeverity);

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
        const newBug = {
            ...bug,
            title: bugTitle,
            description: bugDescription,
            severity: bugSeverity,
            asignees: bugAssignees,

        }


        bugStore.saveBug(newBug);
        popupStore.closePopup();
    }

    const handleAddAssignee = (user: SimpleUserDTO) => {
        setBugAssignees([...bugAssignees, user]);
        console.log(bugAssignees);

    }

    return (
        <>
            <div className={`BugOverview_Container ${bugSeverityColor}`}>
                <div className='BugOverview_Wrapper'>
                    <div className='BugOverview_TitleHeader'>
                        <div className='BugOverview_Title'>Bug Overview</div>
                        <div className='BugOverview_CloseButton' onClick={() => popupStore.closePopup()}>
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
                                menuClassName='BugOverview_SeverityDropdownMenu'
                                value={Object.keys(BUG_SERVERITY).find((severity) => severity === bugSeverity)}
                            />
                        </div>
                    </div>
                    <div className='BugOverview_RelatedBugReportsContainer'>
                        <p className='BugOverview_RelatedBugReportsTitle'>Related bug reports</p>
                        <div className='BugOverview_RelatedBugReportsCardsContainer'>

                        </div>
                    </div>
                    <div className='BugOverview_ButtonContainer'>
                        <div className='BugOverview_Button' onClick={() => popupStore.closePopup()}>
                            Close
                        </div>
                        <div className='BugOverview_Button' onClick={() => handleSave()}>
                            Save
                        </div>
                    </div>
                </div>
            </div>
            <div className='BugOverview_Background' onClick={popupStore.closePopup}>
            </div>
        </>
    )
}

export default observer(BugOverviewComponent)