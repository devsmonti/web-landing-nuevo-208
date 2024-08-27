import rentauto from "../../assets/img/marcas/rentauto.png";
import quicklane from "../../assets/img/marcas/quicklane.png";
import posventa from "../../assets/img/marcas/posventa.png";
import checkpoint from "../../assets/img/marcas/checkpoint.png";
import { Link } from "react-scroll";

const BoxServicios = ({ marca, link, titulo, descrip, setModalShow, modalShow, servicios }) => {
  return (
    <div className={`servicio ${marca}`}>
      <div className="logo">
        {marca === "rentauto" && <img src={rentauto} />}
        {marca === "quicklane" && <img src={quicklane} />}
        {marca === "posventa" && <img src={posventa} />}
        {marca === "checkpoint" && <img src={checkpoint} />}
      </div>
      <div className="overlay">
        <div className="text-start mb-3">
          {marca === "rentauto" && <img src={rentauto} />}
          {marca === "quicklane" && <img src={quicklane} />}
          {marca === "posventa" && <img src={posventa} />}
          {marca === "checkpoint" && <img src={checkpoint} />}
        </div>

        <p className="pb-3">{descrip}</p>
        <div>
          {!servicios ? (
            link !== "footer" ? (
              <a href={`https://www.${link}`} target="_blank" rel="noreferrer">
                Más info
              </a>
            ) : (
              <Link to="footer" spy={true} smooth={true} duration={500} style={{ color: "#FFF" }}>
                Más info
              </Link>
            )
          ) : (
            <Link href="#" onClick={() => setModalShow(true)}>
              Más info
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default BoxServicios;
