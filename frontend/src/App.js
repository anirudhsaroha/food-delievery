import { Routes , Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/Home/home"
import Footer from "./components/footer";
import Login from './pages/Authentication/authentication'
import Cart from "./pages/Cart/cart";
import Order from "./pages/PlaceOrder/order"

function App() {
  return (
    <>
      <div className="w-screen pl-3 pr-3 md:pl-14 md:pr-14 lg:pl-32 lg:pr-32  overflow-x-hidden">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/order" element={<Order/>} />
        </Routes>
      </div>
      <Footer/>
    </>
  );
}

export default App;
