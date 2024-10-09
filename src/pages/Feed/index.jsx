import React, { useEffect, useState } from 'react'
import { auth } from '../../firebase'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import Nav from './Nav'
import Main from './Main'
import Aside from './Aside'

function Feed() {

    const [user, setUser] = useState();

    useEffect(() => {
        //kullanici hesap bilgilerini alip, state'e aktardik
        const unsub = onAuthStateChanged(auth, (user_data) => {
            setUser(user_data);
        });

        //bilesen ekrandan ayrildiginda kullanici oturumunu izlemeyi durduruyoruz
        return () => {
            unsub();
        }

    }, []);


    return (
        <div className='feed h-screen bg-black overflow-hidden text-white'>

            <Nav user={user} />
            <Main user={user} />
            <Aside />
        </div>
    )
}

export default Feed
