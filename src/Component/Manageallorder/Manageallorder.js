import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row, Table } from 'react-bootstrap';
import { useParams } from 'react-router';

const Manageallorder = () => {
  const [orders, setOrders] = useState([]);
  const [isUpdate, setIsUpdate] = useState(null);
  useEffect(() => {
    fetch('https://fathomless-spire-10081.herokuapp.com/orders')
      .then(res => res.json())
      .then(data => setOrders(data))
  }, [isUpdate])

  const handleDeleteOrder = id => {
    const proceed = window.confirm('Are you sure,you want to delete');
    if (proceed) {
      const url = `https://fathomless-spire-10081.herokuapp.com/orders/${id}`
      fetch(url, {
        method: 'DELETE',

      })
        .then(res => res.json())
        .then(data => {
          if (data.deletedCount > 0) {
            alert('deleted Successfully!')
            const remainingOrders = orders.filter(order => order._id !== id)
            setOrders(remainingOrders);
          }
        });
    }
  }

  const handleUpdate = id => {

    const url = `https://fathomless-spire-10081.herokuapp.com/orders/${id}`
    fetch(url)
      .then(res => res.json())
      .then(data => {
        if (data.matchedCount > 0) {
          alert('approved successfully!')
          setIsUpdate(true)
        } else {
          setIsUpdate(false)
        }
        console.log(data)
      });
  }
  return (
    <div>
      <Container className="my-5">

        <Row xs={1} md={2} lg={2} className="g-4">
          {

            orders.map(order =>

              <Col key={order._id}>

                <Card>
                  <Card.Body className="text-start">
                    <Card.Text>
                      <h6>Email: {order.email}</h6>
                    </Card.Text>
                    <Card.Text>
                      <h6>phone: {order.phone}</h6>
                    </Card.Text>
                    <Card.Text>
                      <h6>service-name: {order.name}</h6>
                    </Card.Text>
                    <Card.Text>
                      <h6>Days: {order.days}</h6>
                    </Card.Text>
                    <Card.Text>
                      <h6>Price: {order.price}</h6>
                    </Card.Text>
                    <div className="d-flex align-items-center">
                      <Card.Text>
                        <h6>status: {order.status}</h6>
                      </Card.Text>
                      <div className="mx-4">
                        <button onClick={() => handleUpdate(order._id)} className="btn btn-success">click for approve<i className="fas fa-check-circle mx-2 text-warning"></i></button>
                      </div>
                    </div>
                    <button onClick={() => handleDeleteOrder(order._id)} className="btn btn-danger">Delete</button>
                  </Card.Body>
                </Card>
              </Col>)
          }
        </Row>
      </Container>

    </div>
  );
};

export default Manageallorder;