import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import { calcularComposicionCorporal } from "../helpers/calcularComposicionCorporal";
import "./styles.css";

const Progress = ({ imc }) => {
  const [resp, setResp] = useState({});
  useEffect(() => {
    const result = calcularComposicionCorporal(imc);
    setResp(result);
  }, [imc]);

  const { consejo, imcWidth, masa } = resp;

  const handleAlert = () => {
    Swal.fire({
      title: masa,
      icon: masa === "Peso Normal" ? "success" : "info",
      html: `
    <h3>Consejos</h3>
    ${consejo}
    `,
      focusConfirm: false,
      showClass: {
        popup: "animate__animated animate__backInDown",
      },
      hideClass: {
        popup: "animate__animated animate__backOutUp",
      },
    });
  };

  return (
    <>
      {imc ? (
        <>
          <h2 className="resultImc">Imc: {imc}</h2>
          <div className="animate__animated animate__fadeInDown animate__fast progressContainer ">
            <div className="progress animate__animated animate__fadeInDown animate__fast">
              <div
                className="triangle animate__animated"
                style={{ left: `${imcWidth}%` }}
              ></div>
            </div>
            <span>
              Bajo Peso - Peso Normal - Preobesidad - Obesidad 1 - Obesidad 2
            </span>

            <button
              className="card__button button_recomend"
              onClick={handleAlert}
            >
              {" "}
              Ver recomendaciones
            </button>
          </div>
        </>
      ) : null}
    </>
  );
};

Progress.propTypes = {
  imc: PropTypes.number.isRequired,
};

export default Progress;
