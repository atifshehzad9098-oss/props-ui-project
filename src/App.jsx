import React from 'react'

import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'


const App = () => {

  const users = [
    {
      img: 'https://i.pinimg.com/1200x/80/12/74/80127401c53976c1fe2c05e05a66f240.jpg', 
      intro: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut cum quasi nam est quisquam sunt!',
      color: "royalblue", 
      tag: 'Satisfied'
    }, 
    {
      img: 'https://i.pinimg.com/736x/ae/79/16/ae7916918cebc5428815f35941e511a7.jpg', 
      intro: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut cum quasi nam est quisquam sunt!',
      color: "seagreen", 
      tag: 'Underserved'
    },
    {
      img: 'https://i.pinimg.com/736x/af/e4/ca/afe4ca75a101b00f201cef14c78388e9.jpg', 
      intro: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut cum quasi nam est quisquam sunt!',
      color: "pink", 
      tag: 'Underbanked'
    },
    {
      img: 'https://i.pinimg.com/736x/b7/27/a5/b727a57bdc3910c598c759976f1051a5.jpg', 
      intro: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut cum quasi nam est quisquam sunt!',
      color: "black", 
      tag: 'Average'
    }
  ]

  return (
    <div className=''>
      <Section1 users={users} />
    </div>
  )
}

export default App
