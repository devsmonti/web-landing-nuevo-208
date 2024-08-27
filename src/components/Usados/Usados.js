import { Col, Container, Row } from "react-bootstrap";
import logo from "../../assets/img/usados.png";
import arrow from "../../assets/img/arrow.png";
import notebook from "../../assets/img/notebook.png";
import search from "../../assets/img/search.png";
import SocialLateral from "../SocialLateral/SocialLateral";
import ig from "../../assets/img/social/ig-corto.png";
import fb from "../../assets/img/social/fb-corto.png";
import iglarge from "../../assets/img/social/instagram_lateral.png";
import fblarge from "../../assets/img/social/facebook_lateral.png";

const Usados = () => {
  return (
    <Container fluid className="usados">
      <Row>
        <Col className="p-0 m-0 ">
          <div className="intro w-100 d-flex justify-content-md-center justify-content-between flex-md-column align-content-center align-items-center">
            <div>
              <a href="https://www.montironiusados.com" target="_blank" rel="noreferrer">
                <img src={logo} />
              </a>
            </div>
            <div className="d-md-none d-flex justify-content-center align-content-center align-items-center flex-row pe-4">
              <div className="pe-3">
                <a
                  href={`https://www.instagram.com/montironi.usados/`}
                  target="_blank"
                  rel="noreferrer"
                  className="mb-3"
                >
                  <img src={ig} />
                </a>
              </div>

              <div>
                <a href={`https://www.facebook.com/montironiusados`} target="_blank" rel="noreferrer" className="mb-3">
                  <img src={fb} />
                </a>
              </div>
            </div>
          </div>
        </Col>
      </Row>
      <Row className="pt-md-5 pb-0">
        <Container>
          <Row>
            <Col md={10} xs={11} className="mx-auto">
              <div className="notebook d-flex flex-row align-content-md-center align-items-md-center justify-content-md-center flex-md-row flex-column">
                <div className="mb-5 pt-md-0 pt-4">
                  <img src={search} className="img-fluid mb-5 d-md-block d-none" />
                  <h2 className="text-start">
                    <span>TOMAMOS TU USADO</span> <br /> AL MEJOR PRECIO.
                  </h2>
                  <div className="d-flex justify-content-start flex-row pt-3">
                    <div className="me-2">
                      <img src={arrow} />
                    </div>
                    <div>
                      <p className="entrega text-start">
                        Entregá tu auto como parte de pago y financiá <br className="d-md-block d-none" /> el resto de
                        tu okm.
                      </p>
                      <div className="d-flex flex-wrap pt-2 text-md-start text-center d-flex justify-content-md-start justify-content-center flex-row">
                        <div className="d-md-none d-block pb-5 pt-4">
                          <img src={notebook} className="img-fluid" />
                        </div>

                        <div className="text-md-start text-center d-md-flex justify-content-md-start justify-content-center flex-row d-block w-100-mobile">
                          <a
                            href="https://www.montironiusados.com"
                            target="_blank"
                            className="btn btnVerde"
                            rel="noreferrer"
                          >
                            Visitar sitio
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-md-block d-none">
                  <img src={notebook} className="img-fluid" />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Row>
      <Row className="pt-0 pb-4 d-md-block d-none">
        <Col className="m-0 p-0">
          <div className="d-flex flex-column">
            <a href={`https://www.facebook.com/montironiusados`} target="_blank" rel="noreferrer" className="mb-3">
              <img src={fblarge} />
            </a>

            <a href={`https://www.instagram.com/montironi.usados/`} target="_blank" rel="noreferrer" className="mb-3">
              <img src={iglarge} />
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Usados;
