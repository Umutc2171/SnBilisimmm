import React from "react";
import "./Footer.css";
import Policy from "../Policy/Policy";

const Footer = () => {
  return (
    <React.Fragment>
      <Policy />
      <footer className="footer">
        <div className="subscribe-row">
          <div className="container">
            <div className="footer-row-wrapper">
              <div className="footer-subscribe-wrapper">
                <div className="footer-subscribe">
                  <div className="footer-subscribe-top">
                  </div>
                </div>
              </div>
              <div className="footer-contact-wrapper">
                <div className="footer-contact-top">
                  <h3 className="contact-title">
                    Yardımamı İhtiyacınız Var? <br />
                    (+90) 539 672 13 72
                  </h3>
                  <h3 className="contact-title">
                    (+90) 212 703 13 93
                  </h3>
                  <p className="contact-desc">
                    Çalışma Saatlerimiz : 09.00 / 23.00
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="widgets-row">
          <div className="container">
            <div className="footer-widgets">
              <div className="brand-info">
                <div className="footer-logo">
                  <a href="/" className="logo" >
                    <img src="/img/logo.png" alt="" />
                  </a>
                </div>
                
                 <div className="footer-contact">
                <p>
                <a href="tel:539-672-13-72">📞: 0539 672 13 72</a>
                  </p>
                    <a href="tel:212-703-13-93">☎️: 0212 703 13 93</a>
                  <p></p>
                  <p>
                  <a href="mailto:snbilisim@outlook.com">
                    ✉️: SnBilisim@outlook.com
                    </a>

                  </p>
                </div> 
              </div>
              <div className="widget-nav-menu">
                <h4>Sayfalarımız</h4>
                <ul className="menu-list">
                  <li>
                    <a href="/Hizmetlerimiz">Hizmetlerimiz</a>
                  </li>
                  <li>
                    <a href="/İletişim">İletişim</a>
                  </li>
                  <li>
                    <a href="/mağaza">Mağaza</a>
                  </li>
                  <li>
                    <a href="/İletişim">İletişim</a>
                  </li>
                </ul>
              </div>
           
            </div>
          </div>
        </div>
        <div className="copyright-row"></div>
        <div className="copyright-row">
          <div className="container">
            <div className="footer-copyright">
              <div className="site-copyright">
                <p>Copyright 2024 © Sn Bilgisayar Ve Güvenlik Sistemleri</p>
              </div>
              <a href="#">
                <img className="image-footer"src="img/logo.png" alt="" />
              </a>
             
            </div>
          </div>
        </div>
      </footer>
    </React.Fragment>


  )
}
export default Footer;
