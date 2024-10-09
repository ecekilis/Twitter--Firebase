import { onAuthStateChanged } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { Navigate, Outlet, useNavigate, useSearchParams } from 'react-router-dom'
import { auth } from '../../firebase';

function Protected() {

    //yetkisi var mi state'i
    const [isAuth, setIsAuth] = useState();

    //kullanicinin oturum bilgilerini al
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setIsAuth(user ? true : false);
        })
    }, []);




    if (isAuth === false) {
        return <Navigate to="/" replace />

    }
    return (
        <Outlet />
    )
}

export default Protected
