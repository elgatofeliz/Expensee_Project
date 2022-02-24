import React from 'react'
import Welcome from "../pages/Welcome/Welcome.js"
import { Navigate, Outlet } from 'react-router-dom'
const { isAuthenticated } = require("../api/isAuthenticated.js")


const isAuth = async () => {
    const authenticated = await isAuthenticated()
    return authenticated
}

export default async function ProtectedRoutes() {
    const auth = await isAuth()
    console.log("ProtectedRoutes", auth.token)

    const element = auth.token ? <Outlet /> : <Welcome />
    console.log("Element: ", element)
    return auth
}