import { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Context } from "src/index";
import Registration from "src/components/Registration/Registration";
import Login from "src/components/Login/Login";
import 'src/App/app.scss'

const App = () => {
  const { store } = useContext(Context);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Navigate to = '/login' />} />
      </Routes>
    </div>
  );
};

export default App;