import { Col, Container, Row } from "react-bootstrap";
import logo from "../../assets/img/usados.png";
import arrow from "../../assets/img/arrow.png";
import notebook from "../../assets/img/notebook.png";
import search from "../../assets/img/search.png";
import SocialLateral from "../SocialLateral/SocialLateral";
import BoxServicios from "./BoxServicios";
import { Link } from "react-scroll";
import ModalPosventa from "../ModalPosventa/ModalPosventa";
import { useState } from "react";

const Servicios = () => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <Container fluid className="servicios">
      <Row>
        <Col className="p-0 m-0 ">
          <div className="intro w-100 d-md-flex justify-content-start flex-row align-content-center align-items-center d-none">
            <Container>
              <Row>
                <Col md={12} className="flex-1 d-flex">
                  <h1 className="text-start">CONOCÉ TODOS NUESTROS SERVICIOS</h1>
                </Col>
              </Row>
            </Container>
          </div>

          <div className="intro w-100 d-flex justify-content-start flex-row align-content-center align-items-center d-md-none">
            <h1 className="text-start">CONOCÉ TODOS NUESTROS SERVICIOS</h1>
          </div>
        </Col>
      </Row>
      <Row className="d-md-block d-none">
        <Col>
          <Container>
            <Row>
              <Col md={12} className="flex-1 d-flex subintro">
                <h2 className="text-start">
                  Alquilá un vehículo, hacé tu service en un consecionario oficial de la marca, o agendá un turno por
                  consultas de posventa y repuestos.
                </h2>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
      <Row className="d-flex d-md-none ">
        <Col md={12} className="flex-1 d-flex subintro m-0 p-0">
          <h2 className="text-start">
            Alquilá un vehículo, hacé tu service en un consecionario oficial de la marca, o agendá un turno por
            consultas de posventa y repuestos.
          </h2>
        </Col>
      </Row>
      <Row className="pt-5 pb-0">
        <Container>
          <Row>
            <Col
              md={12}
              className="d-flex justify-content-md-center flex-md-row flex-column justify-content-center align-items-center align-content-center"
            >
              <BoxServicios
                marca="rentauto"
                link="rentautoargentina.com.ar/"
                titulo=""
                descrip="Tu solución de movilidad en Córdoba y Mendoza.
Disponemos de una amplia flota, que se adapta a tus necesidades."
              />

              <BoxServicios
                marca="quicklane"
                link="quicklanecordoba.com/"
                titulo=""
                descrip="Servicio multimarca de mantenimiento y mecánica ligera, en Córdoba.  Amplio stock de neumáticos."
              />

              <BoxServicios
                marca="posventa"
                link="marketing.montironi.com/posventa/"
                titulo=""
                descrip="Service oficial FORD, FIAT, JEEP, RAM, PEUGEOT. Encontrá todo lo que necesitas para tu vehículo."
                servicios
                show={modalShow}
                setModalShow={setModalShow}
              />
            </Col>
          </Row>
        </Container>
      </Row>
      <ModalPosventa show={modalShow} onHide={() => setModalShow(false)} />
    </Container>
  );
};

export default Servicios;
