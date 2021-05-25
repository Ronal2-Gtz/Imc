import React, { useEffect, useState } from "react";
import c3 from "c3";
import axios from "axios";


export const Estadisticas = () => {
  const [userData, setUserData] = useState([]);
  const [imc, setImc] = useState([]);
  const [weight, setWeight] = useState([]);

  console.log(userData);
  useEffect(() => {
    const {
      searchUser: { _id },
    } = JSON.parse(localStorage.getItem("user"));
   getUserData(_id);
  }, []);
  
 const getUserData = async (id) => {
    try {
      const { data } = await axios.get(`http://localhost:8282/imc/${id}`);
      const weight = data.data.map((user) => Number(user.weight)) || [];
      const imc = data.data.map((user) => Number(user.imc)) || [];
      setImc(imc);
      setWeight(weight);
      setUserData(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {

    c3.generate({
      bindto: "#chart",
      data: {
        columns: [
            ["IMC", ...imc],
            ["weight", ...weight]
        ],
        type: "line",
      },
    });

  }, [imc, weight]);

  return (
    <div className="estadisticas">
      <div id="chart" />
    </div>
  );
};
