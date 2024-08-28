import { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import logo from "../../assets/img/logo-white.png";
import wsp from "../../assets/img/wsp.png";

const Header = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 400,
      behavior: "smooth",
    });
  };

  return (
    <Container fluid className="stickyHead">
      <Row>
        <Container fluid className="header">
          <Container>
            <Row>
              <Col
                md={4}
                xs={12}
                className="d-flex justify-content-center align-content-center align-items-center flex-column"
              >
                <div onClick={() => scrollToTop()} style={{ cursor: "pointer" }}>
                  <img src={logo} alt="Montironi Ford" />
                </div>
              </Col>
              <Col md={8} xs={12} className="d-md-flex justify-content-end d-none ">
                <a
                  href={"#form"}
                  target={"_self"}
                  rel="noreferrer"
                  className="btn-blue-destacado  ps-5 pe-5"
                  style={{ cursor: "pointer", textDecoration: "none", paddingTop: "10px" }}
                >
                  Quiero saber más
                </a>
              </Col>
            </Row>
          </Container>
        </Container>
      </Row>
    </Container>
  );
};

export default Header;
