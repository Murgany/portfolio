import React from "react";
import { Container, Row, Button } from "react-bootstrap";

const Home = () => {
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight / 4.5,
      behavior: "smooth",
    });
  };

  return (
    <Container className="home blue-bg header-bg pt-3" fluid>
      <Row className="light-text">
        <div
          className="slide-in m-auto"
          style={{ borderLeft: "6px solid #fffefb", width: "95%" }}
        >
          <div className="header-text-wrap col-12 p-0 slide-in-inner">
            <h1 className="headers-2 h-text">Hi, I'm Rawy...</h1>
          </div>

          <div className="header-text-wrap col-12 slide-in-inner title">
            <h1 className="headers-2 white-text h-text">
              Full-stack web developer
            </h1>
          </div>

          <div className="header-text-wrap col-12 slide-in-inner">
            <h1 className="headers-2 h-text mb-0">
              Building awesome websites & systems
            </h1>
          </div>
        </div>

        <div className="scroll-down-btn text-center reveal-inner">
          <Button
            onClick={scrollToBottom}
            style={{ borderRadius: "50%" }}
            variant="light"
            className="btn-sm mt- m-1 p-1 icons bounce"
            rel="noreferrer"
            id="icons"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-arrow-down App p-1 contact-icons "
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
              />
            </svg>
          </Button>
        </div>
      </Row>
    </Container>
  );
};

export default Home;
