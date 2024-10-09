import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import React, { useState } from 'react'
import { BsCardImage } from 'react-icons/bs'
import { toast } from 'react-toastify';
import { db, auth, storage } from '../../firebase';
import Loader from '../Loader';
import upload from '../../utils/upload';
upload

function Form({ user }) {

    const [isLoading, setIsLoading] = useState(false);
    const handleSubmit = async (e) => {



        e.preventDefault();
        const text = e.target[0].value;
        const image = e.target[1].files[0];


        if (!text && !image)
            return toast.warning("lutfen icerik girin",
                { position: "bottom-right" })


        try {
            setIsLoading(true);

            const url = await upload(image);


            //resmi storage'a ekle

            const tweetsCol = collection(db, "tweets");

            await addDoc(tweetsCol, {
                textContent: text,
                imageContent: url,
                likes: [],
                createdAt: serverTimestamp(),
                isEdited: false,
                user: {
                    id: auth.currentUser.uid,
                    name: auth.currentUser.displayName,
                    photo: auth.currentUser.photoURL
                }
            })


            e.target.reset();
        }
        catch (err) {
            console.log(err);
            toast.error("bir sorun olustu")
        }


    };



    return (
        <form onSubmit={handleSubmit} className='flex gap-3 border-b border-zinc-600 p-4'>
            <img src={user?.photoURL} alt="" className='rounded-full h-[35px] md:h-[45px]' />
            <div className='w-full'>
                <input className='w-full mt-1 mb-2 
                bg-transparent outline-none md:text-lg'
                    type="text"
                    placeholder='Neler Oluyor?' />

                <div className='flex justify-between items-center'>

                    <label className='text-lg transition p-4 
                    cursor-pointer rounded-full hover:bg-gray-800'
                        htmlFor="image">
                        <BsCardImage />
                    </label>



                    <input className='hidden' id="image" type="file" />
                    <button>a</button>
                    <button className='bg-blue-600 px-3 py-2 min-w-[85px]
                    rounded-full transition hover:bg-blue-800' >Tweetle
                    </button>
                </div>
            </div>
        </form>
    )
}

export default Form
