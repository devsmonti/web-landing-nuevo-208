import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./assets/scss/styles.scss";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Error404 from "./components/Error404";
import Intro from "./components/Intro/Intro";

import WspFloat from "./components/WspFloat/WspFloat";
import Formulario from "./components/Formulario/Formulario";
import TagManager from "react-gtm-module";
import { Carousel, Col, Container, Row } from "react-bootstrap";
import Modelos from "./components/Modelos/Modelos";
import Registrate from "./components/Registrate/Registrate";
import QueOfrece from "./components/QueOfrece/QueOfrece";

import SliderPortada from "./components/SliderPortada/SliderPortada";
import WhatsAppFlotante from "./components/WhatsAppFlotante/WhatsAppFlotante";

const tagManagerArgs = {
  gtmId: "",
};

TagManager.initialize(tagManagerArgs);

function App() {
  window.dataLayer.push({
    event: "pageview",
  });
  return (
    <Router basename="/208">
      <Switch>
        <Route exact path="/">
          <Header />
          <SliderPortada />
          <Intro />
          <Modelos />

          <QueOfrece />
          <Registrate />
          <Footer />
          <WhatsAppFlotante />
        </Route>

        <Route path="*">
          <Header bg="bgDark" />
          <Error404 />
          <Footer />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
