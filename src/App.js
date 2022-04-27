import Registration from './components/Registration';
import { useState, useEffect, useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.scss';

const App = () => {
  const [registrated, setRegistrated] = useState(true);

  const renderRegistration = () => {
    setRegistrated(!registrated);
  };

  return (
    <div className='App'>
      <Routes>
        <Route
          path='/'
          element={
            <Registration
              isRegistr={registrated}
              setRegistrated={setRegistrated}
            />
          }
        />
      </Routes>
    </div>
  );
};
export default App;
