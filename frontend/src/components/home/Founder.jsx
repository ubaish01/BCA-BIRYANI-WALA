import React from 'react'
import {motion} from "framer-motion"
const me = "https://avatars.githubusercontent.com/u/109113347?v=4"

const Founder = () => {
    const options = {
        initial:{x:"-100%",
            opacity:0},
            whileInView:{x:0,
            opacity:1}
      }
  return (
    <section className="founder">
        <motion.div {...options}>
            <img src={me} alt="Founder" height={200} width={200} />
            <h3>Ubaish Malik</h3>
            <p>Hey, Everyone this is ubaish malik, the founder of BCA Biryani Wala. <br/>
            Our aim is to serve the best ever laziz biryani that ever exist in the universe
            
            
            </p>

        </motion.div>
    </section>
    
  )
}

export default Founder
