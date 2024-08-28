import { Col, Container, Row, Tab, Tabs } from "react-bootstrap";
import TabModelo from "./TabModelo";

//208
import activeblanco from "../../assets/img/208/active/blanco.jpg";
import activegris from "../../assets/img/208/active/gris.jpg";
import activenegro from "../../assets/img/208/active/negro.jpg";

import allureblanco from "../../assets/img/208/allure/blanco.jpg";
import alluregris from "../../assets/img/208/allure/gris.jpg";
import allurenegro from "../../assets/img/208/allure/negro.jpg";
import alluregrisoscuro from "../../assets/img/208/allure/grisoscuro.jpg";
import allureazul from "../../assets/img/208/allure/azul.jpg";

import allurepkblanco from "../../assets/img/208/allure_pk/blanco.png";
import allurepkgris from "../../assets/img/208/allure_pk/gris.png";
import allurepknegro from "../../assets/img/208/allure_pk/negro.png";
import allurepkgrisoscuro from "../../assets/img/208/allure_pk/grisoscuro.png";
import allurepkazul from "../../assets/img/208/allure_pk/azul.png";

import gtblanco from "../../assets/img/208/gt/blanco.png";
import gtgrisoscuro from "../../assets/img/208/gt/grisoscuro.png";
import gtnegro from "../../assets/img/208/gt/negro.png";

import { useState } from "react";

import Slider from "react-slick";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export const colores = {
  azul: "#0785da",
  blanco: "#e0e0dc",
  gris: "#6c7e8c",
  negro: "#000000",
  grisOscuro: "#32343B",
};

const Modelos = () => {
  const models = [
    {
      modelo: "Active",
      id: "Active",
      types: [
        {
          title: "Active",
          specs: [
            "Motor EC5 1.6L y caja manual de 5 marchas",
            "4 airbags",
            "Faros halógenos",
            "Llantas 15'' con cobertor",
            "Espejos negro brillante",
            "Faros LED traseros",
            "PEUGEOT i-Cockpit con tablero analógico",
          ],
          colores: [
            { file: activeblanco, color: colores.blanco },
            { file: activegris, color: colores.gris },
            { file: activenegro, color: colores.negro },
          ],
        },
      ],
      ficha: "",
    },
    {
      modelo: "Allure",
      id: "Allure",
      types: [
        {
          title: "Allure",
          specs: [
            "Motor EC5 1.6L y caja manual de 5 marchas",
            "Nuevos faros DRL TRI LED",
            "Parrilla delantera en negro brillante",
            "Llantas 16'' de aleación",
            "PEUGEOT i-Cockpit con display conductor digital 2D",
            "Pantalla multimedia de 10''",
            "Climatizador automático",
            "Cámara y sensores traseros de estacionamiento",
          ],
          colores: [
            { file: allureblanco, color: colores.blanco },
            { file: alluregrisoscuro, color: colores.grisOscuro },
            { file: allurenegro, color: colores.negro },
            { file: allureazul, color: colores.azul },
            { file: alluregris, color: colores.gris },
          ],
        },
      ],
      ficha: "",
    },
    {
      modelo: "Allure AT",
      id: "Allure AT",
      types: [
        {
          title: "Allure AT",
          specs: [
            "Motor EC5 1.6L y caja automática de 6 marchas",
            "Nuevos faros DRL TRI LED",
            "Parrilla delantera en negro brillante",
            "Llantas 16'' de aleación",
            "PEUGEOT i-Cockpit con display conductor digital 2D",
            "Pantalla multimedia de 10''",
            "Climatizador automático",
            "Cámara y sensores traseros de estacionamiento",
          ],
          colores: [
            { file: allureblanco, color: colores.blanco },
            { file: alluregrisoscuro, color: colores.grisOscuro },
            { file: allurenegro, color: colores.negro },
            { file: allureazul, color: colores.azul },
            { file: alluregris, color: colores.gris },
          ],
        },
      ],
      ficha: "",
    },
    {
      modelo: "Allure PK",
      id: "Allure PK",
      types: [
        {
          title: "Allure PK",
          specs: [
            "Motor EC5 1.6L y caja manual de 5 marchas",
            "6 airbags",
            "Llantas 16'' diamantadas",
            "Techo panorámico cielo",
            "Asientos en tela y cuero",
            "Nuevo cargador inductivo de celular",
          ],
          colores: [
            { file: allurepkblanco, color: colores.blanco },
            { file: allurepkgrisoscuro, color: colores.grisOscuro },
            { file: allurepknegro, color: colores.negro },
            { file: allurepkazul, color: colores.azul },
            { file: allurepkgris, color: colores.gris },
          ],
        },
      ],
      ficha: "",
    },
    {
      modelo: "Allure PK T200",
      id: "Allure PK T200",
      types: [
        {
          title: "Allure PK T200",
          specs: [
            "Motor T200 y caja automática CVT de 7 marchas",
            "6 airbags",
            "Llantas 16'' diamantadas",
            "Techo panorámico cielo",
            "Asientos en tela y cuero",
            "Nuevo cargador inductivo de celular",
          ],
          colores: [
            { file: allurepkblanco, color: colores.blanco },
            { file: allurepkgrisoscuro, color: colores.grisOscuro },
            { file: allurepknegro, color: colores.negro },
            { file: allurepkazul, color: colores.azul },
            { file: allurepkgris, color: colores.gris },
          ],
        },
      ],
      ficha: "",
    },
    {
      modelo: "GT T200",
      id: "GT T200",
      types: [
        {
          title: "GT T200",
          specs: [
            "Motor T200 y caja automática CVT de 7 marchas",
            "Parrilla color carrocería",
            "Faros Full LED",
            "Llantas 17'' diamantadas y pasaruedas negro",
            "Alerón trasero y salida de escape cromada",
            "Interior con costuras verdes GT",
            "Volante con insignia GT",
            "PEUGEOT i-Cockpit 3D",
            "Paquete de Ayudas a la Conducción",
          ],
          colores: [
            { file: gtblanco, color: colores.blanco },
            { file: gtgrisoscuro, color: colores.grisOscuro },
            { file: gtnegro, color: colores.negro },
          ],
        },
      ],
      ficha: "",
    },
  ];
  // Create a state for each model's selected color
  const [selectedColors, setSelectedColors] = useState(
    models.map((model) => ({
      modelId: model.id,
      color: model.types[0].colores[0],
    }))
  );

  const handleColorChange = (modelId, newColor) => {
    setSelectedColors((prevColors) =>
      prevColors.map((colorState) => (colorState.modelId === modelId ? { ...colorState, color: newColor } : colorState))
    );
  };

  return (
    <Container className="pt-5 pb-5" id="versiones">
      <Row>
        {
          // MOBILE VIEW
        }
        <Col className="d-md-none d-block mx-auto" md={11}>
          <div className="slider-container">
            <Slider {...settings}>
              {models.map((model) => {
                const selectedColor = selectedColors.find((colorState) => colorState.modelId === model.id)?.color;
                return (
                  <TabModelo
                    key={model.id}
                    item={model}
                    selectedColor={selectedColor}
                    setSelectedColor={(newColor) => handleColorChange(model.id, newColor)}
                  />
                );
              })}
            </Slider>
          </div>
        </Col>
        {
          // DESKTOP VIEW
        }
        <Col className="d-md-block d-none mx-auto" id="modelos" md={11}>
          <Row className="d-flex justify-content-between">
            {models.map((model, index) => {
              const selectedColor = selectedColors.find((colorState) => colorState.modelId === model.id)?.color;
              return (
                <Col key={model.id} md={4} className="mb-4">
                  <TabModelo
                    item={model}
                    selectedColor={selectedColor}
                    setSelectedColor={(newColor) => handleColorChange(model.id, newColor)}
                  />
                </Col>
              );
            })}
          </Row>
        </Col>
      </Row>
      <div id="form"></div>
    </Container>
  );
};

export default Modelos;
