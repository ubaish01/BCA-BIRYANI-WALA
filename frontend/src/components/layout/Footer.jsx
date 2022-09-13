import React from "react";
import {AiFillInstagram,AiFillLinkedin,AiFillGithub} from 'react-icons/ai'
// const Footer = () => {
//     return
//     (
//     <footer>
//         <div>
//             <h2>MBA Burger Wala</h2>
//             <p>We are trying to give you the best taste possible</p>
//         </div>
//     </footer>
//     )
// };


const Footer = () => {
    return (
        <footer>
            <div>
                <h2>BCA Biryani Wala</h2>
                <p>We are trying to give you the best taste possible</p>
                <br />
                <em>We give attention to genuine feedback.</em>
                <strong>All right received @BcaBiryaniWala</strong>
            </div>
            <aside>
                <h4>Follow Us</h4>
                <a href="linkedin.com"><AiFillLinkedin/></a>
                <a href="https://instagram.com/ubaiish"> <AiFillInstagram/></a>
                <a href="https://github.com/ubaish01"> <AiFillGithub/></a>
            </aside>
        </footer>
    )
}

export default Footer

