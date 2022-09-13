import React from "react";
import { Link } from "react-router-dom";
import { RiFindReplaceLine } from "react-icons/ri";
// import me from "../../assets/founder.webp";
const me = "https://avatars.githubusercontent.com/u/109113347?v=4"

const About = () => {
  return (
    <section className="about">
      <main>
        <h1>About Us</h1>

        <article>
          <h4>BCA Biryani Wala</h4>
          <p>
            We are BCA Biryani Wala. The place for most tasty Biryani on the
            enitre earth.
          </p>

          <p>
            Explore the various type of Biryani and Korma. Click below to see the
            menu
          </p>

          <Link to="/">
            <RiFindReplaceLine />
          </Link>
        </article>

        <div>
          <h2>Founder</h2>
          <article>
            <div>
              <img src={me} alt="Founder" />
              <h3>Ubaish Malik</h3>
            </div>

            <p>
              I am Ubaish Malik, the founder of BCA Biryani Wala. Affiliated to
              God Taste...
            </p>
          </article>
        </div>
      </main>
    </section>
  );
};

export default About;