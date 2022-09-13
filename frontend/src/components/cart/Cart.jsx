import React from "react";
import { Link } from "react-router-dom";
// import burger1 from "../../assets/burger1.png";
// import burger2 from "../../assets/burger2.png";
// import burger3 from "../../assets/burger3.png";

const burger1 = "https://cdn.shopify.com/s/files/1/0569/1958/9059/products/Artboard_199_1a6b897d-e3f9-4477-b75f-46210461db44_750x810.png?v=1634048249"
const burger2 = "https://cdn.shopify.com/s/files/1/0569/1958/9059/products/Artboard_173_a253da8a-7c66-43b0-bded-2cc5d5fd7fdf_750x810.png?v=1634042473"
const burger3 = "https://img.freepik.com/free-photo/yummy-soya-pulao-pilav-pulav-rice-soyabean-chunk-fried-rice-with-peas-beans-indian-pakistani-cuisine_466689-75173.jpg?w=360&t=st=1662999509~exp=1663000109~hmac=416d62c6e42cdc956e7070b6d3386463af77581347830fbb80ba05561ddd3d05"

const CartItem = ({ value, title, img, increment, decrement }) => (
  <div className="cartItem">
    <div>
      <h4>{title}</h4>
      <img src={img} alt="Item" />
    </div>

    <div>
      <button onClick={decrement}>-</button>
      <input type="number" readOnly value={value} />
      <button onClick={increment}>+</button>
    </div>
  </div>
);

const Cart = () => {
  const increment = (item) => {};

  const decrement = (item) => {};

  return (
    <section className="cart">
      <main>
        <CartItem
          title={"Chicken Biryani Single"}
          img={burger1}
          value={0}
          increment={() => increment(1)}
          decrement={() => decrement(1)}
        />
        <CartItem
          title={"Mutton Biryani Full"}
          img={burger2}
          value={0}
          increment={() => increment(2)}
          decrement={() => decrement(2)}
        />
        <CartItem
          title={"Hyederabadi Biryani 2in1"}
          img={burger3}
          value={0}
          increment={() => increment(3)}
          decrement={() => decrement(3)}
        />

        <article>
          <div>
            <h4>Sub Total</h4>
            <p>₹{2000}</p>
          </div>
          <div>
            <h4>Tax</h4>
            <p>₹{2000 * 0.18}</p>
          </div>
          <div>
            <h4>Shipping Charges</h4>
            <p>₹{200}</p>
          </div>{" "}
          <div>
            <h4>Total</h4>
            <p>₹{2000 + 2000 * 0.18 + 200}</p>
          </div>
          <Link to="/shipping">Checkout</Link>
        </article>
      </main>
    </section>
  );
};

export default Cart;