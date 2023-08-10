import {Routes, Route, Navigate} from "react-router-dom";
import Home from "../pages/Home/Home";
// import {Main} from "../pages/Character/Main";
import Main from "../pages/Character/Main";

function AppRoute ()
{
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/character" element={<Main />} />

      <Route path="*" element={<Navigate to={"/"} />} />
    </Routes>
  );
}

export default AppRoute;
