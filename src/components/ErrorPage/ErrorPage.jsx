import { FaceFrownIcon } from '@heroicons/react/24/solid'
import logo from '../../assets/error.jpg'
import React from 'react'
import { Link, useRouteError } from 'react-router-dom'

const ErrorPage = () => {
    const { error, status } = useRouteError()
    return (
        <section className="d-flex align-items-center vh-100 p-4 bg-light text-dark">
            <div className="container d-flex flex-column justify-content-center align-items-center px-5 my-8">
                {/* <FaceFrownIcon className="w-25 h-25 text-warning" /> */}
                <img className="w-25 h-25 text-warning" src={logo} alt="" />
                <div className="mx-auto text-center">
                    <h2 className="mb-8 font-weight-bold display-1 text-warning">
                        <span className='sr-only'>Error</span>
                        {status || 404}
                    </h2>
                    <p className="mb-8 font-weight-bold h2 text-danger">
                        {error?.message}
                    </p>
                    <Link to='/' className='btn'>
                        Back to homepage
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default ErrorPage