import React from 'react'
import { Link } from 'react-router-dom'

const TestCompoment = () => {
  return (
    <div><button className='m-2 text-2xl text-white bg-[#9363C4] p-2 rounded-full'><Link to='/DemoPage'></Link><span>Demo Page</span></button></div>
  )
}

export default TestCompoment

