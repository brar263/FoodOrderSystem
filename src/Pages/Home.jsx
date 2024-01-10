import React from 'react'
import {Header, Footer, ProdcutItem} from '../Components/index'

const Home = () => {
  return (
    <>
    <Header />
    <div id="carouselExampleIndicators" className="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://source.unsplash.com/random/900x300/?Burger" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://source.unsplash.com/random/900x300/?pizza" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://source.unsplash.com/random/900x300/?coffee" className="d-block w-100" alt="..." />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>


<section>
    <div className='container'>

        <h3 className='fw-bold py-5'>Latest Products</h3>
        <div className='row'>
            <ProdcutItem />
            <ProdcutItem />

        

        </div>
    </div>
</section>





    <Footer />
    </>
  )
}

export default Home