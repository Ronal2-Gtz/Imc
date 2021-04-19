export const calculateImc = (height, weight) => {
    const convirtiendoEstatura = height / 100;
    const resultImc =
    weight / (convirtiendoEstatura * convirtiendoEstatura);
    return resultImc.toFixed(2)
}