import React from "react";
import Ticher from '../images/Tich.png'
import { Button } from "reactstrap";



export default function Eas() {
    return (
        <>
            <div className="container CoColorn pt-5">
                <div className="row">
                    <div className="col-lg-6 col-sm-12">
                        <img className="w-100" src={Ticher} alt="" />
                    </div>
                    <div className="col-lg-6 col-sm-12">
                        <p style={{ color: 'green' }}>Introducing Affiliate Template  for Webflow</p>
                        <h1>Easy-to-use Template <br /> for building Affiliate <br /> Sites</h1>
                        <p>Affiliate is a Webflow template made for entrepreneurs <br /> who want a professional and polished site ready to start <br /> and grow their affiliate marketing business in any niche.</p>



                        <Button color="success">
                        Buy this Template
                        </Button>
                    </div>
                </div>
            </div>
        </>
    )
}