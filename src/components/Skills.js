import React, { useState, useEffect } from "react";
import { skills } from "../data";
import { Col, Row, Container } from "react-bootstrap";
import { ShowMore } from "./ShowMore";

const Skills = () => {
  const [data, setData] = useState([]);
  const [isCompleted, setIsCompleted] = useState(false);
  const [index, setIndex] = useState(4);
  const initialPosts = ShowMore(data, 0, index);

  const loadMore = () => {
    setIndex(index + 4);
    if (index >= skills.length) {
      setIsCompleted(true);
    } else {
      setIsCompleted(false);
    }
  };
  useEffect(() => {
    setData(skills);
  }, []);

  return (
    <Container id="skills" className="light-bg" style={{borderTop: "8px solid #4d"}}>
      <Row className="mt-5 text-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="35"
          height="35"
          fill="#4d53b3"
          className="bi bi-cpu text-center"
          viewBox="0 0 16 16"
        >
          <path d="M5 0a.5.5 0 0 1 .5.5V2h1V.5a.5.5 0 0 1 1 0V2h1V.5a.5.5 0 0 1 1 0V2h1V.5a.5.5 0 0 1 1 0V2A2.5 2.5 0 0 1 14 4.5h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14a2.5 2.5 0 0 1-2.5 2.5v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14A2.5 2.5 0 0 1 2 11.5H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2A2.5 2.5 0 0 1 4.5 2V.5A.5.5 0 0 1 5 0zm-.5 3A1.5 1.5 0 0 0 3 4.5v7A1.5 1.5 0 0 0 4.5 13h7a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 11.5 3h-7zM5 6.5A1.5 1.5 0 0 1 6.5 5h3A1.5 1.5 0 0 1 11 6.5v3A1.5 1.5 0 0 1 9.5 11h-3A1.5 1.5 0 0 1 5 9.5v-3zM6.5 6a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3z" />
        </svg>
        <br />
        <h4 className="mt-3 m-auto text-center headers blue-text">
          TECHNOLOGIES I USE
        </h4>
      </Row>
      <Row className="mb-5 justify-content-center">
        {initialPosts.map((skill, idx) => {
          return (
            <Row key={idx} className="m-2 justify-content-center">
              <Col
                className="col-sm-6 col-md-5 col-lg-4 btn-sm text-center card-mini card m-2"
                style={{ border: "2px solid #c3d4ee", borderRadius: "20px" }}
              >
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="#fffefb"
                    className="bi bi-code-slash App text-left col-1"
                    viewBox="0 0 16 16"
                    style={{ float: "left" }}
                  >
                    <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z" />
                  </svg>
                  <span className=""><a href={skill.link} className="a App text-light" target="_blank" rel="noreferrer">{skill.name}</a> </span>
                </div>
              </Col>
            </Row>
          );
        })}

        <Col className="d-grid mt-4">
          {isCompleted ? (
            <button
              onClick={loadMore}
              type="button"
              className="load-more-button-2"
            >
              That's It, thanks.
            </button>
          ) : (
            <button
              onClick={loadMore}
              type="button"
              className="load-more-button-2"
            >
              Load More +
            </button>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Skills;
