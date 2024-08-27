import wsp from "../../assets/img/wsp.png";

const WspFloat = ({ info }) => {
  return (
    <>
      <a
        href={`https://api.whatsapp.com/send?phone=+5493517915708&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20Nueva%20Ranger`}
        class="floatWsp"
        target="_blank"
        rel="noreferrer"
      >
        <img src={wsp} alt="Whatsapp" />
      </a>

      {/* <a href={`https://api.whatsapp.com/send?phone=`} className="floatWsp" target="_blank" rel="noreferrer">
        <img src={wsp} alt="Whatsapp" />
      </a> */}
    </>
  );
};

export default WspFloat;
