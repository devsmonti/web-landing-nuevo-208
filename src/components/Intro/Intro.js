import { Col, Container, Row } from "react-bootstrap";

const Intro = () => {
  return (
    <>
      <Container fluid className="intro_top text-center pt-4 pb-md-4 pb-4 m-0">
        <Row className="m-0">
          <Col className="m-0 ">
            <div className="w-100 d-flex justify-content-center flex-row align-items-center align-content-center">
              <h1>
                Tenelo antes que nadie en <b>Montironi</b>.
              </h1>
              <a
                href={"#form"}
                target={"_self"}
                rel="noreferrer"
                className="btn-blue-destacado  ps-5 pe-5 ms-4"
                style={{ cursor: "pointer", textDecoration: "none", minHeight: "45px", paddingTop: "12px" }}
              >
                Vení a conocerlo
              </a>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="divisorIntro"></div>
    </>
  );
};

export default Intro;
