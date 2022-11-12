import React from 'react'
import {Bug, BUG_SERVERITY, BUG_STATUS, BugReport} from '../../../../models/bugs/bugsInterfaces'
import './BugComponent.scss'
const BugComponent = (data: BugReport) => {

    /*
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

     */

    const getCurrentPath = () => {
        const path = window.location.pathname
        return path
    }

/*
    return (
        <div className='BugComponent_Container'>
            <div className={`BugComponent_SeverityContainer ${getSeverity()}`}></div>
            <div className='BugComponent_RestContainer'>
                <div className='BugComponent_DescriptionContainer'>
                    <div className='BugComponent_Description'>{data.description}</div>
                </div>
                { getCurrentPath() === '/bug' && 
                    <div className='BugComponent_StatusContainer'>
                        <select name="status" id="status" className='BugComponent_StatusDropdown'>
                            {Object.values(BUG_STATUS).map((key, index) => {
                                return <option value={key} className='BugComponent_StatusOption'>{key}</option>
                            })}
                        </select>
                    </div>
                }
            </div>
        </div>
    )

 */

    return (
        <div className='BugComponent_Container'>
            <div className='BugComponent_RestContainer'>
                <div className='BugComponent_DescriptionContainer'>
                    <div className='BugComponent_Description'>{data.title}</div>
                </div>
            </div>
        </div>
    )
}

export default BugComponent