import React from 'react'
import Error from './../../datas/img/dog.png';

const ErrorPage = () => {
  return (
    <div>
    <main className="container">
    <img src={Error} alt='error'/>
    <h1>Page Not Found</h1>
    </main>
    </div>
  )
}

export default ErrorPage
