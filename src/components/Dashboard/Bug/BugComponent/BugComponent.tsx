
import { observer } from 'mobx-react-lite'
import React from 'react'
import ReactDropdown from 'react-dropdown'
import { Bug, BUG_SERVERITY, BUG_SORT_BY, BUG_STATUS } from '../../../../models/bugs/bugsInterfaces'
import { useStore } from '../../../../stores/store'
import Icon from '../../../Shared/icon/Icon'
import './BugComponent.scss'
const BugComponent = (data: Bug) => {
    const { bugStore, authStore } = useStore()

    const getSeverity = () => {
        switch (data.severity) {
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

    const getCurrentPath = () => {
        const path = window.location.pathname
        return path
    }

    const handleAssign = () => {
        console.log('Assign')
        console.log(authStore.user);
        
        bugStore.claimBug(data.id, authStore.user)
        console.log(data.asignee);
    }

    const handleChangeStatus = (e: any) => {
        console.log(e.value);
        bugStore.changeStatus(data.id, e.value)
    }

    const handleDelete = () => {
        console.log('Delete')
        bugStore.deleteBug(data.id)
    }




    return (
        <div className='BugComponent_Container'>
            <div className={`BugComponent_SeverityContainer ${getSeverity()}`}></div>
            <div className={`BugComponent_RestContainer ${getCurrentPath() === '/bug' ? 'BugComponent_OnSite' : 'BugComponent_OffSite'}`}>
                <div className='BugComponent_DescriptionContainer'>
                    <span className='BugComponent_Description'>
                    {data.description}
                    </span>
                </div>
                {getCurrentPath() === '/bug' && <>
                    <div className='BugComponent_StatusContainer'>
                        <ReactDropdown onChange={handleChangeStatus} className='BugComponent_StatusDropdown' controlClassName='BugComponent_StatusDropdownControl' menuClassName='BugComponent_StatusDropdownMenu' options={Object.values(BUG_STATUS)} value={data.status} />

                    </div>

                    <div className='BugComponent_AssigneeContainer'>
                        {data.asignee === null ?
                            <button className='BugComponent_ClaimButton' onClick={handleAssign}>Claim</button>:  
                            <div className='BugComponent_Assignee'>{data.asignee}</div>
                        }
                    </div>
                    <div className='BugComponent_MoreContainer' onClick={handleDelete}>
                        <Icon name='cross'  />
                    </div>

                </>
                }
            </div>
        </div>
    )
}

export default observer(BugComponent)