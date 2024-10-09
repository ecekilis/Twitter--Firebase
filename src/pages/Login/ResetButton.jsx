import React from 'react'
import { auth } from '../../firebase'
import { sendPasswordResetEmail } from 'firebase/auth'
import { toast } from 'react-toastify'

function ResetButton({ email }) {

    const handleReset = () => {
        sendPasswordResetEmail(auth, email)
            .then(() => toast.info("sifre sifirlama epostas gonderildi. mailinizi kontrol edin"))
            .catch(() => toast.error("mail gonderilemiyor"))
    }

    return (
        <button onClick={handleReset} className='text-red-500' >Sifrenizi mi unuttunuz?</button>
    )
}

export default ResetButton
