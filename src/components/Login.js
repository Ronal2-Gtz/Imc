import React, { useState } from "react";
import { GoogleLogin } from "react-google-login";

const Home = () => {
  let Storage = window.localStorage;

  const responseGoogle = (response) => {
    const id_token = response.tokenObj.id_token;

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost:8282/loginGoogle");
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onload = function () {
      const dataServer = xhr.responseText;
      const dataUser = JSON.parse(dataServer);
      if (!dataUser.error) {
        Storage.setItem("token", dataUser.token);
        window.location.href = "/imc";
      }
    };
    xhr.send("idtoken=" + id_token);
  };

  return (
    <div className="container ">
      <div className="Imc">
        <h1 className="animate__animated animate__fadeInDown">
          LA APLICACION MAS HPUTA DEL MUNDO
        </h1>
      </div>
      <div className="cardContainer animate__animated animate__fadeInUp">
        <div className="card cardContainerLogin">
          <div className="card__login">
            <h2 className="h2Login">Iniciar Sesion</h2>
            <GoogleLogin
              clientId="213496655861-onv3m90hfb1u5nr0qj63gf9q2cv7rpau.apps.googleusercontent.com"
              buttonText="Inicia Sesion Con Google"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={"single_host_origin"}
              className="hola"
              theme='dark'
              icon={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
