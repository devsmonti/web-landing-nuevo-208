import { Modal } from "react-bootstrap";
import ford from "../../assets/img/marcas/color/ford.png";
import fiat from "../../assets/img/marcas/color/fiat.png";
import hyundai from "../../assets/img/marcas/color/hyundai.png";
import jeep from "../../assets/img/marcas/color/jeep.png";
import peugeot from "../../assets/img/marcas/color/peugeot.png";

const ModalPosventa = (props) => {
  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered className="modalMarcas">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Seleccioná la marca de tu vehículo.</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className=" d-flex justify-content-center align-content-center align-items-center flex-md-row flex-column">
          <a
            href="https://montironiford.com/posventa-opciones/"
            target={"_blank"}
            className="boxMarca"
            rel="noreferrer"
          >
            <img src={ford} />
          </a>
          <a
            href="https://www.montironifiat.com.ar/post_venta/"
            target={"_blank"}
            className="boxMarca"
            rel="noreferrer"
          >
            <img src={fiat} />
          </a>
          <a href="https://montironijeep.com/post_venta/" target={"_blank"} className="boxMarca" rel="noreferrer">
            <img src={jeep} />
          </a>
          <a href="https://montironipeugeot.com.ar/post_venta/" target={"_blank"} className="boxMarca" rel="noreferrer">
            <img src={peugeot} />
          </a>
          <a href="https://automonthyundai.com.ar/posventa/" target={"_blank"} className="boxMarca" rel="noreferrer">
            <img src={hyundai} />
          </a>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ModalPosventa;
