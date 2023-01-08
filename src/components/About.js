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
              
              <ReadMore style={{ content:"\A", whiteSpace: "pre" }}>
               
Hi, I'm about to take you on a roller coaster of achievements, ready? ...


I'm a:

* full-stack (back end heavy) web developer specializing in Django-HTML / React-Django, building responsive and scalable web apps from concept to deployment since June 2021.

* Quality Control & Training Manager/Administrative Assistant at Section F restaurants. 2021- March 2022 - 120 employees in 3 branches & a main office.

* janitor/cleaner at section F restaurants 2021.

* 2020 is not missing because of covid-19, it's missing because of a life changing incident that can wait for now.

* computer maintenance technician 2017-2019.

* cellular telephone maintenance technician 2012-2019.

* small business owner selling smartphone accessories and computer accessories besides fixing devices. In Sudan - 2012-2016, and in Egypt managing one staff - 2017-2019

* a production supervisor/administrative assistant at Awaad Advertising company, managed 5 people 2010-2012.

* a diplomatic security guard & receptionist. UK embassy in Sudan 2007-2010.

* a part time activist for democracy, good governance, and freedom in Sudan since 2010.

I love helping people and in Section F I proved to be resourceful that I was given the responsibilities of Training and Orientation Manager, Quality Control Manager and Office Assistant all at once within three months, a decision that resulted in a series of changes in management of the company to combat negligence at work stations, low productivity and medium quality of food products. Some of the new policies included the introduction of compulsory training & orientation on company policies for all new employees regardless of seniority, a set of penalties if these rules are broken, a set of gifts, prizes & recognition policies for good performance and a system of monitoring without interrupting workflow. 
These policies led to overall raise in performance including production efficiency and high quality of food products, retaining old clients, attracting new clients through marketing, and raising sales by 6% in 3 months. I was named employee of the year in Dec 2021. I'm a refugee, hired as a cleaner/janitor.

I assure you, you are still looking at a web developer's profile, just one with diverse experiences and a thirst for learning. I am happy to say that after all these experiences, I have found something I love, programming, and creating awesome web apps.
Thank you for reading. Looking forward to hear from you, if not for work, the least we can do is connect. 

I was born in Sudan, grew up in Uganda and now a refugee in Egypt.
       
              </ReadMore>
            </h6>
          </Col>
        </div>
      </Row>
    </Container>
  );
};

export default About;
