import { useEffect, useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Context } from "src/index";
import Registration from "src/components/Registration/Registration";
import Login from "src/components/Login/Login";
import Reception from "src/components/Reception/Reception";
import 'src/App/app.scss'

const App = () => {
  const {store} = useContext(Context);
  
  useEffect(() => {
      store.checkAuthorization()
  }, [store])

  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/reception" element={<Reception />} />

        {/* Redirect from empty adress to login form */}
        <Route path="/" element={<Navigate replace to = "/login"/>} />
      </Routes>
    </div>
  );
};

export default App;