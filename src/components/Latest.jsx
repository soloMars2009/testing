import React from "react";
import HA from '../images/р5.png' 
import HA1 from '../images/р6.png'
import HA2 from '../images/р7.png'



export default function Latest(){
    return(
        <>
        <div className="container">
        <h4>Latest Product Reviews</h4>
        <div class="row">
  <div class="col-lg-4  col-sm-12 pb-2">
    <div class="card">
      <img src={HA} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title text-center">Lawnmower Xtreme</h5>
        <p class="card-text text-center">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div class="col-lg-4  col-sm-12 pb-2">
    <div class="card">
      <img src={HA1} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title text-center">Ultra Grow Fertilizer</h5>
        <p class="card-text text-center">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div class="col-lg-4  col-sm-12 pb-2">
    <div class="card">
      <img src={HA2} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title text-center">Hedge Clippers</h5>
        <p class="card-text text-center">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
      </div>
    </div>
  </div>
</div>
        </div>
        </>
    )
}