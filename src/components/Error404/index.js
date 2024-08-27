import { Col } from "react-bootstrap";
import advertencia from "../../assets/img/advertencia.png";

const Error404 = () => {
  return (
    <div style={{ height: "600px", paddingTop: "200px", paddingBottom: "200px" }}>
      <Col
        md={9}
        xs={11}
        className="mx-auto d-flex justify-content-center align-content-center align-items-center flex-column"
      >
        <img src={advertencia} alt="Se ha producido un error" style={{ maxWidth: "100px" }} />
        <p className="noVehicles text-center pt-4">No encontramos lo que estás buscando...</p>
      </Col>
    </div>
  );
};

export default Error404;
