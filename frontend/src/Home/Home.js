import React from "react";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Navbar from "../Navbar/Navbar";
import "./Home.css";
import { Link } from 'react-router-dom';

function Home() {



  return (
    <div>
      <div >
        <Navbar />
      </div>
      <div className="carouselSection container my-2">
        <div className="row">
          <div className="FocusDiv col-12">
            <div
              id="carouselExampleControls"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src="https://www.xda-developers.com/files/2021/04/Best-Dell-laptops.jpg"
                    className="d-block w-100 "
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="https://images.macrumors.com/t/62vjVRKy2CKVEE8l08AhzS04C3I=/800x0/smart/article-new/2022/01/iPhone-14-Mock-pill-and-hole-thumb.jpg?lossy"
                    className="d-block w-100 "
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2016/05/17/goods_img_big-v1/20160517183512_17820.jpg"
                    className="d-block w-100"
                    alt="..."
                  />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-around">
          <div className="ContentDiv1 col-sm-5 col-10">
            <h3 className="text-center">Top picks for your home</h3>
            <div className="SubContentDiv1 ">
              <div className="SubContentImageDiv col-5">
                <img className="SubContentImage " 
                  src="https://rukminim1.flixcart.com/image/416/416/k7285u80/refrigerator-new/w/f/n/neo-258lh-cls-plus-magnum-steel-2s-n-2-whirlpool-original-imafpefswgu9qgwd.jpeg?q=70"
                  alt=""
                /> <p className="" >whirlpool refrigerator</p>
              </div>
              <div className="SubContentImageDiv col-5 " >
                <img className="SubContentImage"
                  src="https://rukminim1.flixcart.com/image/120/100/l0lbrm80/air-conditioner-new/h/4/4/-original-imagcckmghcgezfd.jpeg?q=70"
                  alt=""
                /> <p>Blue star ac</p>
              </div>
            </div>
            <div className="SubContentDiv2 ">
              <div className="SubContentImageDiv col-5 " ><img className="SubContentImage"
                src="https://rukminim1.flixcart.com/image/120/100/k6zda4w0/washing-machine-new/p/r/b/t65sksf4z-lg-original-imafpbmu7sfss4k6.jpeg?q=70"
                alt=""
              /><p>Washing Machine</p></div>
              <div className="SubContentImageDiv col-5 "><img className="SubContentImage"
                src="https://rukminim1.flixcart.com/image/120/100/kx9as280/television/d/e/b/-original-imag9rfguf6nevgd.jpeg?q=70"
                alt=""
              /><p>Sony Tv</p></div>
            </div>
          </div>
          <div className="ContentDiv2 col-sm-5 col-10">
            <h3 className="text-center">Deals of the day</h3>
            <div className='col-12'>
              <img className='Deals' src="https://m.media-amazon.com/images/I/710QdRZmrhL._AC_UY218_.jpg" alt="" />
              <p>Dell Inspiron Athlon Dual Core</p>
            </div>
            <h4>Buy at 10% discount</h4>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="circle">
            <h3> <Link to="/products">view more </Link>  </h3>
          </div>
        </div>
      </div>
      <div>
        <About />
      </div>
      <div>
        <Contact />
      </div>

    </div>
  );
}

export default Home;
