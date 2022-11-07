import React, { useEffect, useState } from "react";

import {
  AiOutlineInstagram,
  AiOutlineYoutube,
  AiOutlineTwitter,
  AiOutlineArrowUp,
} from "react-icons/ai";

const Footer = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  // This function will scroll the window to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <div className="footer">
        <div className="container">
          <footer className="py-5">
            <div className="row">
              <div className="col-6 col-md-2 mb-3">
                <h5>Section</h5>
                <ul className="nav flex-column">
                  <li className="nav-item mb-2">
                    <a href="##" className="nav-link p-0 text-muted">
                      Home
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="##" className="nav-link p-0 text-muted">
                      Features
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="##" className="nav-link p-0 text-muted">
                      Pricing
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="##" className="nav-link p-0 text-muted">
                      FAQs
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="##" className="nav-link p-0 text-muted">
                      About
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-6 col-md-2 mb-3">
                <h5>Section</h5>
                <ul className="nav flex-column">
                  <li className="nav-item mb-2">
                    <a href="##" className="nav-link p-0 text-muted">
                      Home
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="##" className="nav-link p-0 text-muted">
                      Features
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="##" className="nav-link p-0 text-muted">
                      Pricing
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="##" className="nav-link p-0 text-muted">
                      FAQs
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="##" className="nav-link p-0 text-muted">
                      About
                    </a>
                  </li>
                </ul>
              </div>

              {showButton && (
                <button onClick={scrollToTop} className="back-to-top mx-2 ">
                  <AiOutlineArrowUp />
                </button>
              )}
              <div className="col-md-5 offset-md-1 mb-3">
                <form>
                  <h5>Subscribe to our newsletter</h5>
                  <p>Monthly digest of what's new and exciting from us.</p>
                  <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                    <label htmlFor="newsletter1" className="visually-hidden">
                      Email address
                    </label>
                    <input
                      id="newsletter1"
                      type="text"
                      className="form-control"
                      placeholder="Email address"
                    />
                    <button className="btn btn-primary" type="button">
                      Subscribe
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <div className="d-flex flex-column flex-sm-row justify-content-between  border-top">
              <p>&copy; 2022 Company, Inc. All rights reserved.</p>
              <ul className="list-unstyled d-flex">
                <li className="ms-3">
                  <a className="logo" href="https://www.instagram.com">
                    <AiOutlineInstagram className="mx-2" size={30} />
                  </a>
                </li>
                <li className="ms-3">
                  <a className="logo" href="https://www.youtube.com">
                    <AiOutlineYoutube className="mx-2" size={30} />
                  </a>
                </li>
                <li className="ms-3">
                  <a className="logo" href="https://www.twitter.com">
                    <AiOutlineTwitter className="mx-2" size={30} />
                  </a>
                </li>
              </ul>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default Footer;
