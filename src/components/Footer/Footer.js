import { Button, Col, Container, Row } from "react-bootstrap";
import vamosjuntos from "../../assets/img/logo-white.png";
import web from "../../assets/img/web.png";
import yt from "../../assets/img/yt.png";
import fb from "../../assets/img/fb.png";
import ig from "../../assets/img/ig.png";
import { Link } from "react-scroll";

const Footer = () => {
  const query = new URLSearchParams(window.location.search);
  if (query) {
    if (query.get("utm_source")) {
      sessionStorage.setItem("utm_source", query.get("utm_source"));
    }
    if (query.get("utm_medium")) {
      sessionStorage.setItem("utm_medium", query.get("utm_medium"));
    }
  }
  const utm_source = query && query.get("utm_source");
  const utm_medium = query && query.get("utm_medium");

  let utms = "";
  if (utm_source !== null && utm_medium !== null) {
    utms = `?utm_source=${utm_source}&utm_medium=${utm_medium}`;
  }

  return (
    <>
      <Container fluid className="footer  pt-4" name="footer">
        <Row>
          <Col>
            <Container>
              <Row>
                <Col md={12} xs={12} className="mx-auto p-0 m-0">
                  <Row className="d-flex justify-content-between flex-md-row flex-column">
                    <Col
                      className="d-flex justify-content-md-between justify-content-center flex-md-row flex-column mx-auto"
                      md={6}
                      xs={11}
                    >
                      <div className="text-md-start text-center pt-2">
                        <img src={vamosjuntos} className="img-fluid" alt="Montironi" />
                      </div>
                    </Col>

                    <Col
                      md={6}
                      xs={12}
                      className="d-flex justify-content-md-end justify-content-center  flex-md-row flex-column ms-0 ps-0 pb-md-0 pb-4 pt-3"
                    >
                      <p className="text-footer text-md-start text-center mb-0 pb-md-0 pb-4 pt-md-0 pt-4">
                        Seguínos en nuestras redes oficials
                      </p>
                      <div>
                        <div className="d-flex justify-content-md-start justify-content-center  ps-md-5">
                          <div className="" style={{ borderRight: "1px solid #fff", minWidth: "50px" }}>
                            <a href="https://www.facebook.com/MontironiPeugeot" target="_blank" rel="noreferrer">
                              <img src={fb} />
                            </a>
                          </div>
                          <div className=" text-end" style={{ minWidth: "50px" }} target="_blank">
                            <a href="https://www.instagram.com/montironi.peugeot/">
                              <img src={ig} />
                            </a>
                          </div>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
      <Container fluid className="footerWhite">
        <Row>
          <Col>
            <h4>
              Ⓒ Copyright {new Date().getFullYear()}. Montironi Peugeot - <br className="d-block d-md-none" /> Todos los
              derechos reservados
            </h4>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Footer;
