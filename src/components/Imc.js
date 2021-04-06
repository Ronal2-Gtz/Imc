import React, { useState } from "react";
import Progress from "./Progress";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";

import "react-notifications/lib/notifications.css";
import "./styles.css";

const Imc = () => {
  const [pesoEstatura, setPesoEstatura] = useState({
    peso: "",
    estatura: "",
  });
  const [imc, setImc] = useState(0);

  const { peso, estatura } = pesoEstatura;

  const handleInputs = (e) => {
    setPesoEstatura({
      ...pesoEstatura,
      [e.target.name]: Number(e.target.value),
    });
  };

  const handleForm = (e) => {
    e.preventDefault();
    if (!peso || !estatura) {
      return NotificationManager.error("Todos los campos son obligatorios", "Advertencia!");
    }
    const convirtiendoEstatura = estatura / 100;
    const resultImc = peso / (convirtiendoEstatura * convirtiendoEstatura);
    setImc(Number(resultImc.toFixed(2)));
  };

  return (
    <div className="container ">
      <div className="Imc">
        <h1 className='animate__animated animate__fadeInDown'>CALCULA TU IMC</h1>
      </div>
      <div className="cardContainer animate__animated animate__fadeInUp">
        <div className="card">
          <div className="card__fondo"></div>
          <div className="card__data">
            <form className="card__form" onSubmit={handleForm}>
              <h2>Indice De Masa Corporal</h2>
              <input
                onChange={handleInputs}
                name="peso"
                type="number"
                className="card__input"
                placeholder="Peso (KG)"
                autoComplete="off"
              />
              <input
                onChange={handleInputs}
                name="estatura"
                type="number"
                className="card__input"
                placeholder="Estatura (CM)"
                min="0"
                autoComplete="off"
              />
              <button className="card__button" type="submit">
                Calcular
              </button>

              <Progress imc={imc} />
            </form>
          </div>
        </div>
      </div>
      <NotificationContainer />
    </div>
  );
};

export default Imc;
