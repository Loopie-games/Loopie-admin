import { observer } from 'mobx-react-lite'
import React, { useEffect, useState } from 'react'
import ReactDropdown from 'react-dropdown'
import { Bug, BUG_SERVERITY, BUG_STATUS, BUG_SORT_BY } from '../../../models/bugs/bugsInterfaces'
import { useStore } from '../../../stores/store'
import Icon from '../../Shared/icon/Icon'
import './Bug.scss'
import BugComponent from './BugComponent/BugComponent'

const BugC = () => {
  const { bugStore } = useStore()
  const [filteredBugs, setFilteredBugs] = useState<Bug[]>(bugStore.bugs)

  useEffect(() => {
    bugStore.sortBugs(BUG_SORT_BY.SEVERITY)
  }, [])

  useEffect(() => {
    setFilteredBugs(bugStore.bugs)
  }, [bugStore.bugs])

  const handleSort = (e: any) => {
    bugStore.sortBugs(e.value)
  }

  const handleSearch = async (query: string) => {
    if (query === '') {
      setFilteredBugs(bugStore.bugs)
      return
    }
    setFilteredBugs(bugStore.searchBugs(query))
  }

  return (
    <div className='BugPage_Container'>
      <div className='BugPage_TitleContainer'>
        TITLE
      </div>
      <div className='BugPage_BugContainer'>
        <div className='BugPage_BugTitleContainer'>
          <div className='BugPage_BugTitleWrapper'>
            <div className='BugPage_BugTitle'>Bug reports</div>
            <div className='BugPage_SearchContainer'>
              <div className='BugPage_SearchIcon'>
                <Icon name='search' />
              </div>
              <input className='BugPage_SearchInput' placeholder='Search' onChange={(e) => handleSearch(e.target.value)} />
            </div>
            <div className='BugPage_BugSortContainer'>
              <div className='BugPage_BugSortTitle'>Sort by:</div>
              <div className='BugPage_BugSortButtonContainer'>
                <ReactDropdown options={Object.values(BUG_SORT_BY)} onChange={(e) => handleSort(e)} className='BugPage_BugSortDropdown' controlClassName='BugComponent_StatusDropdownControl' menuClassName='BugComponent_StatusDropdownMenu' />
              </div>
            </div>
          </div>
          <div className='BugPage_Line'></div>
        </div>
        <div className='BugPage_BugWrapper'>
          {filteredBugs.map((bug) => {
            return <BugComponent {...bug} />
          })}
        </div>
      </div>
    </div>
  )
}

export default observer(BugC)