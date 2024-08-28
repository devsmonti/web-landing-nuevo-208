import { Form, Col, Row, Button, Container } from "react-bootstrap";
import { useState } from "react";
import { sendPostRequest } from "../../config/desol";
import loadingImg from "../../assets/img/loading.svg";
import check from "../../assets/img/check.png";

const Formulario = () => {
  const query = new URLSearchParams(window.location.search);
  const utm_source = (query && query.get("utm_source")) || sessionStorage.getItem("utm_source");
  const utm_medium = (query && query.get("utm_medium")) || sessionStorage.getItem("utm_medium");

  const [validated, setValidated] = useState(false);
  const [status, setStatus] = useState(null);
  const [desolChannel, setDesolChannel] = useState("C12_FIAT_JEEP_PEUGEOT_LANDINGS");
  const [errors, setErrors] = useState({
    email: null,
    phone: null,
  });
  const [toSend, setToSend] = useState({
    name: "",
    email: "",
    phone: "",
    comments: "",
    origen: `LANDING 208 - ${utm_source ? utm_source : ""}  ${utm_medium ? utm_medium : ""}`,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Handle validations
    if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      setErrors({
        ...errors,
        email: emailRegex.test(value) ? null : "Debe ser una dirección de correo válida",
      });
    }

    if (name === "phone") {
      const phoneRegex = /^\d{10,}$/;
      setErrors({
        ...errors,
        phone: phoneRegex.test(value) ? null : "El numero de teléfono debe tener 10 dígitos",
      });
    }

    setToSend({ ...toSend, [name]: value });
  };

  const onSubmit = (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }
    setValidated(true);

    if (!errors.email && !errors.phone) {
      e.preventDefault();
      setStatus("cargando");

      const data = {
        Apellido: toSend.name,
        Email: toSend.email,
        Telefono: toSend.phone,
        Canal: "Venta directa",
        Motivo: toSend.comments,
        OrigenLead: `${process.env.REACT_APP_LANDING} - ${utm_source}`,
        CommercialCampaign: utm_medium,
        Campaign: desolChannel,
        Modelo_Pedido: "Nuevo 208",
      };

      sendPostRequest(process.env.REACT_APP_DESOL_URL, data)
        .then((response) => {
          setStatus("ok");
          setTimeout(() => {
            setValidated(false);
            setToSend({
              ...toSend,
              name: "",
              email: "",
              phone: "",
              comments: "",
              medio: "",
              horario: "",
              vehicle: "",
              origen: "",
            });
            window.location.href = "https://oficial.montironi.com/208/";
          }, 10000);
        })
        .catch((error) => {
          setStatus("error");
          setTimeout(() => {
            setStatus(null);
          }, 10000);
        });
    }
  };

  return (
    <Container id="form">
      {status === null && (
        <Form onSubmit={onSubmit} noValidate validated={validated}>
          <Row>
            <Col md={3} className="pb-3">
              <Form.Control
                id="name"
                name="name"
                type="text"
                placeholder="Nombre completo"
                value={toSend.name}
                onChange={handleChange}
                required
              />
            </Col>
            <Col md={3} className="pb-3">
              <Form.Control
                id="phone"
                name="phone"
                type="text"
                placeholder="351 xxxxxxxx"
                value={toSend.phone}
                onChange={handleChange}
                required
                isInvalid={!!errors.phone}
                maxLength={10}
              />
              <Form.Control.Feedback type="invalid">{errors.phone}</Form.Control.Feedback>
              {!errors.phone && (
                <p className="helpText" style={{ color: "white" }}>
                  Ingresá tu número sin 0 y sin 15.
                </p>
              )}
            </Col>
            <Col md={3} className="pb-3">
              <Form.Control
                id="email"
                name="email"
                type="email"
                placeholder="email@email.com"
                value={toSend.email}
                onChange={handleChange}
                required
                isInvalid={!!errors.email}
              />
              <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
            </Col>
            <Col md={3} className="pb-3">
              <div>
                <Button
                  type="submit"
                  className="btn-blue-destacado w-100 text-center"
                  style={{ minHeight: "50px", height: "50px" }}
                  disabled={
                    !!errors.email || !!errors.phone || toSend.name === "" || toSend.phone === "" || toSend.email === ""
                  }
                >
                  <p className="m-0 p-0 w-100 text-center pt-2">Enviar</p>
                </Button>
              </div>
            </Col>
          </Row>
        </Form>
      )}

      {status === "cargando" && (
        <div className="msgHeader text-center pt-5 pb-5" id="enviando-mensaje">
          <img src={loadingImg} alt="Cargando..." className="pb-3" style={{ maxWidth: "150px" }} />
          <p style={{ color: "black" }}>Enviando mensaje...</p>
        </div>
      )}

      {status === "ok" && (
        <div className="msgHeader text-center pt-5 pb-5" id="mensaje-enviado">
          <div>
            <img src={check} alt="Enviado" className="img-fluid" style={{ marginBottom: "20px", maxWidth: "60px" }} />
            <p
              style={{
                fontWeight: "bold",
                fontSize: "22px",
                marginBottom: "0",
                textAlign: "center",
                color: "black",
              }}
            >
              Ya enviamos tu consulta.
            </p>
            <p style={{ textAlign: "center", color: "black" }}>
              En las próximas 2 horas, un asesor te contactará para seguir gestionando tu consulta
            </p>
          </div>
        </div>
      )}

      {status === "error" && (
        <div className="msgHeader pt-5 pb-5" id="mensaje-error">
          <div>
            <p
              style={{
                color: "black",
                fontWeight: "bold",
                fontSize: "22px",
                marginBottom: "0",
                textAlign: "center",
              }}
            >
              Se ha producido un error
            </p>
            <p style={{ textAlign: "center", color: "black" }}>Vuelva a intentarlo más tarde</p>
          </div>
        </div>
      )}
    </Container>
  );
};

export default Formulario;
