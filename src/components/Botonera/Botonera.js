import { Col, Container, Nav, Row } from "react-bootstrap";

import logo from "../../assets/img/logo.png";
import { Link } from "react-scroll";

const Botonera = () => {
  return (
    <>
      {
        //botonera desktop
      }
      <Container fluid className="botonera d-md-block d-none">
        <Container>
          <Row>
            <Col md={12} className="d-flex justify-content-center flex-md-row flex-column pt-md-0 pt-3">
              <div className="m-md-3 mb-3 container-btn">
                <Link className="link" to="marcas" spy={true} smooth={true} duration={500}>
                  OKM
                </Link>
              </div>
              <div className="m-md-3 mb-3 container-btn">
                <Link className="link" to="usados" spy={true} smooth={true} duration={500}>
                  USADOS
                </Link>
              </div>
              <div className="m-md-3  mb-3 container-btn">
                <Link className="link" to="servicios" spy={true} smooth={true} duration={500}>
                  SERVICIOS
                </Link>
              </div>
              {/* <div className="m-md-3 mb-3 container-btn">
                <Link className="link" to="novedades" spy={true} smooth={true} duration={500}>
                  NOVEDADES
                </Link>
              </div> */}
            </Col>
          </Row>
        </Container>
      </Container>
      {
        //botonera mobile
      }
      <Nav className="me-auto botonera-mobile pt-4 d-md-none d-block">
        <Nav.Link className="mb-3">
          {" "}
          <Link className="link" to="marcas" spy={true} smooth={true} duration={500}>
            OKM
          </Link>
        </Nav.Link>
        <Nav.Link className="mb-3">
          {" "}
          <Link className="link" to="usados" spy={true} smooth={true} duration={500}>
            USADOS
          </Link>
        </Nav.Link>
        <Nav.Link className="mb-3">
          {" "}
          <Link className="link" to="servicios" spy={true} smooth={true} duration={500}>
            SERVICIOS
          </Link>
        </Nav.Link>
        {/* <Nav.Link className="mb-3">
          {" "}
          <Link className="link" to="novedades" spy={true} smooth={true} duration={500}>
            NOVEDADES
          </Link>
        </Nav.Link> */}
      </Nav>
    </>
  );
};

export default Botonera;
