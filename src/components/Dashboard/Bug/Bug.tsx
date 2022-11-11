import { observer } from 'mobx-react-lite'
import React from 'react'
import {Bug, BUG_SERVERITY, BUG_STATUS } from '../../../models/bugs/bugsInterfaces'
import { useStore } from '../../../stores/store'
import './Bug.scss'
import BugComponent from './BugComponent/BugComponent'

const BugC = () => {
  const {bugStore} = useStore()


  return (
    <div className='BugPage_Container'>
      <div className='BugPage_TitleContainer'>
        TITLE
      </div>
      <div className='BugPage_BugContainer'>
        <div className='BugPage_BugTitleContainer'>
          Title
          <div className='BugPage_Line'></div>
        </div>
        <div className='BugPage_BugWrapper'>
          {bugStore.bugs.map((bug) => {
            return <BugComponent {...bug} />
          })}
        </div>
      </div>
    </div>
  )
}

export default observer(BugC)