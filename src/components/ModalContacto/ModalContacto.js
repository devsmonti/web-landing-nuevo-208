import { Modal } from "react-bootstrap";
import Formulario from "../Formulario/Formulario";

const ModalContacto = (props) => {
  return (
    <Modal {...props} size="md" aria-labelledby="contained-modal-title-vcenter" centered className="modalContacto">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Quiero asesoramiento</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Formulario
          filtrados={props.filtrados}
          vMarca={props.vMarca ? props.vMarca : null}
          vModelo={props.vModelo ? props.vModelo : null}
        />
      </Modal.Body>
    </Modal>
  );
};

export default ModalContacto;
