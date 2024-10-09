import React from 'react'
import UserInfo from './UserInfo'
import DropDown from './DropDown'
import Button from './Button'
import Content from './Content'

function Post({ tweet }) {


    return (
        <div className='flex gap-8 border-b py-6 px-3 border-zinc-60'>
            <img src={tweet.user.photo} className='w-12 h-12 rounded-full' alt="" />
            <div className='w-full'>
                <div className='flex justify-between '>
                    <UserInfo tweet={tweet} />
                    <DropDown tweet={tweet} />
                </div>
                <Content tweet={tweet} />
                <Button tweet={tweet} />
            </div>
        </div>
    )
}

export default Post
