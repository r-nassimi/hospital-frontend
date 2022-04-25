import Registration from './components/Registration';
import { useState, useEffect, useContext } from 'react'

const App = () => {
  const [registrated, setRegistrated] = useState(true);

  const renderRegistration = () => {
    setRegistrated(!registrated);
  }

  return(
    <div className='App'>
      <Registration>
      isRegistr={ registrated }
      setRegistrated={ setRegistrated }
      </Registration>
    </div>
  )
}
export default App;
