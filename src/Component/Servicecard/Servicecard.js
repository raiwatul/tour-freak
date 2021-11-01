import React from 'react';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';

const Servicecard = (props) => {
    const { _id, img, country, place_name, price, total_reviews, rating } = props.service;
    return (
        <>
            <div className="col-lg-4 col-md-6 ">
                <div className="card h-100 mx-2">
                    <img height="250" src={img} className=" p-3" alt="..." />
                    <div className="card-body">
                        <div >
                            <div>
                                <b><i className="fas fa-map-marked-alt me-2"></i><span className="text-highlighted text-center fs-5">{place_name}</span></b>
                            </div>

                            <div>
                                <span className="fw-bold text-danger">${price} </span><small>/Per Person</small>
                            </div>

                            <div>
                                <Rating
                                    initialRating={rating}
                                    emptySymbol="fas fa-star"
                                    fullSymbol="fas text-warning fa-star"
                                    readonly
                                />
                                {rating} ({total_reviews})
                            </div>

                            <div>
                                <Link className="btn brdr font-color5 mt-3"  to={`/singleService/${_id}`}>Learn More <i className="fas fa-arrow-right"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Servicecard;