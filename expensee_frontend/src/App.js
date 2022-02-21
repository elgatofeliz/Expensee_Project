// Modules Imports
import { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Styling Imports
import './scss/main.scss';

//Components Imports
import Header from "./components/Header/Header"
import Footer from './components/Footer/Footer'
import DevNav from "./Dev_items/DevNav.js"

//Pages Imports
import Welcome from "./pages/Welcome/Welcome.js"
import Login from "./pages/Login/Login.js"
import Register from "./pages/Register/Register.js"
import Chart from "./pages/Chart/Chart.js"
import Transactions from "./pages/Transactions/Transactions.js"
import AddTransaction from "./pages/AddTransaction/AddTransaction.js"
import Error from "./pages/Error/Error.js"

// Constant Imports
import testUser from './Dev_items/testuser';

function App() {
  // Importing user data from server at the first load 
  // States
  const [token, setToken] = useState('false')
  const [loggedUserData, setLoggedUserData] = useState(testUser)

  // cookies
  const [cookies, setCookie, removeCookie] = useCookies(['name']);
  setCookie("Hallo", "ich bin ein cookies")
  setCookie("zwei", "ich bin ein zwei")
  removeCookie("zwei", "ich bin ein zwei")

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={token ? <Chart user={loggedUserData} /> : <Welcome />} />
          <Route path="/addtransaction" element={<AddTransaction token={cookies} changeUserData={setLoggedUserData} user={loggedUserData} id={loggedUserData._id} />} />
          <Route path="/chart" element={<Chart user={loggedUserData} />} />
          <Route path="/login" element={<Login tokenSetter={setToken} changeUserData={setLoggedUserData} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/transactions" element={<Transactions user={loggedUserData} changeUserData={setLoggedUserData} />} />
          <Route path="*" element={<Error />} />
          <Route path="/welcome" element={<Welcome />} />
        </Routes>
        {token && <Footer />}
      </Router>
    </div >
  );
}

export default App;
