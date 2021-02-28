import React from 'react'

const Home = () => {
    return (
        <>
    <div className='NavBar'>
      <div className='NavBarTitle'>
        <h1>Title</h1>
      </div>
      <div className='NavBarTabs'>
        <ul>
          <li><a href='/'>Home</a></li>
          <li><a href='/'>TopList</a></li>
          <li><a href='/'>Sign In</a></li>
          <li><a href='/'>Register</a></li>
        </ul>
      </div>
    </div>
    </>
    )
}

export default Home
