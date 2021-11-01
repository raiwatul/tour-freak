import React, { useState, useEffect } from 'react';
import Rating from 'react-rating';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const SingleService = () => {
    const { id } = useParams();
    const [singleService, setSingleService] = useState({});
    useEffect(() => {
        fetch(`https://fathomless-spire-10081.herokuapp.com/services/${id}`)
            .then(res => res.json())
            .then(data => setSingleService(data));
    }, []);

    return (

        <div className="text-center">
            <img style={{ borderRadius: '30px', width: '35%' }} src={singleService?.img} className="card-img-top p-3" alt="..." />
            <h1 style={{ fontSize: '3rem', fontWeight: '500' }} className="fw-bold text-center animate__animated animate__lightSpeedInRight">{singleService?.place_name}</h1>
            <div>
                <Rating
                    initialRating={singleService?.rating}
                    emptySymbol="fas fa-star"
                    fullSymbol="fas text-warning fa-star"
                    readonly
                />
                {singleService?.rating} ({singleService?.total_reviews})
            </div>

            <h1 style={{ fontSize: '3rem', fontWeight: '500' }} className="fw-bold text-center">Price :{singleService?.price}</h1>
            <h1 style={{ fontSize: '3rem', fontWeight: '500' }} className="fw-bold text-center">Overview</h1>
            <div className="d-flex justify-content-center"><h4 style={{ fontSize: '2rem', fontWeight: '500', width: '50%' }}>{singleService?.description}</h4></div>
            <Link to={`/OrderFrom/${singleService?._id}`}> <button className="btn brdr font-color5 w-50 ms-0 mt-5">Book Now <i className="fas fa-arrow-right"></i></button></Link>



        </div>
    );
};

export default SingleService;