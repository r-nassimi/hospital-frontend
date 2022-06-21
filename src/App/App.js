import { useEffect, useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { Context } from "src/index";
import Registration from "src/components/Registration/Registration";
import Login from "src/components/Login/Login";
import Reception from "src/components/Reception/Reception";
import SecureRoute from "src/components/Security/Security";
import "src/App/app.scss";

const App = () => {
  const { store } = useContext(Context);

  useEffect(() => {
      tokenRefresh();
  }, []);

  const tokenRefresh = async () => {
    await store.checkAuthorization()
    return;
  }

  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />

        {/* Redirect from empty adress to login form */}
        <Route path="/" element={<Login />} />
        <Route path="/" element={<SecureRoute />}>
          <Route path="/reception" element={<Reception />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
