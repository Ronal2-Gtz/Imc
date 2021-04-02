import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import { calcularComposicionCorporal } from "../helpers/calcularComposicionCorporal";
import "./styles.css";

const Progress = ({ imc }) => {
  const [resp, setResp] = useState({});
  useEffect(() => {
    const result = calcularComposicionCorporal(imc);
    setResp(result);
  }, [imc]);

  const { imcCorporal, imcWidth, color } = resp;

  return (
    <>
      {imc ? (
        <div className="animate__animated animate__fadeInDown animate__fast">
          <div className="progress animate__animated animate__fadeInDown animate__fast">
            <div
              className="triangle animate__animated"
              style={{ left: `${imcWidth}%` }}
            ></div>
          </div>
          <span>
            Bajo Peso - Peso Normal - Preobesidad - Obesidad 1 - Obesidad 2
          </span>
        </div>
      ) : null}
    </>
  );
};

Progress.propTypes = {
  imc: PropTypes.number.isRequired,
};

export default Progress;
