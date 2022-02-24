// Modules Imports
import { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { fetchUserData } from './api/fetchUserData'
import { Navigate, Outlet, BrowserRouter as Router, Routes, Route } from "react-router-dom"
// import axios from 'axios';

//Components Imports
import Header from "./components/Header/Header"
import Footer from './components/Footer/Footer'

//Pages Imports
import Welcome from "./pages/Welcome/Welcome.js"
import Login from "./pages/Login/Login.js"
import Register from "./pages/Register/Register.js"
import Chart from "./pages/Chart/Chart.js"
import Transactions from "./pages/Transactions/Transactions.js"
import AddTransaction from "./pages/AddTransaction/AddTransaction.js"
import Error from "./pages/Error/Error.js"

// Styling Imports
import './scss/main.scss';

// Constant Imports
import testUser from './Dev_items/testuser';

// const { isAuthenticated } = require("./api/isAuthenticated.js")

function App() {
  // useEffect(() => {
  //   if (isUserLoggedIn) {
  //     fetchUserData()
  //       .then((data) => setLoggedUserData(data))
  //   }
  // }, [isUserLoggedIn, newTransaction]) // cookies und newTransaktion sind die useEffekt dependecies

  // um Cookies zu schicken
  // useEffect(() => {
  //   // isUserLoggedIn &&
  //   fetch('http://localhost:9000/sendCookies', {
  //     credentials: "include"
  //   })
  // }, [isUserLoggedIn])

  // setIsUserLoggedIn(true)
  // user Datei zu setzen

  // Importing user data from server at the first load 
  // States
  const [token, setToken] = useState('false')
  const [loggedUserData, setLoggedUserData] = useState(testUser)
  const [title, setTitle] = useState(false)
  const [titleChart, setTitleChart] = useState(false)
  const [titleTrans, setTitleTrans] = useState(false)
  const [newTransaction, setNewTransaction] = useState(3)
  const [awaitResponse, setAwaitResponse] = useState(false)
  const [authenticated, setAuthenticated] = useState(false)
  const [location, setLocation] = useState(false)
  // cookies
  const [cookies, setCookie, removeCookie] = useCookies(['name']);
  // fetch user data
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(3)

  const url = 'http://localhost:3000/'

  //Get Userdata from Database to show account balance
  useEffect(() => {
    fetchUserData()
      .then((response) => {
        setLoggedUserData(response.userData)
      }
      )
  }, [isUserLoggedIn, newTransaction, authenticated])

  useEffect(() => {
    fetchUserData()
    console.log(loggedUserData)
  }, [loggedUserData])

  useEffect(() => {
    console.log(location)
  }, [location])

  useEffect(() => {
    setLocation(window.location.href)
  })



  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/login" element={<Login
            tokenSetter={setToken} setTitle={setTitle}
            setTitleChart={setTitleChart} setTitleTrans={setTitleTrans}
            changeUserData={setLoggedUserData} setAuthenticated={setAuthenticated}
            setAwaitResponse={setAwaitResponse}
          />} />
          <Route path="/register" element={<Register />} />
          <Route path="/addtransaction" element={<AddTransaction newTransaction={newTransaction} setNewTransaction={setNewTransaction} setTitle={setTitle} setTitleChart={setTitleChart} setTitleTrans={setTitleTrans} changeUserData={setLoggedUserData} user={loggedUserData} token={token} />} />
          <Route path="/chart" element={<Chart setAuthenticated={setAuthenticated} setAwaitResponse={setAwaitResponse} user={loggedUserData} setTitle={setTitle} setTitleChart={setTitleChart} setTitleTrans={setTitleTrans} />} />
          <Route path="/transactions" element={<Transactions setTitle={setTitle} setTitleChart={setTitleChart} setTitleTrans={setTitleTrans} user={loggedUserData} changeUserData={setLoggedUserData} />} />
          <Route path="*" element={<Error />} />

        </Routes>
        {(location != `${url}login` &&
          location != `${url}register` &&
          location != `${url}`
        )
          && <Footer title={title} titleChart={titleChart} titleTrans={titleTrans} />}
      </Router>
    </div >
  );
}

export default App;
