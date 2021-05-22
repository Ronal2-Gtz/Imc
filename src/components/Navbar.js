import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import iconClose from "../assets/cerrar-sesion.svg";

import "./styles.css";

const Navbar = () => {
  const [img, setImg] = useState(
    "https://ei.phncdn.com/videos/202005/21/316270071/original/(m=qQ53TSVbeaAaGwObaaaa)(mh=Dm4G5rDi2K7wo_x7)0.jpg"
  );
  const [name, setName] = useState("");

  useEffect(() => {
    const {
      searchUser: { urlImage, name },
    } = JSON.parse(localStorage.getItem("user"));
    setName(name);
    setTimeout(() => {
      setImg(urlImage);
    }, 5000);
  }, []);

  const handleclose = () => {
    Swal.fire({
      title: "Quieres cerrar sesion?",
      text: "Estas apunto de cerrar sesion",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, Cerrar sesion!",
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem("token");
        window.location.href = "/";
      }
    });
  };

  return (
    <div className="nabvar">
      <div className="nabvar__items">
        <div className="nabvar__logo">
          <h1>Tu Imc - {name}</h1>
        </div>
        <div className="navbar__elements">
          <img src={img} alt="perfil" />
          <div className="close" onClick={handleclose}>
            <img className="avatar" alt="avatar" src={iconClose} />
            <spna>Cerrar sesion</spna>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
