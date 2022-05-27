import React from 'react'

const Features = () => {
  return (
    <section id="features" class="text-center">
      <div class="container">
        <div class="row">
          <div class="col-12 section-intro text-center">
            <h1>Features</h1>
            <div class="divider"></div>
            <p>Lorem ipsum dolor, sit amet consectetur <br/>adipisicing elit. Ipsam, nesciunt!</p>
          </div>
        </div>
        <div class="row gx-4 gy-5">
          <div class="col-md-4 feature">
            <div class="icon"><i class="icon-global"></i></div>
            <h5 class="mt-4 mb-3">Worldwide</h5>
            <p>Purchase wherever you are in the world</p>
          </div>
          <div class="col-md-4 feature">
            <div class="icon"><i class="icon-pricetags"></i></div>
            <h5 class="mt-4 mb-3">Price</h5>
            <p>Prices are always updated</p>
          </div>
          <div class="col-md-4 feature">
            <div class="icon"><i class="icon-lock"></i></div>
            <h5 class="mt-4 mb-3">Secure</h5>
            <p>Details and personal information are all secured</p>
          </div>
          <div class="col-md-4 feature">
            <div class="icon"><i class="icon-wallet"></i></div>
            <h5 class="mt-4 mb-3">Bitcoin</h5>
            <p>Accept any bank transfer and bitcoin</p>
          </div>
          <div class="col-md-4 feature">
            <div class="icon"><i class="icon-search"></i></div>
            <h5 class="mt-4 mb-3">Anywhere</h5>
            <p>Search any artworks that you desire </p>
          </div>
          <div class="col-md-4 feature">
            <div class="icon"><i class="icon-gift"></i></div>
            <h5 class="mt-4 mb-3">Surprises</h5>
            <p>Experience freebies and exciting gifts every month</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features