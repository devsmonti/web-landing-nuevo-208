import { Card, Col, Container, Row } from "react-bootstrap";
import picture1 from "../../assets/img/ranger/01.png";
import picture2 from "../../assets/img/ranger/02.png";
import picture3 from "../../assets/img/ranger/03.png";
import picture4 from "../../assets/img/ranger/04.png";
import picture5 from "../../assets/img/ranger/05.png";
import picture6 from "../../assets/img/ranger/06.png";
import picture7 from "../../assets/img/ranger/07.png";
import picture8 from "../../assets/img/ranger/08.png";

const Conocela = () => {
  const datos = [
    {
      picture: picture1,
    },
    {
      picture: picture2,
    },
    {
      picture: picture3,
    },
    {
      picture: picture4,
    },
    {
      picture: picture5,
    },
    {
      picture: picture6,
    },
    {
      picture: picture7,
    },
    {
      picture: picture8,
    },
  ];
  return (
    <Container fluid className="pt-5">
      <Row>
        <Col className="text-center">
          <h1 className="titNuevaVersion pt-5 pb-4">Conocela un poco más</h1>
        </Col>
      </Row>
      <Row>
        {datos.map((item, index) => (
          <Col md={3} xs={6} className="p-0 m-0 text-center">
            <img src={item.picture} className="img-fluid" key={index} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Conocela;
