import { Card, Col, Container, Row } from "react-bootstrap";
import picture1 from "../../assets/img/208/ofrece/1.png";
import picture2 from "../../assets/img/208/ofrece/2.png";
import picture3 from "../../assets/img/208/ofrece/3.png";
import picture4 from "../../assets/img/208/ofrece/4.png";
import picture5 from "../../assets/img/208/ofrece/5.png";
import picture6 from "../../assets/img/208/ofrece/6.png";
import picture7 from "../../assets/img/208/ofrece/7.png";
import picture8 from "../../assets/img/208/ofrece/8.png";

import picture1text from "../../assets/img/208/ofrece/detalle/1.png";
import picture2text from "../../assets/img/208/ofrece/detalle/2.png";
import picture3text from "../../assets/img/208/ofrece/detalle/3.png";
import picture4text from "../../assets/img/208/ofrece/detalle/4.png";
import picture5text from "../../assets/img/208/ofrece/detalle/5.png";
import picture6text from "../../assets/img/208/ofrece/detalle/6.png";
import picture7text from "../../assets/img/208/ofrece/detalle/7.png";
import picture8text from "../../assets/img/208/ofrece/detalle/8.png";

import Slider from "react-slick";

const QueOfrece = () => {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div className={className} style={{ ...style, display: "block", width: "80px", top: "40%" }} onClick={onClick} />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", width: "80px", left: "1%", top: "40%", zIndex: "9999" }}
        onClick={onClick}
      />
    );
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const datos = [
    {
      title: "Carga y autonomía",
      picture: picture1,
      picturetext: picture1text,
    },
    {
      title: "Diseño",
      picture: picture2,
      picturetext: picture2text,
    },
    {
      title: "Tecnología y conectividad",
      picture: picture3,
      picturetext: picture3text,
    },
    {
      title: "Seguridad",
      picture: picture4,
      picturetext: picture4text,
    },
    {
      title: "Seguridad",
      picture: picture5,
      picturetext: picture5text,
    },
    {
      title: "Seguridad",
      picture: picture6,
      picturetext: picture6text,
    },
    {
      title: "Seguridad",
      picture: picture7,
      picturetext: picture7text,
    },
    {
      title: "Seguridad",
      picture: picture8,
      picturetext: picture8text,
    },
  ];
  return (
    <Container fluid style={{ backgroundColor: "#0e0e0e" }}>
      <Container className="m-0 p-0 mx-auto">
        <Row>
          <div className="slider-container">
            <Slider {...settings}>
              {datos.map((item) => (
                <Col md={3} xs={12} className="p-0 m-0">
                  <img src={item.picture} alt="" className="w-100" />
                  <img src={item.picturetext} alt="" className="w-100" />
                </Col>
              ))}
            </Slider>
          </div>
        </Row>
      </Container>
    </Container>
  );
};

export default QueOfrece;
