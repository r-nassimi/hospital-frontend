import Registration from "./components/Registration";
import { useState, useEffect, useContext } from "react";
import "./App.scss";

const App = () => {
  const [registrated, setRegistrated] = useState(true);

  const renderRegistration = () => {
    setRegistrated(!registrated);
  };

  return (
    <div className="App">
      <Registration isRegistr={registrated} setRegistrated={setRegistrated} />
    </div>
  );
};
export default App;

