export const calculateImc = (height, weight, gender) => {
    const convirtiendoEstatura = height / 100;
    const resultImc =
    weight / (convirtiendoEstatura * convirtiendoEstatura);
    // if (gender === "F") {
    //     parseInt(resultImc) - 10;
        
    // }
    return resultImc.toFixed(2)
}