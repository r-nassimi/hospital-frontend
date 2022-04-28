import Registration from "./components/Registration";
import Login from "./components/Login";
import { useState, useEffect, useContext } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.scss";

const App = () => {
  const [registrated, setRegistrated] = useState(true);

  const renderRegistration = () => {
    setRegistrated(!registrated);
  };

  return (
    <div className="App">
      <Routes>
        <Route
          path="/registration"
          element={
            <Registration
              isRegistr={registrated}
              setRegistrated={setRegistrated}
            />
          }
        />
        <Route
          path="/"
          element={
            <Login 
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
