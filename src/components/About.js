import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import { data } from "../data";
import ReadMore from "./ReadMore";

const About = () => {

  return (
    <Container id="about" className="blue-b light-b" style={{borderTop: "0.1px solid rgba(195, 212, 238, 0.5)"}}>
      <Row className="text-center mt-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="35"
          height="35"
          fill="#fffefb"
          className="bi bi-person-check"
          viewBox="0 0 16 16"
        >
          <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
          <path
            fillRule="evenodd"
            d="M15.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L12.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z"
          />
        </svg>

        <h4 className="text-center white-text headers mt-3">
          ABOUT ME
        </h4>
      </Row>

      <Row className="mb-5 pad d-grid justify-content-center">
        <div className="white-bg" style={{ borderRadius: "20px", transition: "1s ease-in-out"}}>

          <Col className="col-sm-3 col-md-3 m-auto">
            <img className="img-fluid image" alt="..." src="./10.png" />
          </Col>

          <Col className="col-sm-9 m-auto">
            <h6 className="col-sm- mb-4 mt-5 responsive-text pb-3 dark-text text-muted" 
            style={{ lineHeight: "1.6", letterSpacing: "auto", transition: "1s ease" }}>
              <ReadMore>
                              Hi, I'm about to take you on a roller coster of experiences,
                ready? let's go... I'm a professional, self-taught, full- stack
                web developer specializing in both frontend and backend,
                building responsive and scalable websites from scratch to
                deployment. I'm also a self-taught IT support technician, a
                computer maintenance technician since 2015 and a smart phone
                maintenance technician since 2012. I ran a business too, selling
                smartphone accessories and computer accessories besides fixing
                devices and managing one staff. I have been in different IT
                departments for a decade...and I'm loving it. I was also a
                production supervisor at a small, old-school advertising company
                where I managed about 5 people, 2 welders, 1 graphic designer
                and 2 helps. My last manager at a small restaurant chain called
                me a joker, the joker in playing-cards, because, other than
                cooking, I did any given task in any department of the 3
                restaurants, like training new employees, quality control &
                monitoring and formulating new policies. And when I have time, I
                get creepy around broken things, I won't easily let you take
                your fan or your car-lifting jack for repair before I try fixing
                it for you. You are still here, right? Thank goodness you are.
                I hope you remember that you are still looking at a web
                developer's portfolio, just one with diverse experiences and a
                thirst for learning. I am happy to say that after all the
                different experiences, I have just found my passion, coding and
                creating awesome web apps and I'm not afraid to break the mold
                while learning. Thank you for reading. I hope to hear from you
                soon.
              </ReadMore>
            </h6>
          </Col>
        </div>
      </Row>
    </Container>
  );
};

export default About;
