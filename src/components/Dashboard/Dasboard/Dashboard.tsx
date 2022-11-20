
import { observer } from 'mobx-react-lite'
import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import {Bug, BUG_SERVERITY, BUG_STATUS, BugReport} from '../../../models/bugs/bugsInterfaces'
import { useStore } from '../../../stores/store'
import BugComponent from '../Bug/BugComponent/BugComponent'
import './Dashboard.scss'

const Dashboard = () => {
  const navigate = useNavigate()
  const {bugStore, bugReportStore} = useStore();
  const [bugReports, setBugReports] = useState <BugReport[]>([]);

  const navigateTo = (path: string) => {
    navigate(path)
  }

  const initBugReports = async () => {
    setBugReports(await bugReportStore.getAll())
  }
  useEffect(()=>{
    initBugReports()

  }, [])



  return (
    <div className='DashboardComponent_Container'>
      <div className='DashboardComponent_Title'>Loopie - Admin Dashboard</div>
      <div className='DashboardComponent_GridContainer'>
        <div className='DashboardComponent_BugContainer'>
          <div className='DashboardComponent_Wrapper'>
            <div className='DashboardComponent_TitleContainer'>
              <div className='DashboardComponent_TitleWrapper'>
                <div className='DashboardComponent_CTitle'>Bug reports</div>
                <button className='DashboardComponent_More' onClick={() => navigateTo('/bug')}>More</button>
              </div>
              <div className='DashboardComponent_Line'></div>
            </div>
            <div className='DashboardComponent_ContentContainer'>
              {bugReports.map((bug) => {
                return <BugComponent {...bug} />
              })}
            </div>
          </div>
        </div>
        <div className='DashboardComponent_FeedbackContainer'>
          <div className='DashboardComponent_Wrapper'>
            <div className='DashboardComponent_TitleContainer'>
              <div className='DashboardComponent_TitleWrapper'>
                <div className='DashboardComponent_CTitle'>Feedback</div>
                <button className='DashboardComponent_More' onClick={() => navigateTo('/feedback')}>More</button>
              </div>
              <div className='DashboardComponent_Line'></div>
            </div>
            <div className='DashboardComponent_ContentContainer'>

            </div>
          </div>
        </div>
        <div className='DashboardComponent_TilepackContainer'>
          <div className='DashboardComponent_Wrapper'>
            <div className='DashboardComponent_TitleContainer'>
              <div className='DashboardComponent_TitleWrapper'>
                <div className='DashboardComponent_CTitle'>Tilepacks</div>
                <button className='DashboardComponent_More' onClick={() => navigateTo('/tilepack')}>More</button>
              </div>
              <div className='DashboardComponent_Line'></div>
            </div>
            <div className='DashboardComponent_ContentContainer'>

            </div>
          </div>
        </div>
        <div className='DashboardComponent_UserManagementContainer'>
          <div className='DashboardComponent_Wrapper'>
            <div className='DashboardComponent_TitleContainer'>
              <div className='DashboardComponent_TitleWrapper'>
                <div className='DashboardComponent_CTitle'>User management</div>
                <button className='DashboardComponent_More' onClick={() => navigateTo('/usermanagement')}>More</button>
              </div>
              <div className='DashboardComponent_Line'></div>
            </div>
            <div className='DashboardComponent_ContentContainer'>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default observer(Dashboard)