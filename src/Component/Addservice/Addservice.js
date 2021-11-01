import axios from 'axios';
import React from 'react';
import { Form } from 'react-bootstrap';
import { useForm } from "react-hook-form";

import logo from '../../Images/freepik.jpg'
import './Addservice.css'

const Addservice = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const onSubmit = data => {
    console.log(data)

    axios.post('https://fathomless-spire-10081.herokuapp.com/services', data)
      .then(res => {
        if (res.data.insertedId) {
          alert('successfully added service! ')
          reset();
        }
      })
  };
  return (

    //     <div  class="d-flex align-items-center justify-content-center">
    //         <strong>Loading</strong>
    //         <div class="spinner-grow" role="status" aria-hidden="true"></div>
    //         <div class="spinner-grow" role="status" aria-hidden="true"></div>
    //         <div class="spinner-grow" role="status" aria-hidden="true"></div>
    //       </div>
    // </div>

    <div>
      <div className="container border-shadow mt-5">
        <div className="row">
          <div className="col-lg-7 long-padding">
            <div className="text-center">
              <h1 className=" text-bold mb-4">Add a service</h1>
            </div>
            <div>
              <form className="add-service" onSubmit={handleSubmit(onSubmit)}>
                <input className="form-control"  {...register("place_name", { required: true, maxLength: 20 })} placeholder="Service name" />
                {errors.place_name?.type === 'required' && "name is required"}
                <input className="form-control"  {...register("country", { required: true, maxLength: 20 })} placeholder="Country" />
                {errors.country?.type === 'required' && "country is required"}
                <textarea className="form-control"  {...register("description")} placeholder="service description" />
                <input className="form-control" value="0" readOnly type="number" {...register("total_reviews")} placeholder="Total review" />
                <input className="form-control" value="0" readOnly type="number" {...register("rating",)} placeholder="Average of Rating" />
                {/* {errors.rating?.min >= '5' && "put input between 1 to 5"}     */}
                <input className="form-control" type="number" {...register("price", { required: true })} placeholder="service price" />
                {errors.price?.type === 'required' && "price is required"}
                <input className="form-control"  {...register("day", { required: true, maxLength: 20 })} placeholder="day" />
                {errors.day?.type === 'required' && "day is required"}
                <input className="form-control"  {...register("night", { required: true, maxLength: 20 })} placeholder="night" />
                {errors.night?.type === 'required' && "night is required"}

                <input className="form-control"  {...register("img")} placeholder="image url" />
                {errors.img?.type === 'required' && "night is required"}
                <input className="form-control" type="submit" />
              </form>
            </div>

          </div>

          <div className="col-lg-5 image d-flex justify-content-center align-items-center">
            <div className="text-center text-dark p-4">
              <img src={logo} className="img-fluid" alt="" />
              {/* <h6 className="mt-5">Make Your Travel Booking Experience a Lot Brighte</h6>
            <Form.Text className="text-muted">
             with best facilitise best tour guide and best packages, you are in safe hands.
            </Form.Text> */}
            </div>
          </div>
        </div>
      </div>








    </div>
  );
};

export default Addservice;