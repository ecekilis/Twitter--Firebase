import React, { useEffect, useState } from 'react'
import Form from '../../components/Form'
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { db } from '../../firebase';
import Loader from '../../components/Loader';
import Post from '../../components/Post';


function Main({ user }) {

    const [tweets, setTweets] = useState();


    useEffect(() => {
        const ref = collection(db, "tweets");
        const q = query(ref, orderBy("createdAt", "desc"));
        const unsub = onSnapshot(q, (snapshot) => {
            const temp = [];
            snapshot.docs.forEach((doc) => temp.push({ id: doc.id, ...doc.data() }));
            setTweets(temp);
        })

        return () => unsub();

    }, [])


    console.log(tweets);
    return (
        <main className='border border-zinc-600 overflow-y-auto '>
            <header className='border-b border-zinc-600 
            p-4 font-bold' >Anasayfa</header>

            <Form user={user} />
            {!tweets ? (<div className='flex justify-center my-20 scale-[1.5]'> <Loader /> </div>) : tweets.map((tweet) =>
                <Post tweet={tweet} key={tweet.id} />

            )}

        </main>
    )
}

export default Main
