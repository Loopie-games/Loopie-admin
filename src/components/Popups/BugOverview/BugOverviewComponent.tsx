import { observer } from 'mobx-react-lite'
import React, { useEffect } from 'react'
import ReactDropdown from 'react-dropdown'
import { Bug, BUG_SERVERITY } from '../../../models/bugs/bugsInterfaces'
import { useStore } from '../../../stores/store'
import Icon from '../../Shared/icon/Icon'
import './BugOverviewComponent.scss'

export interface BugOverviewComponentProps {
    bug: Bug;
}


const BugOverviewComponent = ({ bug }: BugOverviewComponentProps) => {
    const { popupStore, bugStore } = useStore();
    const [bugTitle, setBugTitle] = React.useState(bug.description);
    const [bugDescription, setBugDescription] = React.useState('');
    const [bugSeverity, setBugSeverity] = React.useState(bug.severity);
    const [bugSeverityColor, setBugSeverityColor] = React.useState<string>('');

    const handleSetBugSeverity = (severity: any) => {
        console.log(severity);
        setBugSeverity(severity.value);
        console.log(bugStore.bugs);
    }

    useEffect(() => {
        console.log(bugSeverity);
        getSeverityColor();
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
            description: bugTitle,
            severity: bugSeverity
        }


        bugStore.saveBug(newBug);
        popupStore.closePopup();
    }

    return (
        <>
            <div className={`BugOverview_Container ${bugSeverityColor}`}>
                <div className='BugOverview_Wrapper'>
                    <div className='BugOverview_TitleHeader'>
                        <div className='BugOverview_Title'>Bug Overview</div>
                        <div className='BugOverview_CloseButton'>
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
                                <div className='BugOverview_AssigneesCard'>
                                    <p className='BugOverview_AssigneesCardText'> GULLEROD4</p>
                                </div>
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