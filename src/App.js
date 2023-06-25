import {Routes,Route} from "react-router-dom";
import Admin from "./pages/authentication/admin";
import User from "./pages/authentication/user";
import UserHome from "./pages/userhome";
import AdminHome from "./pages/adminhome";
import Cookies from "js-cookie";
import { useEffect } from "react";
import {useNavigate} from "react-router-dom";
import UserReg from "./pages/authentication/userReg";
import Paytax from "./pages/userOptions/paytax";
import ViewGovernmentSchemes from "./pages/userOptions/viewGovSchemes";
import ViewPendingTransactions from "./pages/userOptions/viewPendingTrans";
import ViewTax from "./pages/userOptions/viewTax";
import ManageTaxes from "./pages/adminOptions/manageTaxes";
import Page2 from "./pages/adminOptions/page2";
import UserTransactionHistory from "./pages/adminOptions/userTransactionHistory";
import GovernmentSchemes from "./pages/adminOptions/govSchemes";
import AddUserTransaction from "./pages/adminOptions/addUserTransaction";
import AddFine from "./pages/adminOptions/addfine";
import ViewFine from "./pages/adminOptions/viewfine";
import Payfine from "./pages/userOptions/payfine";
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
      <Route exact path="/user/paytax" element={<Paytax/>}/>
      <Route exact path="/user/viewgovschemes" element={<ViewGovernmentSchemes/>}/>
      <Route exact path="/user/viewpendingtransactions" element={<ViewPendingTransactions/>}/>
      <Route exact path="/user/viewtax" element={<ViewTax/>}/>
      <Route exact path="/admin/managetaxes" element={<ManageTaxes/>}/>
      <Route exact path="/admin/managetaxes/page2" element={<Page2/>}/>
      <Route exact path="/admin/usertransactionhistory" element={<UserTransactionHistory/>}/>
      <Route exact path="/admin/governmentschemes" element={<GovernmentSchemes/>}/>
      <Route exact path="/admin/addusertransaction" element={<AddUserTransaction/>}/>
      <Route exact path="/admin/addfine" element={<AddFine/>}/>
      <Route exact path="/admin/viewfine" element={<ViewFine/>}/>
      <Route exact path="/user/payfine" element={<Payfine/>}/>
    </Routes>
  );
}

export default App;
