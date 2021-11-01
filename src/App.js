
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './Component/Footer/Footer';
import Home from './Component/Home/Home';
import Header from './Component/Header/Header';
import Register from './Component/Resgister/Register';
import Login from './Component/Login/Login';
import AuthProvider from './Context/AuthProvider';
import Notfound from './Component/Notfound/Notfound';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';
import SingleService from './Component/SingleService/SingleService';

import Dashboard from './Component/Dashboard/Dashboard';
import OrderFrom from './Component/OrderFrom/OrderFrom';
import MyOrder from './Component/MyOrder/MyOrder';


function App() {
  return (
    <div>
     <Router>
       <AuthProvider>
      <Header></Header>
        <Switch>
          <Route exact  path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
          <Home></Home>
          </Route>
          <PrivateRoute path="/Dashboard">
         <Dashboard></Dashboard>
          </PrivateRoute>
          <PrivateRoute path="/MyOrder">
         <MyOrder></MyOrder>
          </PrivateRoute>
           <PrivateRoute path="/singleService/:id">
            <SingleService></SingleService>
          </PrivateRoute>
           <PrivateRoute path="/OrderFrom/:id">
            <OrderFrom></OrderFrom>
          </PrivateRoute>
           <Route path="/login">
            <Login></Login>
          </Route> 
           <Route path="/register">
             <Register></Register>
          </Route>  
           <Route path="*">
             <Notfound></Notfound>
          </Route>  
            
        </Switch>
        <Footer></Footer>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
