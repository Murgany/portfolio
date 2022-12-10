import React, { useState, useEffect } from "react";
import { projects } from "../data";
import { Row, Container, Card, Button } from "react-bootstrap";
// import CardHeader from "react-bootstrap/esm/CardHeader";
import ReadMore from "./ReadMore";
import ShowMore from "./ShowMore";

const Projects = () => {
  const [data, setData] = useState([]);
  const [isCompleted, setIsCompleted] = useState(false);
  const [index, setIndex] = useState(2);
  const initialPosts = ShowMore(data, 0, index);

  const loadMore = () => {
    if (index >= projects.length) {
      setIsCompleted(true);
    } else {
      setIndex(index + 2);
      setIsCompleted(false);
      // console.log(index);
    }
  };

  useEffect(() => {
    setData(projects);
  }, []);

  return (
    <Container id="projects" className="white-bg blue-text">
      <Row className="justify-content-center pad">
        <div className="text-center mt-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="35"
            fill="#4d53b3"
            className="bi bi-globe2"
            viewBox="0 0 16 16"
          >
            <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855-.143.268-.276.56-.395.872.705.157 1.472.257 2.282.287V1.077zM4.249 3.539c.142-.384.304-.744.481-1.078a6.7 6.7 0 0 1 .597-.933A7.01 7.01 0 0 0 3.051 3.05c.362.184.763.349 1.198.49zM3.509 7.5c.036-1.07.188-2.087.436-3.008a9.124 9.124 0 0 1-1.565-.667A6.964 6.964 0 0 0 1.018 7.5h2.49zm1.4-2.741a12.344 12.344 0 0 0-.4 2.741H7.5V5.091c-.91-.03-1.783-.145-2.591-.332zM8.5 5.09V7.5h2.99a12.342 12.342 0 0 0-.399-2.741c-.808.187-1.681.301-2.591.332zM4.51 8.5c.035.987.176 1.914.399 2.741A13.612 13.612 0 0 1 7.5 10.91V8.5H4.51zm3.99 0v2.409c.91.03 1.783.145 2.591.332.223-.827.364-1.754.4-2.741H8.5zm-3.282 3.696c.12.312.252.604.395.872.552 1.035 1.218 1.65 1.887 1.855V11.91c-.81.03-1.577.13-2.282.287zm.11 2.276a6.696 6.696 0 0 1-.598-.933 8.853 8.853 0 0 1-.481-1.079 8.38 8.38 0 0 0-1.198.49 7.01 7.01 0 0 0 2.276 1.522zm-1.383-2.964A13.36 13.36 0 0 1 3.508 8.5h-2.49a6.963 6.963 0 0 0 1.362 3.675c.47-.258.995-.482 1.565-.667zm6.728 2.964a7.009 7.009 0 0 0 2.275-1.521 8.376 8.376 0 0 0-1.197-.49 8.853 8.853 0 0 1-.481 1.078 6.688 6.688 0 0 1-.597.933zM8.5 11.909v3.014c.67-.204 1.335-.82 1.887-1.855.143-.268.276-.56.395-.872A12.63 12.63 0 0 0 8.5 11.91zm3.555-.401c.57.185 1.095.409 1.565.667A6.963 6.963 0 0 0 14.982 8.5h-2.49a13.36 13.36 0 0 1-.437 3.008zM14.982 7.5a6.963 6.963 0 0 0-1.362-3.675c-.47.258-.995.482-1.565.667.248.92.4 1.938.437 3.008h2.49zM11.27 2.461c.177.334.339.694.482 1.078a8.368 8.368 0 0 0 1.196-.49 7.01 7.01 0 0 0-2.275-1.52c.218.283.418.597.597.932zm-.488 1.343a7.765 7.765 0 0 0-.395-.872C9.835 1.897 9.17 1.282 8.5 1.077V4.09c.81-.03 1.577-.13 2.282-.287z" />
          </svg>
          <h4 className="mb-2 text-center headers mt-3">WEB APPS I'VE BUILT</h4>
        </div>

        <div className=" col-sm-10 m-0">
          <h6
            className="mb-5 responsive-text dim-blue-tex dark-tex text-muted"
            style={{ lineHeight: "1.6" }}
          >
            Note: Some projects are currently undergoing re-designing. Some
            Github repositories have not yet been uploaded at the time of
            deploying this portfolio. This note is continously updated.
          </h6>
        </div>

        {initialPosts.map((project, idx) => (
          <div key={idx} className="col-sm-6 m-0 col-md-5 col-12">
            <Card
              className="mb-4 m- pb-4 card"
              style={{
                border: "2px solid",
                borderRadius: "20px",
                borderColor: "#4d53b3",
              }}
            >
              <h1 className="a headers text-center blue-text">
                {project.title}
              </h1>
              <div>
                <div className="project-image-container">
                  <img
                    className="img-fluid project-image"
                    alt="webdevelopment projects"
                    src={project.image}
                  />
                </div>

                 
                    <h5 className="responsive-text blue-text">
                      { project.subtitle }
                    </h5>

                <Card.Body
                  className="p-0"
                  style={{
                    height: "100%",
                    minHeight: "235px",
                  }}
                >
                  <div className="row mt-3">
                    <h4 className="responsive-text">
                      <strong>DESCRIPTION</strong>
                    </h4>
                    <span className="responsive-text">
                      {project.description.length >= 68 ? (
                        <ReadMore>{project.description}</ReadMore>
                      ) : (
                        project.description
                      )}
                    </span>

                    <h6 className="responsive-text mt-3">
                      <strong>TECHNOLOGIES USED</strong>
                    </h6>

                    <span className="responsive-text">
                      {project.technology.length >= 68 ? (
                        <ReadMore>{project.technology}</ReadMore>
                      ) : (
                        project.technology
                      )}
                    </span>
                  </div>

                  <div className="justify-content-between col-12 mb-2 pt-4">
                    {project.github ? (
                      <Button
                        href={project.github}
                        target="_blank"
                        style={{ borderRadius: "50%" }}
                        variant="light"
                        className="btn-sm p-1 icons git-link"
                        rel="noreferrer"
                        id="icons"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="bi bi-code-slash p-1 contact-icons"
                          viewBox="0 0 16 16"
                        >
                          <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z" />
                        </svg>
                      </Button>
                    ) : (
                      <></>
//                       <div
//                         href={project.github}
//                         target="_blank"
//                         style={{ borderRadius: "20px" }}
//                         variant="light"
//                         className="btn-sm p-1 icons git-link"
//                         rel="noreferrer"
//                         id="icons"
//                         disabled
//                       >
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           className="bi bi-code-slash p-1 contact-icons"
//                           viewBox="0 0 16 16"
//                         >
//                           <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z" />
//                         </svg>
//                       </div>
                    )}

                    {project.link ? (
                      <Button
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        style={{ borderRadius: "50%" }}
                        variant="light"
                        className="btn-sm p-1 icons site-link"
                        id="icons"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="bi bi-envelope p-1 contact-icons"
                          viewBox="0 0 16 16"
                        >
                          <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z" />
                          <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z" />
                        </svg>
                      </Button>
                    ) : (
                      <></>
                    )}
                  </div>
                </Card.Body>
              </div>
            </Card>
          </div>
        ))}

        <div className="d-grid mt-4 mb-5 pb-1">
          {!isCompleted ? (
            <>
              <button
                onClick={loadMore}
                type="button"
                className="load-more-button"
              >
                Load More +
              </button>
            </>
          ) : (
            <></>
          )}
        </div>
      </Row>
    </Container>
  );
};

export default Projects;
