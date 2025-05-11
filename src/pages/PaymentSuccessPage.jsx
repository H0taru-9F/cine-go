import React from 'react'
import { Link } from 'react-router-dom'

export default function PaymnetSuccessPage() {
  return (
    <div>
        
        <div className='mt-5 p-5 container' style={{height: "100vh"}}>
            <h2 className='mt-4'>Payment Successful</h2>
            <hr />
            <div className='text-center'>
                <h5 className='mt-4'>Thank you for choosing CineVision.
                Your payment has been completed. Ticket details have been sent to your email address.</h5>
                <div className='mt-4'>
                    <Link to="/" className='btn btn-primary'>Return to Home Page</Link>
                </div>
                <h5 className='mt-4'>The CineVision Family wishes you a pleasant viewing experience.</h5>
            </div>
        </div>

    </div>
  )
}
