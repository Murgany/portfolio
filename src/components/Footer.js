import React from "react";
import { animateScroll as scroll } from "react-scroll";
import { Button } from "react-bootstrap";

const Footer = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <footer className="white-text text-center m-0 pt-5 copy-right">
      <h4 className="headers">Rawy Murgany </h4>
      <br />
      <Button
        onClick={scrollToTop}
        style={{ borderRadius: "50%" }}
        variant="light"
        className="btn-sm mt-3 p-1 icons reveal-inner"
        rel="noreferrer"
        id="icons"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="bi bi-arrow-up-circle p-1 contact-icons"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"
          />
        </svg>
      </Button>
    </footer>
  );
};

export default Footer;
