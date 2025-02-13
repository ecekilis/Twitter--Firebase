import moment from 'moment';
import React from 'react'
import { MdEdit } from 'react-icons/md';

function UserInfo({ tweet }) {


    const userName = tweet.user.name.toLowerCase().replace(/ /g, "_") +
        Math.round(Math.random() * 99);

    let date = tweet.createdAt?.toDate();
    date = moment(date).fromNow();


    return (
        <div className='flex gap-3 items-center whitespace-nowrap'>
            <p>{tweet.user.name}</p>
            <p className='text-gray-400 text-sm'>@{userName}</p>
            <p className='text-gray-400 text-sm'>{date}</p>
            {tweet.isEdited && (
                <p className='text-gray-400 text-xs'>
                    <MdEdit className="md:hidden" />
                    <span className='max-md:hidden' >duzenlendi</span>
                </p>
            )}
        </div>
    )
}

export default UserInfo


