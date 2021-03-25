import React from "react";

function Footer() {
  return (
    <div>
      <div className="footer">
        <div style={{marginLeft:"8px"}}>
          <p className="footer-p-font">
            © 2021 | Fit-Shaark Limited | All Rights Reserved @Akshay | About me
          </p>
        </div>
        <div className="footer-right-container">
          <div className="footer-right">
            <i class="fab fa-twitter"></i>
            <i class="fab fa-github"></i>
            <i class="fab fa-linkedin"></i>
            <i class="fas fa-envelope-square"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
