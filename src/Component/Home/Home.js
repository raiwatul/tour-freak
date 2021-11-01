import React, { useEffect, useState } from 'react';
import Choose from '../Choose/Choose';
import Review from '../Review/Review';
import Servicecard from '../Servicecard/Servicecard';
import { Spinner } from 'react-bootstrap';

import './Home.css'


const Home = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://fathomless-spire-10081.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);
    return (
        <div>
            {/* banner part */}
            {/* carosel */}
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item py-5 cover active">

                        <div className="text-center caption py-2 my-5">
                            <div className=" my-5">
                                <h3>Go for your vacation</h3>
                                <h5>Where Camping Adventures Begin</h5>
                                <button className="btn brdr font-color5 my-5">Book Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item cover2 py-5">
                        <div className="text-center caption py-2 my-5">
                            <div className=" my-5">
                                <h3>Lets Explore The World</h3>
                                <h5>Where Your Adventures Begin</h5>
                                <button className="btn brdr font-color5 my-5">Book Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item cover3 py-5">
                        <div className="text-center caption py-2  my-5">
                            <div className=" my-5">
                                <h3>Plan some amaizing tour</h3>
                                <h5>Where Camping Adventures Begin</h5>
                                <button className="btn brdr font-color5 my-5">Book Now</button>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>



            {/* service section */}
            <div>

                <h5 className="mt-5 text-orgarge text-center">Choose Your Package</h5>
                <h1 className="text-center text-size">Select Your Best Package <br /> For Your Travel</h1>
                <>

                    <div className="row g-4">
                        {
                            services.length === 0 ?
                                <div className="d-flex justify-content-center">
                                    <Spinner animation="border" />
                                </div> :
                                services.map(service => <Servicecard

                                    key={service.img}
                                    service={service}

                                ></Servicecard>

                                    //

                                )
                        }
                    </div >

                </ >

            </div>




            {/* extra setion */}
            <div className="extra-cover mt-5">
                <h5 className="mt-5 text-orgarge text-center">Why Tevily</h5>
                <h1 className="text-center text-size">Why You Are Travel With Tevily</h1>
                <Choose></Choose>


                {/* <div className=" d-flex align-items-center mb-5 mt-5">
                    <div className=" con">
                    <i className="fas fa-laptop size pb-4"></i>
                    <h5>1000+ our <br/> worldwide guide</h5>
                    </div>
                    <div className="con ">
                    <i className="fas fa-book size pb-4"></i>
                    <h5>100% trusted travel <br/> agency</h5>
                    </div>
                    <div className="con ">
                    <i className="fas fa-headphones size pb-4"></i>
                    <h5>10+ year of travel <br/> experience</h5>
                    </div>
                    <div className="con">
                    <i className="fas fa-comments size pb-4"></i>
                    <h5>90% of our Happy <br/> Customer</h5>
                    </div>

                </div> */}

            </div>


            {/* review part */}
            <div className="container mt-5">
                <h5 className="text-orgarge text-center">Our Traveller Say</h5>
                <h3 className="text-center text-size">What Oue Traveller Say <br /> About Us</h3>
                <Review></Review>
            </div>
        </div>

    );
};

export default Home;