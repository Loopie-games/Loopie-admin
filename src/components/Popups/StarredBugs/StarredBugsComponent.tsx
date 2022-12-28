import { observer } from 'mobx-react-lite'
import React, { useEffect } from 'react'
import ReactDropdown from 'react-dropdown'
import { Bug, BugReport, BUG_SERVERITY } from '../../../models/bugs/bugsInterfaces'
import { SimpleUserDTO } from '../../../models/user/userInterface'
import { useStore } from '../../../stores/store'
import Icon from '../../Shared/icon/Icon'
import './StarredBugsComponent.scss'



const StarredBugComponent = () => {
    const { popupStore, bugStore, authStore, bugReportStore } = useStore();
    const [relatedBugs, setRelatedBugs] = React.useState<BugReport[]>(bugReportStore.starredBugReports);
    const [selectedBugReports, setSelectedBugReports] = React.useState<BugReport[]>([]);
    const [searchText, setSearchText] = React.useState('');

    const handleSave = () => {
        bugReportStore.setSelectedBugReports(selectedBugReports);
        popupStore.closePopup(1);
    }

    const handleSelect = (bugReport: BugReport) => {
        if (selectedBugReports.includes(bugReport)) {
            setSelectedBugReports(selectedBugReports.filter(b => b !== bugReport));
        } else {
            setSelectedBugReports([...selectedBugReports, bugReport]);
        }
    }

    const handleSearch = (query: string) => {
        setSearchText(query);
        if (query === '') {
            setRelatedBugs(bugReportStore.starredBugReports);
        } else {
            setRelatedBugs(bugReportStore.starredBugReports.filter(b => b.title.toLowerCase().includes(query.toLowerCase())));
        }
    }

    return (
        <>
            <div className={`StarredBug_Container StarredBugComponent_Unknown`}>
                <div className='StarredBug_Wrapper'>
                    <div className='StarredBug_TitleHeader'>
                        <div className='StarredBug_Title'>Select related bug reports</div>
                        <div className='StarredBug_CloseButton' onClick={() => popupStore.closePopup(1)}>
                            <Icon name='cross' />
                        </div>
                    </div>
                    <div className='StarredBug_RelatedBugReportsContainer'>
                        <div className='StarredBug_SearchContainer'>
                            <div className='StarredBug_SearchIcon'>
                                <Icon name='search' />
                            </div>
                            <input className='StarredBug_SearchInput' placeholder='Search for a bug report' onChange={(e) => handleSearch(e.target.value)}
                                value={searchText} />
                            {searchText.length > 0 &&
                                <div className='StarredBug_CrossIcon' onClick={() => handleSearch('')}>
                                    <Icon name='cross' />
                                </div>
                            }
                        </div>
                        <div className='BugTask_RelatedBugReportsCardsContainer'>
                            {relatedBugs.length > 0 && relatedBugs.map((bug, index) => {
                                return (
                                    <div className='StarredBug_RelatedBugReportsCard' key={index} onClick={() => handleSelect(bug)}>
                                        <div className='StarredBug_SelectedContainer'>
                                            {selectedBugReports.includes(bug) ?

                                                <div className='StarredBug_SelectedIcon always_shown'>
                                                    <Icon name='check' />
                                                </div>
                                                :

                                                <div className='StarredBug_SelectedIcon'>
                                                    <Icon name='plus' />
                                                </div>
                                            }
                                        </div>
                                        <p className='StarredBug_RelatedBugReportsCardText'>
                                            {bug.title}
                                        </p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className='StarredBug_ButtonContainer'>
                        <div className='StarredBug_Button' onClick={() => popupStore.closePopup(1)}>
                            Close
                        </div>
                        <div className='StarredBug_Button' onClick={() => handleSave()}>
                            Save
                        </div>
                    </div>
                </div>
            </div>
            <div className='StarredBug_Background' onClick={() => popupStore.closePopup(1)}>
            </div>
        </>
    )
}

export default observer(StarredBugComponent)