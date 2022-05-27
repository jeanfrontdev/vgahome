import React from 'react'
import Arts from "./Arts"
import Features from './Features'

const Home = () => {
  return (
        <section id="home" class="bg-cover hero-section" style="background-image: url(img/ape1.png);">
        <div class="overlay"></div>
        <div class="container text-white text-center">
        <div class="row">
            <div class="col-12">
            <h1 class="display-4"> We Provide The best Place <br/>
            Where You Can Find Unique Artworks </h1>
            <p class="my-4"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe, suscipit?</p>
            <a href="#" class="btn btn-main">Explore</a>
            </div>
        </div>  
        </div>
        <Features/>
        <Arts/>
    </section>
  )
}

export default Home