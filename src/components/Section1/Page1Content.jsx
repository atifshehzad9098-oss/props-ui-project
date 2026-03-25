import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1Content = (props) => {
  return (
    <div className='flex justify-between items-center gap-10 pt-2 pb-10 px-18 h-[87vh]'>
        <LeftContent />
        <RightContent users={props.users} />
    </div>
  )
}

export default Page1Content
