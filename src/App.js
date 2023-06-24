import {Routes,Route} from "react-router-dom";
import Admin from "./pages/authentication/admin";
import User from "./pages/authentication/user";
import UserHome from "./pages/userhome";
import AdminHome from "./pages/adminhome";
import Cookies from "js-cookie";
import { useEffect } from "react";
import {useNavigate} from "react-router-dom";
import UserReg from "./pages/authentication/userReg";
function App() {
  const navigate = useNavigate();
  useEffect(() => {
    if(Cookies.get("userType")==="user" || Cookies.get("userType")===undefined)
      {
        navigate('/login/user');
        Cookies.remove("userType");
      }
      else if(Cookies.get("userType")==="admin")
      {
      navigate('/login/admin');
      Cookies.remove("userType");
      }
      else if(Cookies.get("userType")==="User Logged In")
      {
      navigate('/user');
      Cookies.remove("userType");
      }
      else if(Cookies.get("userType")==="Admin Logged In")
      {
      navigate('/admin');
      Cookies.remove("userType");
      }
  }, []);// eslint-disable-line react-hooks/exhaustive-deps
  return (
    <Routes>
      <Route exact path="/" element={Cookies.get('username')!=='' ? <UserHome /> : <User />} />
      <Route exact path="/user" element={<UserHome/>}/>
      <Route exact path="/admin" element={<AdminHome/>}/>
      <Route exact path="/login/admin" element={<Admin/>}/>
      <Route exact path="/login/user" element={<User/>}/>
      <Route exact path="/register/user" element={<UserReg/>}/>
    </Routes>
  );
}

export default App;
