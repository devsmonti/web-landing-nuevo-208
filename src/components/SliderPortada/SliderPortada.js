import { Container, Row, Col, Carousel } from "react-bootstrap";
import sliderDesktop from "../../assets/img/slider.png";
import sliderMobile from "../../assets/img/slider-mobile.png";
import arrrowdown from "../../assets/img/arrowdown.png";

const SliderPortada = () => {
  return (
    <Container fluid className="p-0 m-0" style={{ background: "#030158" }}>
      <Row className="p-0 m-0">
        <Col md={12} className="mx-auto p-0 m-0">
          <div className="d-md-block d-none p-0 m-0">
            <Carousel controls={false} indicators={false} className="p-0 m-0">
              <Carousel.Item key={1} className="p-0 m-0">
                <a href={"#form"} target={"_self"} rel="noreferrer">
                  <img className="d-block w-100 img-fluid" src={sliderDesktop} alt="Montironi Peugeot" />
                </a>
                <div className="boxConocelo" style={{ bottom: "50px" }}>
                  <div className="w-100 d-flex justify-content-center flex-column align-items-center align-content-center">
                    <h1 className="pb-2">Conocé todas sus versiones</h1>
                    <img src={arrrowdown} alt="Montironi Peugeot" />
                  </div>
                </div>
              </Carousel.Item>
            </Carousel>
          </div>
          <div className="d-md-none d-block">
            <Carousel controls={false} indicators={false}>
              <Carousel.Item key={1}>
                <a href={"#form"} target={"_self"} rel="noreferrer">
                  <img className="d-block w-100 img-fluid" src={sliderMobile} alt="Montironi Peugeot" />
                </a>
                <div className="boxConocelo" style={{ bottom: "50px" }}>
                  <div className="w-100 d-flex justify-content-center flex-column align-items-center align-content-center">
                    <h1 className="pb-2">Conocé todas sus versiones</h1>
                  </div>
                </div>
              </Carousel.Item>
            </Carousel>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default SliderPortada;
