import React from 'react'

const Contact = () => {
  return (
    <section id="contact" class="bg-cover text-white" style="background-image: url(img/pudgy5.jpeg);">
       <div class="overlay"></div>
       <div class="container">
         <div class="row">
           <div class="col-12 section-intro text-center">
             <h1>Contact Us</h1>
             <div class="divider"></div>
             <p>Lorem ipsum dolor sit amet consectetur <br/>
                adipisicing elit. Maiores, repellendus.
             </p>
           </div>
         </div>
         <div class="row">
           <div class="col-md-8">
             <form action="#" class="row">
               <div class="form-group col-md-6">
                 <input type="text" class="form-control" placeholder="Name"/>
                 </div>
                <div class="form-group col-md-6">
                 <input type="email" class="form-control" placeholder="Email"/>
                 </div>
                <div class="form-group col-md-12">
                 <input type="text" class="form-control" placeholder="Subject"/>
                 </div>
               <div class="form-group col-md-12">
                 
                 </div>
               
              
             </form>
           </div>
         </div>
       </div>
     </section>
    
  )
}

export default Contact