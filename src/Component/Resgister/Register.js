import React from 'react';
import './Register.css'
import { Link,useHistory } from 'react-router-dom';
import { Form,Button } from 'react-bootstrap';
import logo from '../../Images/freepik.jpg'
import useAuth from '../../Hooks/useAuth';
import swal from 'sweetalert';

const Register = () => {
    const { signInUsingGoogle,handleNameChange,handleEmailChange,handlePasswordChange,handleRegistration,error,logOut} = useAuth();
  const history = useHistory();

   //google login 

  const handleGoogleLogin = () => {
    signInUsingGoogle()
        .then(result => {
            logOut();
            swal("Successfully", "Registered", "success");
          history.push('./login')
          
        })
}
    return (
        <div className="container border-shadow mt-5">
        <div className="row">
          <div className="col-lg-5 image d-flex justify-content-center align-items-center">
            <div className="text-center text-dark p-4">
              <img src={logo} className="img-fluid" alt="" />
              <h6 className="mt-5">Make Your Travel Booking Experience a Lot Brighter</h6>
              <Form.Text className="text-muted">
                with best facilitise best tour guide and best packages, you are in safe hands.
              </Form.Text>
            </div>
          </div>
          <div className="col-lg-7 long-padding">
            <div className="text-center">
              <h1 className=" text-bold mb-4">Please Register for an Account</h1>
              <div className="authentication-icon my-3">
                <button onClick={handleGoogleLogin}  className="border-0 bg-white">
                  <i className="fab fa-google-plus-g p-3 text-danger"></i>
                </button>
                <button className="border-0 bg-white">
                  <i className="fab fa-facebook-square p-3 text-primary"></i>
                </button>
                <button className="border-0 bg-white">
                  <i className="fab fa-linkedin p-3 text-info"></i>
                </button>
              </div>
              <p>or use email for register</p>
            </div>
            <Form onSubmit={handleRegistration}>
              <Form.Group className="mb-3" controlId="text">
                <Form.Label className="fw-bold">Name:</Form.Label>
                <Form.Control
                  onBlur={handleNameChange}
                  type="text"
                  placeholder="Enter your name"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="fw-bold">Email address:</Form.Label>
                <Form.Control
                 onBlur={handleEmailChange}
                  type="email"
                  placeholder="Enter email"
                  required
                />
              </Form.Group>
  
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className="fw-bold">Password:</Form.Label>
                <Form.Control
                  onBlur={handlePasswordChange}
                  type="password"
                  placeholder="Password"
                  required
                />
              </Form.Group>
              
               <p>{error}</p>
              <Button
                // onClick={logOut}
                className="btn btn-warning px-5 py-2"
                type="submit"
              >
                Register
              </Button>
            </Form>
            <p className="text-center pt-3 m-0">
              already have an account? <Link to="/login">Go To Login</Link>
            </p>
          </div>
        </div>
      </div>
    );
};

export default Register;