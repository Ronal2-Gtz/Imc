import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { Estadisticas } from "./Estadisticas";
import moment from 'moment'
moment.locale('es');


export const Data = () => {

  const [userHistorial, setUserHistorial] = useState([])
  

  useEffect(() => {
    const {
      searchUser: { _id },
    } = JSON.parse(localStorage.getItem("user"));
    getUserData(_id);
    
  }, [])
  

const getUserData = async (id) => {
    try {
      const { data } = await axios.get(`http://localhost:8282/imc/${id}`); 
      setUserHistorial(data.data)
    } catch (error) {
      console.log(error);
    }
  };
  
  return (
    <div className="container">
      <Navbar />
      <div className="Imc2"></div>
      <Estadisticas />
      <hr />
      <div className="container__tabla">
        <div>
          <table className="table">
            <thead>
              <tr className="table__head">
                <th>Fecha</th>
                <th>Nombre</th>
                <th>Peso</th>
                <th>Altura</th>
                <th>Genero</th>
                <th>Años</th>
                <th>IMC</th>
              </tr>
            </thead>
            <tbody>
         
              {
                userHistorial.map((x)=>{
                  const {date, gender, name, year, imc, weight, height, _id } = x;
                  const xd = moment(date).format('MMMM Do YYYY, h:mm:ss a')
                  
                  return(
                    <tr key={_id}>
                      <th>{xd}</th>
                      <th>{name}</th>
                      <th>{weight}</th>
                      <th>{height}</th>
                      <th>{gender}</th>
                      <th>{year}</th>
                      <th>{imc}</th>
                    </tr>
                  )
                })
              } 
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
