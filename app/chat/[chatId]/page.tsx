import React from 'react'

interface paramsProp {
  chatId: string
}

const SingleChatPage = ({ params }: { params: paramsProp }) => {
  // console.log(params)

  return (
    <div>
      <h1 className='text-2xl text-base-content'>{params?.chatId}</h1>
      SingleChatPage
    </div>
  )
}

export default SingleChatPage
