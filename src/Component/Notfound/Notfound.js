import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../Images/error-404.jpg'

const Notfound = () => {
    return (
        <div className="text-center">
            <img className="img-fluid" src={img} alt="" />
            <h1 className="font-style">Oops! Page Not Found</h1>
            <h3 className="pb-4">The page you are looking for was moved,</h3>
                <h3 className="pb-4">removed, renamed or might never existed.Go to Home Page</h3>
            <Link to="/home">
            <button  className="fs-6 fw-bold btn brdr font-color5 ms-0">Home</button>
        </Link>
        </div>
    );
};

export default Notfound;