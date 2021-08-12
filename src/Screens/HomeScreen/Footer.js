import React from "react";
function Footer() {
  return (
    <div className="footer-fit">
      <div className="footer-bottom-left">
        <p className="footer-bottom-p-font">
          © 2021 | Fit-Shaark Limited | All Rights Reserved @Akshay |  <a href="https://akshayportfoloio98.netlify.app/"> About me</a>
        </p>
      </div>

      <div className="footer-bottom-righ">
        <a href="https://twitter.com/Kshy_nair">
          {" "}
          <i className="fab fa-twitter"></i>
        </a>
        <a href="https://github.com/akshaay9">
          {" "}
          <i className="fab fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/akshay-a7">
          {" "}
          <i className="fab fa-linkedin"></i>
        </a>

        <a href="mailto:nair.akshay98@gmail.com">
          {" "}
          <i className="fas fa-envelope-square"></i>
        </a>
      </div>
    </div>
  );
}

export default Footer;
