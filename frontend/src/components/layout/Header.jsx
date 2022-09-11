import React from 'react'
import {GiChickenOven} from "react-icons/gi"
import {FiLogIn, FiShoppingCart} from "react-icons/fi"
import {FaUser} from "react-icons/fa"
import { Link } from 'react-router-dom'
import {motion} from 'framer-motion'

const Header = ({isAuthenticated=false}) => {
  return (
    <nav>
        <motion.div initial={{x:"-100%"}}
        whileInView={{x:0}}
        >
        <GiChickenOven/>
        </motion.div>

        <div>
            <Link to="/">Home</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/about">About Us</Link>
            <Link to="/cart">
                <FiShoppingCart/>
            </Link>

            <Link to = {isAuthenticated?"/me":"/login"}>
                {isAuthenticated?<FaUser/>:<FiLogIn/>}
            </Link>
        </div>

    </nav>
  )
}

export default Header
