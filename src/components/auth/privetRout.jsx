import React from "react";
import {Outlet, Navigate} from "react-router-dom";

const useAuthenticate = () => {
    return true;
}
const PrivetRoute = () => {
    const isAuthenticate = useAuthenticate();
    return isAuthenticate ? <Outlet/>:<Navigate to='/'/>
}
export default PrivetRoute;