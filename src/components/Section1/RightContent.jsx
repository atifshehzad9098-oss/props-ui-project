import React, { use } from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {

  return (
    <div id='right' className='h-full overflow-x-auto p-4 w-2/3 flex flex-nowrap gap-5'>
      {props.users.map((user, idx) => {
        return <RightCard key={idx} id={idx} color={user.color} img={user.img} tag={user.tag} intro={user.intro} />
      })}
    </div>
  )
}

export default RightContent
