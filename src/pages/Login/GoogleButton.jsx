import { signInWithPopup } from 'firebase/auth'
import React from 'react'
import { auth, provider } from '../../firebase'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

function GoogleButton() {

    const navigate = useNavigate();

    const handleLogin = () => {
        signInWithPopup(auth, provider)
            .then(() => {
                toast.success("oturum acildi")
                navigate("/feed")
            })
            .catch((err) => toast.err("hata : " + err.code))
    }

    return (
        <button onClick={handleLogin} className='bg-white flex items-center px-10 py-2 rounded-full gap-3 transition hover:bg-gray-300 text-black whitespace-nowrap'>
            <img src="g-logo.png" className='h-[20px]' alt="" />
            Google ile Giris Yap
        </button>
    )
}

export default GoogleButton
