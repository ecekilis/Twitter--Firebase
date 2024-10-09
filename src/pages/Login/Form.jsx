import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { auth } from '../../firebase';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import ResetButton from './ResetButton';

function Form() {

    const [isSignUp, setIsSignUp] = useState(true);

    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [isError, setIsError] = useState(false);


    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isSignUp) {
            //yeni kullanici hesabi olustur
            createUserWithEmailAndPassword(auth, email, pass)
                .then(() => {
                    toast.success("hesab olusturuldu");
                    navigate("/feed")
                })
                .catch((err) => toast.error("hata : " + err.code))

        }
        else {
            //varolan hesaba giris yap

            signInWithEmailAndPassword(auth, email, pass)
                .then(() => {
                    toast.success("hesaba giris yapildi");
                    navigate("/feed")
                })
                .catch((err) => {
                    toast.error("hata : " + err.code)

                    if (err.code === "auth/invalid-credential") { setIsError(true) }
                })

        }
    }


    return (
        <>
            <form onSubmit={handleSubmit} className='flex flex-col'>
                <label >Email</label>
                <input onChange={(e) => setEmail(e.target.value)} type="text" required className='text-black rounded mt-1 p-2 outline-none shadow-lg focus:shadow-[gray]' />

                <label className='mt-5'>Password</label>
                <input onChange={(e) => setPass(e.target.value)} type="text" required className='text-black rounded mt-1 p-2 outline-none shadow-lg focus:shadow-[gray]' />

                <button type="submit" className='mt-10 bg-white rounded-full text-black font-bold p-1 transition hover:bg-gray-30'>
                    {isSignUp ? "Kaydol" : "Giris Yap"}
                </button>
            </form>

            <p className='mt-5 m-auto'>
                <span className='text-gray-500'>

                    {isSignUp ? "Hesabiniz varsa" : "Hesabiniz yoksa"}
                </span>
                <span onClick={() => setIsSignUp(!isSignUp)} className='text-blue-500 cursor-pointer ml-2'>

                    {isSignUp ? "Giris Yapin" : "Kaydolun"}</span>
            </p>

            {isError && <ResetButton email={email} />}
        </>
    )
}

export default Form
