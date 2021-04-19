import React from "react";
import axios from "axios";
import { GoogleLogin } from "react-google-login";

const url = "http://localhost:8282/loginGoogle";

const Home = ({ history }) => {
  const responseGoogle = async (response) => {
    const idtoken = response.tokenObj.id_token;
    const { data } = await axios.post(url, {
      idtoken,
    });

    if (!data.error) {
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data));
      history.push("/imc");
    }
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
              theme="dark"
              icon={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
