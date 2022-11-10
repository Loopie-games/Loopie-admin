import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Bug, BUG_SERVERITY, BUG_STATUS } from '../../../models/bugs/bugsInterfaces'
import BugComponent from '../Bug/BugComponent/BugComponent'
import './Dashboard.scss'

const Dashboard = () => {
  const navigate = useNavigate()

  const navigateTo = (path: string) => {
    navigate(path)
  }

  const testBugs: Bug[] = [
    {
      id: 1,
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque mollitia sapiente a veniam, facere saepe dolorum sequi aperiam soluta maiores asperiores, voluptatibus consequuntur, repudiandae culpa dolore dolores. Ipsam, exercitationem provident!',
      severity: BUG_SERVERITY.SEVERE,
      status: BUG_STATUS.NEW,
      createdDate: new Date(),
    },
    {
      id: 2,
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque mollitia sapiente a veniam, facere saepe dolorum sequi aperiam soluta maiores asperiores, voluptatibus consequuntur, repudiandae culpa dolore dolores. Ipsam, exercitationem provident!',
      severity: BUG_SERVERITY.MAJOR,
      status: BUG_STATUS.NEW,
      createdDate: new Date(),
    },
    {
      id: 3,
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque mollitia sapiente a veniam, facere saepe dolorum sequi aperiam soluta maiores asperiores, voluptatibus consequuntur, repudiandae culpa dolore dolores. Ipsam, exercitationem provident!',
      severity: BUG_SERVERITY.MINOR,
      status: BUG_STATUS.NEW,
      createdDate: new Date(),
    },
    {
      id: 4,
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque mollitia sapiente a veniam, facere saepe dolorum sequi aperiam soluta maiores asperiores, voluptatibus consequuntur, repudiandae culpa dolore dolores. Ipsam, exercitationem provident!',
      severity: BUG_SERVERITY.TRIVIAL,
      status: BUG_STATUS.NEW,
      createdDate: new Date(),
    },
    {
      id: 1,
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque mollitia sapiente a veniam, facere saepe dolorum sequi aperiam soluta maiores asperiores, voluptatibus consequuntur, repudiandae culpa dolore dolores. Ipsam, exercitationem provident!',
      severity: null,
      status: BUG_STATUS.NEW,
      createdDate: new Date(),
    },    {
      id: 1,
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque mollitia sapiente a veniam, facere saepe dolorum sequi aperiam soluta maiores asperiores, voluptatibus consequuntur, repudiandae culpa dolore dolores. Ipsam, exercitationem provident!',
      severity: null,
      status: BUG_STATUS.NEW,
      createdDate: new Date(),
    },    {
      id: 1,
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque mollitia sapiente a veniam, facere saepe dolorum sequi aperiam soluta maiores asperiores, voluptatibus consequuntur, repudiandae culpa dolore dolores. Ipsam, exercitationem provident!',
      severity: null,
      status: BUG_STATUS.NEW,
      createdDate: new Date(),
    },    {
      id: 1,
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque mollitia sapiente a veniam, facere saepe dolorum sequi aperiam soluta maiores asperiores, voluptatibus consequuntur, repudiandae culpa dolore dolores. Ipsam, exercitationem provident!',
      severity: null,
      status: BUG_STATUS.NEW,
      createdDate: new Date(),
    },    {
      id: 1,
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque mollitia sapiente a veniam, facere saepe dolorum sequi aperiam soluta maiores asperiores, voluptatibus consequuntur, repudiandae culpa dolore dolores. Ipsam, exercitationem provident!',
      severity: null,
      status: BUG_STATUS.NEW,
      createdDate: new Date(),
    },    {
      id: 1,
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque mollitia sapiente a veniam, facere saepe dolorum sequi aperiam soluta maiores asperiores, voluptatibus consequuntur, repudiandae culpa dolore dolores. Ipsam, exercitationem provident!',
      severity: null,
      status: BUG_STATUS.NEW,
      createdDate: new Date(),
    },    {
      id: 1,
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque mollitia sapiente a veniam, facere saepe dolorum sequi aperiam soluta maiores asperiores, voluptatibus consequuntur, repudiandae culpa dolore dolores. Ipsam, exercitationem provident!',
      severity: null,
      status: BUG_STATUS.NEW,
      createdDate: new Date(),
    },    {
      id: 1,
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque mollitia sapiente a veniam, facere saepe dolorum sequi aperiam soluta maiores asperiores, voluptatibus consequuntur, repudiandae culpa dolore dolores. Ipsam, exercitationem provident!',
      severity: null,
      status: BUG_STATUS.NEW,
      createdDate: new Date(),
    },    {
      id: 1,
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque mollitia sapiente a veniam, facere saepe dolorum sequi aperiam soluta maiores asperiores, voluptatibus consequuntur, repudiandae culpa dolore dolores. Ipsam, exercitationem provident!',
      severity: null,
      status: BUG_STATUS.NEW,
      createdDate: new Date(),
    },    {
      id: 1,
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque mollitia sapiente a veniam, facere saepe dolorum sequi aperiam soluta maiores asperiores, voluptatibus consequuntur, repudiandae culpa dolore dolores. Ipsam, exercitationem provident!',
      severity: null,
      status: BUG_STATUS.NEW,
      createdDate: new Date(),
    },    {
      id: 1,
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque mollitia sapiente a veniam, facere saepe dolorum sequi aperiam soluta maiores asperiores, voluptatibus consequuntur, repudiandae culpa dolore dolores. Ipsam, exercitationem provident!',
      severity: null,
      status: BUG_STATUS.NEW,
      createdDate: new Date(),
    },    {
      id: 1,
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque mollitia sapiente a veniam, facere saepe dolorum sequi aperiam soluta maiores asperiores, voluptatibus consequuntur, repudiandae culpa dolore dolores. Ipsam, exercitationem provident!',
      severity: null,
      status: BUG_STATUS.NEW,
      createdDate: new Date(),
    },
  ]

  

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
              {testBugs.map((bug) => {
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
        <div className='DashboardComponent_TilepackContainer'>          <div className='DashboardComponent_Wrapper'>
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
        <div className='DashboardComponent_UserManagementContainer'>          <div className='DashboardComponent_Wrapper'>
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

export default Dashboard