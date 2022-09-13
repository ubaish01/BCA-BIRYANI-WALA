import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Header from './components/layout/Header';
import Home from './components/home/Home';
import Contact from './components/contact/Contact';
import Cart from './components/cart/Cart';
import Shipping from './components/cart/Shipping';
import Login from './components/login/Login';
import Profile from './components/profile/Profile';
import MyOrders from './components/myOrders/MyOrders';
import OrderDetails from './components/myOrders/OrderDetails';
import ConfirmOrder from './components/cart/ConfirmOrder';
import PaymentSuccess from './components/cart/PamentSuccess';
import Footer from './components/layout/Footer';
import Dashboard from './components/dashboard/Dashboard';
import Users from './components/dashboard/Users';
import Orders from './components/dashboard/Orders';
import About from './components/about/About';
import NotFound from './components/layout/NotFound';                                         


import "./styles/app.scss"
import "./styles/header.scss"
import "./styles/home.scss"
import "./styles/founder.scss"
import "./styles/menu.scss"
import "./styles/footer.scss"
import "./styles/contact.scss"
import "./styles/cart.scss"
import "./styles/shipping.scss"
import "./styles/confirmOrder.scss"
import "./styles/paymentsuccess.scss"
import "./styles/login.scss"
import "./styles/profile.scss"
import "./styles/orderdetails.scss"
import "./styles/table.scss"
import "./styles/dashboard.scss"
import "./styles/about.scss"



function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route exact path="/" element={<Home/>}/> 
        <Route exact path="/contact" element={<Contact/>}/>
        <Route exact path="/cart" element={<Cart/>}/>
        <Route exact path="/shipping" element={<Shipping/>}/>
        <Route exact path="/confirmorder" element={<ConfirmOrder/>}/>
        <Route exact path="/paymentsuccess" element={<PaymentSuccess/>}/>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/profile" element={<Profile/>}/>
        <Route exact path="/myorders" element={<MyOrders/>}/>
        <Route exact path="/order/:id" element={<OrderDetails/>}/>
        <Route exact path="/admin" element={<Dashboard/>}/>
        <Route exact path="/admin/users" element={<Users/>}/>
        <Route exact path="/admin/orders" element={<Orders/>}/>
        <Route exact path="/about" element={<About/>}/>
        <Route exact path="/notfound" element={<NotFound/>}/>
      </Routes>
      <Footer/>
      
    </Router>
  );
}

export default App;
