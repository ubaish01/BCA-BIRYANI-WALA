import React from 'react'
import {motion} from "framer-motion"
const MenuCard = ({itemNo,itemImg,price,title,handler,delay}) => {
  return (
    <motion.div 

    
        initial={{x:"-100%",
            opacity:0}}
            whileInView={{x:0,
            opacity:1}}

            transition={{delay:delay}}
    
    
    className="div menuCard">
        <div>item {itemNo}</div>
        <main>
            <img src={itemImg} alt="" />
            <h5> ₹{price}</h5>
            <p>{title}</p>
            <button onClick={()=>handler(itemNo)} >Add to Cart</button>
        </main>
    </motion.div>
  )
}

export default MenuCard
