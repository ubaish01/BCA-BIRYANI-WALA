import React from 'react'
import MenuCard from './MenuCard'
// const img1 = "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=888&q=80"
const img2 = "https://cdn.shopify.com/s/files/1/0569/1958/9059/products/Artboard_173_a253da8a-7c66-43b0-bded-2cc5d5fd7fdf_750x810.png?v=1634042473"
const img3 = "https://foodfinger.in/wp-content/uploads/2021/12/buy1-get1-Biryani.png"
const img1 = "https://cdn.shopify.com/s/files/1/0569/1958/9059/products/Artboard_199_1a6b897d-e3f9-4477-b75f-46210461db44_750x810.png?v=1634048249"

const Menu = () => {
    

    const addToCartHandler=(itemNO)=>{
        console.log("Add to cart called");
    }

  return (
   <section id="menu">
        <h1>Menu</h1>
        <div>
            <MenuCard 
            itemNo={1} 
            itemImg={img1} 
            price={299} 
            title="Chicken Biryani Single"
            handler={addToCartHandler} 
            delay={0.3}/>

            <MenuCard 
            itemNo={2} 
            itemImg={img2} 
            price={459} 
            title="Mutton Biryani Full"
            handler={addToCartHandler}
            delay={0.6} />
            
            <MenuCard 
            itemNo={3} 
            itemImg={img3} 
            price={499} 
            title="Hyederabadi Biryani 2in1"
            handler={addToCartHandler} 
            delay={.9}
            />

        </div>
   </section>
  )
}

export default Menu
