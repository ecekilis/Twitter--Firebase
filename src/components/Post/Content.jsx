import React from 'react'

function Content({ tweet }) {
    return (
        <div>
            <div className='my-4'>
                {tweet.textContent && <p> {tweet.textContent} </p>}

                {tweet.imageContent && <img src={tweet.imageContent}
                    className='my-2 w-full rounded-lg object-cover max-h-[400]'
                />}



            </div>
        </div>
    )
}

export default Content
