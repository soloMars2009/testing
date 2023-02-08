import React from "react";
import h1 from '../images/h5.png'
import { Button } from 'reactstrap' 


export default function Email() {
    return (
        <>

            <div className="BacgroundImg container">

                <div className="row">
                    <div className="col-lg-6">
                        <img className="w-100 pt-5 pb-5" src={h1} alt="" />
                    </div>

                    <div className="col-lg-6 pt-5">
                        <h2>Newsletter Signup</h2>
                        <p>Be the first to receive updates on articles, product reviews , <br /> courses, and more!</p>
                        <input className="w-100 InputWit" type="text" placeholder="Your email" />
                        <Button className="mt-5" color="warning">Submit</Button>
                    </div>
                </div>

            </div>

        </>
    )
}