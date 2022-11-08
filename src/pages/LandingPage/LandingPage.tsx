import './LandingPage.scss'

import { observer } from 'mobx-react-lite';
const LandingPage = () => {
  return (
    <div className='LandingPage_Container'>
      <div className='LandingPage_Wrapper'>
        <h1 className='LandingPage_Title'>Now, go make something cool</h1>
      </div>
    </div>
  )
}

export default observer(LandingPage)