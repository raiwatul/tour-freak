import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import swal from 'sweetalert';
import './OrderFrom.css'

const OrderFrom = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const history = useHistory();
  const [details, setDetails] = useState([]);

  useEffect(() => {
    fetch(`https://fathomless-spire-10081.herokuapp.com/services/${id}`)
      .then(res => res.json())
      .then(data => setDetails(data))
  }, [])
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = data => {
    console.log(data)
    axios.post('https://fathomless-spire-10081.herokuapp.com/orders', data)
      .then(res => {
        console.log(res)
        if (res.data.insertedId) {
          swal("Successful", "Order", "success");
          history.push('/home')
          reset();
        }
      })
  };
  return (
    <div className="style">

      <Container className="my-5">
        <Card>
          <Row className="d-flex align-items-center" xs={1} md={2} lg={2}>
            <Col>
              <Card.Img className="img-fluid" variant="top" src={details?.img} />
            </Col>
            <Col className="style">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="d-flex align-items-center">
                  <p className="my-2 mx-2">Email</p>
                  {user?.email && <input className="form-control" readOnly={true} defaultValue={user?.email} {...register("email")} />}
                </div>
                <div className="d-flex align-items-center">
                  <p className="my-2 mx-2">Username</p>
                  {user?.displayName && <input className="form-control" readOnly={true} defaultValue={user?.displayName} {...register("username", { required: true })} placeholder="username" />}
                </div>
                <div className="d-flex align-items-center">
                  <p className="my-2 mx-2">Place</p>
                  {details?.place_name && <input className="form-control" readOnly={true} defaultValue={details?.place_name} {...register("name", { required: true, maxLength: 20 })} placeholder="service name" />}
                </div>
                <div className="d-flex align-items-center">
                  <p className="my-2 mx-2">Details</p>
                  {details?.description && <textarea className="form-control" readOnly={true} defaultValue={details?.description} {...register("description")} placeholder="service description" />}
                </div>

                <div className="d-flex align-items-center">
                  <p className="my-2 mx-2">Days</p>
                  {details?.day && <input readOnly={true} className="form-control" defaultValue={details?.day} type="number" {...register("days")} placeholder="days of package" />}
                </div>
                <div className="d-flex align-items-center">
                  <p className="my-2 mx-2">price</p>
                  {details?.price && <input readOnly={true} className="form-control" defaultValue={details?.price} type="number" {...register("price")} placeholder="service price" />}
                </div>
                <div className="d-flex align-items-center">
                  <p className="my-2 mx-2">phone</p>
                  <input className="form-control" {...register("phone", { required: true, maxLength: 20 })} placeholder="add your phone number" required />
                </div>

                {'pending' && <input className="d-none form-control" readOnly={true} defaultValue="pending.." {...register("status", { required: true, maxLength: 20 })} placeholder="status" />}
                <input type="submit" className="btn brdr font-color5" value="order" />
              </form>

            </Col>
          </Row>

        </Card>

      </Container>
    </div>
  );
};

export default OrderFrom;