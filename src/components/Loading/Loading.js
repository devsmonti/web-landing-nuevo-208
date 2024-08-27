import { Row, Col } from "react-bootstrap";
import loading from "../../assets/img/loading.svg";
import preload from "../../assets/img/preload.gif";

const Loading = ({ styles }) => {
  return (
    <Row className="vh-100">
      <Col md={12} className={`d-flex justify-content-center align-content-center align-items-center ${styles}`}>
        <img src={preload} alt="Cargando..." style={{ maxWidth: "150px" }} />
      </Col>
    </Row>
  );
};

export default Loading;
