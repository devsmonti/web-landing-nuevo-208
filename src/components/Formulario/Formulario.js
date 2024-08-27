import { Form, Col, Row, Button, Container } from "react-bootstrap";
import { FaTemperatureHigh, FaWhatsapp, FaPhone } from "react-icons/fa";
import { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import check from "../../assets/img/check.png";
import { useParams } from "react-router-dom";

import loadingImg from "../../assets/img/loading.svg";
import { sendPostRequest } from "../../config/desol";

const Formulario = () => {
  const [loading, setLoading] = useState(true);
  // console.log(vehicles);

  const query = new URLSearchParams(window.location.search);
  const utm_source = (query && query.get("utm_source")) || sessionStorage.getItem("utm_source");
  const utm_medium = (query && query.get("utm_medium")) || sessionStorage.getItem("utm_medium");

  const [validated, setValidated] = useState(false);
  const [tipoTemplate, setTipoTemplate] = useState("landing_unica_fiat_conv");
  const [desolChannel, setDesolChannel] = useState("C12_FIAT_JEEP_PEUGEOT_LANDINGS");
  const [status, setStatus] = useState(null);
  const [toSend, setToSend] = useState({
    name: "",
    email: "",
    phone: "",
    comments: "",
    origen: `LANDING 208 - ${utm_source ? utm_source : ""}  ${utm_medium ? utm_medium : ""}`,
  });

  //console.log(toSend);

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  function objectToFormData(obj) {
    const formData = new FormData();

    Object.entries(obj).forEach(([key, value]) => {
      formData.append(key, value);
    });

    return formData;
  }

  const onSubmit = (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
      // console.log("no valido");
    }
    setValidated(true);
    if (form.checkValidity() === true) {
      e.preventDefault();
      setStatus("cargando");

      // fetch(`https://sheet.best/api/sheets/15f6d2fe-9e31-4553-82a4-016b6547762a`, {
      //   method: "POST",
      //   body: objectToFormData({
      //     Nombre: toSend.name,
      //     Email: toSend.email,
      //     Telefono: toSend.phone,
      //   }),
      // })
      //   .then((res) => {
      //     setStatus("ok");
      //     console.log("SUCCESSFULLY SUBMITTED");
      //   })
      //   .catch((err) => setStatus("error"));

      // emailjs
      //   .send("landingMontironi", "comercialMustangMachE", toSend, "user_EIC1ELQk7I3NPaFMEDa64")
      //   .then((response) => {
      //     setStatus("ok");

      //     setTimeout(() => {
      //       setStatus(null);
      //       setValidated(false);
      //       setToSend({
      //         ...toSend,
      //         name: "",
      //         email: "",
      //         phone: "",
      //         comments: "",
      //         origen: "",
      //       });
      //     }, 903000);
      //   })
      //   .catch((err) => {
      //     setStatus("error");
      //     setTimeout(() => {
      //       setStatus(null);
      //     }, 960000);
      //   });

      const data = {
        Apellido: toSend.name,
        Email: toSend.email,
        Telefono: toSend.phone,
        Canal: "Venta directa",
        Motivo: toSend.comments,
        OrigenLead: `${process.env.REACT_APP_LANDING} - ${utm_source}`,
        CommercialCampaign: utm_medium,
        Campaign: desolChannel,
        Modelo_Pedido: "208",
      };

      // API DESOL
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
      <>
        {status === null && (
          <>
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
                  />
                  <p className="helpText" style={{ color: "white" }}>
                    Ingresá tu número sin 0 y sin 15.
                  </p>
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
                  />
                </Col>
                <Col md={3} className="pb-3">
                  <div>
                    <Button
                      type="submit"
                      className="btn-blue-destacado w-100 text-center "
                      style={{ minHeight: "50px", height: "50px" }}
                    >
                      <p className="m-0 p-0 w-100 text-center pt-2">Enviar</p>
                    </Button>
                  </div>
                </Col>
              </Row>
              {/* 
              <Row>
                <Col md={12} className="pb-3">
                  <label className="pb-3">Dejanos tu consulta</label>
                  <textarea
                    className="form-control inputConsulta"
                    placeholder="Comentarios..."
                    name="comments"
                    id="comments"
                    rows="4"
                    onChange={handleChange}
                    value={toSend.comments}
                  >
                    {toSend.comments}
                  </textarea>
                </Col>
              </Row> */}

              {/* <Row>
                <Col md={12} className="pb-3 d-flex justify-content-end ">
                  <div>
                    <Button type="submit" className="btn-black">
                      Enviar
                    </Button>
                  </div>
                </Col>
              </Row> */}
            </Form>
          </>
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
              <p style={{ textAlign: "center", color: "black" }}>Vuelva a intentarlo mas tarde</p>
            </div>
          </div>
        )}
      </>
    </Container>
  );
};

export default Formulario;
