import React from "react";
import Nat from '../images/h1.png'
import Nat1 from '../images/h2.png'
import Nat2 from '../images/h3.png'
import Nat3 from '../images/h4.png'

export default function Blog() {
    return (
        <>

            <div className="container pt-5">
                <h4>Latest from the Blog</h4>
                <div className="row">
                    <div className="col-lg-6 col-sm-12">
                        <img className="w-100" src={Nat} alt="" />
                        <p style={{fontSize: '30px'}}>How to Prep Your Lawn in the Spring</p>
                        <p>This is the blog description text. This is the blog description text. This is the blog description text.</p>
                    </div>

                    <div className="col-lg-6 col-sm-12">
                        <img className="w-50" src={Nat1} alt="" /> Secrets 
                        <img  className="w-50 pt-3 pb-3"  src={Nat2} alt="" />What
                        <img className="w-50 pb-5"  src={Nat3} alt="" />Which
                    </div>
                </div>











                <div className="imh">
                    
                </div>





            </div>



        </>
    )
}