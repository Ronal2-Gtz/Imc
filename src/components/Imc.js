import React, { useState } from "react";
import Progress from "./Progress";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import Navbar from "./Navbar";

import "react-notifications/lib/notifications.css";
import "./styles.css";
import { genders } from "../constant";
import { calculateImc } from "../helpers/calculateImc";
import axios from "axios";

const initialState = {
  weight: "",
  height: "",
  name: "",
  gender: "",
  year: "",
};

const getDataUser = () => {
  const data = JSON.parse(localStorage.getItem("user")) || {};
  return data;
};

const Imc = () => {
  const [userData, setUserData] = useState(initialState);
  const [imc, setImc] = useState(0);
  const [sendData, setSendData] = useState(false)
  const [dataGoogle] = useState(getDataUser());

  const { weight, height, name, gender, year } = userData;

  const handleInputs = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const handleForm = (e) => {
    e.preventDefault();
    if (!weight || !height || !name || !gender || !year) {
      return NotificationManager.error(
        "Todos los campos son obligatorios",
        "Advertencia!"
      );
    }
    const resultImc = calculateImc(Number(height), Number(weight), gender);
    setImc(resultImc);
  };

  const sendImc = async () => {
    const id = dataGoogle.searchUser["_id"];
    const data = Object.assign(userData, { imc, user: id });
    try {
      await axios.post('http://localhost:8282/imc', data)
      NotificationManager.success('Imc guardado correctamente.', 'Guardado con exito')
      setSendData(true)

    } catch (error) {
      console.log(error);

    }
  };

  return (
    <div className="container ">
      <Navbar/>
      <div className="Imc">
        <h1 className="animate__animated animate__fadeInDown">
          CALCULA TU IMC
        </h1>
      </div>
      <div className="cardContainer animate__animated animate__fadeInUp">
        <div className="card">
          <div className="card__fondo"></div>
          <div className="card__data">
            <form className="card__form" onSubmit={handleForm}>
              <h2>Indice De Masa Corporal</h2>
              {imc === 0 ? (
                <div className="card__form__container">
                  <input
                    onChange={handleInputs}
                    name="name"
                    type="text"
                    className="card__input"
                    placeholder="Nombre"
                    autoComplete="off"
                    value={name}
                  />
                  <input
                    onChange={handleInputs}
                    name="year"
                    type="number"
                    className="card__input"
                    placeholder="Edad"
                    min="0"
                    autoComplete="off"
                    value={year}
                  />

                  <select
                    onChange={handleInputs}
                    name="gender"
                    type="number"
                    className="card__input select "
                    placeholder="Edad"
                    min="0"
                    autoComplete="off"
                    value={gender}
                  >
                    <option value="" hidden selected>
                      Genero
                    </option>
                    {genders.map(({ value, label }) => (
                      <option key={value} value={value}>
                        {label}
                      </option>
                    ))}
                  </select>

                  <input
                    onChange={handleInputs}
                    name="weight"
                    type="number"
                    className="card__input"
                    placeholder="Peso (KG)"
                    autoComplete="off"
                    value={weight}
                  />
                  <input
                    onChange={handleInputs}
                    name="height"
                    type="number"
                    className="card__input"
                    placeholder="Estatura (CM)"
                    min="0"
                    autoComplete="off"
                    value={height}
                  />

                  <button className="card__button" type="submit">
                    Calcular
                  </button>
                </div>
              ) : (
                <Progress setSendData={setSendData} sendData={sendData} imc={imc} setImc={setImc} sendImc={sendImc} />
              )}
            </form>
          </div>
        </div>
      </div>
      <NotificationContainer />
    </div>
  );
};

export default Imc;
