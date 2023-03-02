import React from "react";
import "./footer.css";
const Footer = () => {
    return(
        <footer className="footer">
            <div className="footer__container container">
                <h3 className="footer__title">FL</h3>
                <div className="footer__social">
                    <a href="https://wa.me/5493516133578" className="footer__social-link" target="_blank"><i class="bx bxl-whatsapp"></i></a>

                    <a href="https://www.linkedin.com/in/fernando-lara-/" className="footer__social-link" target="_blank"><i class="bx bxl-linkedin"></i></a>

                    <a href="https://github.com/Ferlara02" className="footer__social-link" target="_blank"><i class="bx bxl-github"></i></a>
                </div>
                <span className="footer__copy">© Fernando Lara. All rights reserved.</span>
            </div>
        </footer>
    )
}

export default Footer