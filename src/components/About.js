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
              
              <ReadMore style={{ content:"A", whiteSpace: "pre" }}>
               
              Hi, my name is Rawy Murgany, 
              I'm the kind of guy who doesn't easily give in to life excuses, 
              I didn't have the privilege of acquiring a university degree, 
              so I taught myself how to repair phones, then computers and now I'm happy to say that after these and other work experiences, 
              I have found something I love doing, something i literally spend hours doing in the day and at night, programming, 
              and creating awesome web apps and systems.

              I was born in Sudan, grew up a refugee in Uganda and living as a refugee in Egypt. 
              Being a refugee comes with lots of difficulties and barriers, 
              that's why you will see sudden changes in careers and a gap in my profile. 
              The result is a cocktail of diverse experiences that perfectly work together when needed. 
              I'm about to take you on a roller coaster of hard earned achievements, ready? ...(click my linkedin profile below).
              </ReadMore>
            </h6>
          </Col>
        </div>
      </Row>
    </Container>
  );
};

export default About;
