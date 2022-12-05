import * as React from "react";
import scrollTo from "gatsby-plugin-smoothscroll";
import { Fade } from "react-awesome-reveal";
import { yourData } from "../yourdata";

const Header = ({ siteTitle }) => (
  <header className="section header" id="home">
    <div className="container">
      <div className="header-wrapper">
        <Fade>
          <h1>
            {yourData.headername}
          </h1>
        </Fade>
        <button className="primary-btn" onClick={() => scrollTo("#contact")}>WORK WITH ME</button>
        {/* <button className="arrow-btn bounce" onClick={() => scrollTo("#work")}>&#8595;</button> */}
      </div>
    </div>
  </header>
)

export default Header
