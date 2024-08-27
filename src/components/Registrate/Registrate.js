import { Button, Col, Container, Row } from "react-bootstrap";
import Formulario from "../Formulario/Formulario";

const Registrate = () => {
  return (
    <Container fluid className="preventaDiv pt-4  pb-5">
      <Container>
        <Row>
          <Col className="text-center pt-3 d-flex justify-content-center flex-column mt-3 mb-0 mx-auto" md={12} xs={11}>
            <h1 className="me-3 pt-1  text-md-center text-start">Tenelo antes que nadie en Montironi</h1>

            <h3 className="text-md-center text-start">
              Completá con tus datos y un asesor se pondrá en contacto con vos
            </h3>
          </Col>
        </Row>
        <Row>
          <Col md={11} className="mx-auto">
            <Formulario />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Registrate;
