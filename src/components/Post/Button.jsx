import React from 'react'
import { LuMessageCircle } from 'react-icons/lu'
import { FaHeart, FaRegHeart, FaRetweet } from "react-icons/fa"
import { CiShare2 } from "react-icons/ci"
import { arrayRemove, arrayUnion, doc, updateDoc } from 'firebase/firestore';
import { auth, db } from '../../firebase';

function Button({ tweet }) {
    const isLiked = tweet.likes.includes(auth.currentUser.uid);

    const toogleLike = async () => {
        const tweetRef = doc(db, "tweets", tweet.id);


        await updateDoc(tweetRef, {
            likes: isLiked
                ? arrayRemove(auth.currentUser.uid)
                : arrayUnion(auth.currentUser.uid),
        });
    };


    return (
        <div className='flex justify-between items-center'>
            <div className='p-3 rounded-full 
                cursor-pointer transition hover:bg-[#c5c5ff85]' >
                <LuMessageCircle />
            </div>
            <div className='p-3 rounded-full 
                cursor-pointer transition hover:bg-[#c7ffc585]' >
                <FaRetweet />
            </div>
            <div onClick={toogleLike} className='p-3 rounded-full 
                cursor-pointer transition hover:bg-[rgba(249,65,219,0.42)]
                 flex items-center gap-2' >

                {isLiked ? <FaHeart className='text-red-500' /> : <FaRegHeart />}
                {tweet.likes.length}
            </div>
            <div className='p-3 rounded-full 
                cursor-pointer transition hover:bg-[#c5c5ff85]' >
                <CiShare2 />
            </div>
        </div>
    )
}

export default Button
