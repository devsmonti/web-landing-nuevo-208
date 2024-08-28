import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import chevronback from "../../assets/img/chevronback.svg";
import chevronforward from "../../assets/img/chevronforward.svg";

const TabModelo = ({ item, selectedColor, selectedTransmision, setSelectedTransmision, setSelectedColor }) => {
  let coloresTotales = item.types
    .filter((t) => t.transmision === selectedTransmision)[0]
    .colores?.map((colores) => colores);

  // Function to find the current index of the selected color
  function findCurrentIndex(color) {
    return coloresTotales.findIndex((item) => item.color === color);
  }

  // Function to move to the next color
  function moveToNextColor(color) {
    let currentIndex = findCurrentIndex(color);
    let nextIndex = (currentIndex + 1) % coloresTotales.length;
    selectedColor = coloresTotales[nextIndex].color;
    setSelectedColor(coloresTotales[nextIndex]);
  }

  // Function to move to the previous color
  function moveToPreviousColor(color) {
    let currentIndex = findCurrentIndex(color);
    let prevIndex = (currentIndex - 1 + coloresTotales.length) % coloresTotales.length;
    selectedColor = coloresTotales[prevIndex].color;
    setSelectedColor(coloresTotales[prevIndex]);
  }

  const boldSpecs = [
    "Motor EC5 1.6L y caja manual de 5 marchas",
    "Motor EC5 1.6L y caja automática de 6 marchas",
    "Motor T200 y caja automática CVT de 7 marchas",
    "Parrilla color carrocería",
    "Llantas 17'' diamantadas y pasaruedas negro",
    "Alerón trasero y salida de escape cromada",
    "Interior con costuras verdes GT",
    "Volante con insignia GT",
  ];

  return item ? (
    <Col className="text-center pb-3 card m-0  flex-column justify-content-between">
      <Row>
        <Col>
          <Row>
            <Col md={12} xl={12} xxl={12} xs={12} className="mx-auto pt-md-4 pt-4">
              <div>
                <p className="text-start fw-bold ps-3" style={{ fontSize: "24px" }}>
                  {item.modelo}
                </p>
              </div>
            </Col>
          </Row>

          <div className="pb-3 d-flex justify-content-between flex-row">
            <div className="pt-5">
              <div className="pt-4">
                <img
                  src={chevronback}
                  onClick={() => moveToPreviousColor(selectedColor.color)}
                  style={{ width: 10, cursor: "pointer", margin: "0px 10px 0 10px" }}
                />
              </div>
            </div>

            <div>
              <img src={selectedColor?.file} alt={item?.modelo} className="img-fluid" />
            </div>
            <div className="pt-4">
              <div className="pt-5">
                <img
                  src={chevronforward}
                  onClick={() => moveToNextColor(selectedColor.color)}
                  style={{ width: 10, cursor: "pointer", margin: "0px 10px 0 10px" }}
                />
              </div>
            </div>
          </div>

          <Row>
            <Col md={12} xl={12} xxl={12} xs={12} className="mx-auto pt-md-0 pt-0">
              <div className="pb-3 d-flex justify-content-center flex-row ps-2">
                {coloresTotales?.map((colores) => (
                  <div
                    className="divColor m-2 "
                    style={{ backgroundColor: colores.color, cursor: "pointer" }}
                    onClick={() => setSelectedColor(colores)}
                  ></div>
                ))}
              </div>
            </Col>
          </Row>

          <div>
            <Row>
              <Col md={12} xl={12} xxl={12} xs={12} className="mx-auto pt-md-1 pt-4">
                <p className="text-start fw-bold ps-3">Sus principales características</p>
                <ul>
                  {item.types[0].specs?.map((spec) => (
                    <li
                      key={spec}
                      className={`text-start ${boldSpecs.includes(spec) ? "fw-bold" : ""}`}
                      style={{ fontSize: "14px", lineHeight: "25px", paddingRight: "10px" }}
                    >
                      {spec}
                    </li>
                  ))}
                </ul>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>

      <Row className="pt-3">
        <Col>
          <Row>
            <Col md={11} xl={11} xxl={11} xs={11} className="mx-auto pt-md-1 pt-md-4 pt-1 text-center">
              <a
                href={"#form"}
                target={"_self"}
                rel="noreferrer"
                className="btn btn-blue-destacado pt-2 pb-2 text-center d-inline-block w-100"
              >
                Quiero saber mas
              </a>
            </Col>
          </Row>

          <Row>
            <Col md={12} xl={12} xxl={12} xs={12} className="mx-auto pt-md-1 pt-md-4 pt-0">
              <a href={item.ficha} className="linkDefault d-block mx-auto" target="_blank" rel="noreferrer">
                <div className="text-center pt-4">
                  <div style={{ color: "#000" }}>Ficha Técnica</div>
                </div>
              </a>
            </Col>
          </Row>
        </Col>
      </Row>
    </Col>
  ) : (
    <p>Cargando...</p>
  );
};

export default TabModelo;
