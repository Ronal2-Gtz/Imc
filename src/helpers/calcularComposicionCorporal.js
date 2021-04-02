export const calcularComposicionCorporal = (imc) => {
  if (imc < 18.5) {
    return {
      imcCorporal: "",
      imcWidth: 5,
      color: "",
    };
  }

  if (imc > 18.5 && imc < 24.9) {
    return {
      imcCorporal: "",
      imcWidth: 23,
      color: "",
    };
  }

  if (imc > 25 && imc < 29.9) {
    return {
      imcCorporal: "",
      imcWidth: 46,
      color: "",
    };
  }

  if (imc > 30 && imc < 34.9) {
    return {
      imcCorporal: "",
      imcWidth: 69,
      color: "",
    };
  }

  if (imc > 35) {
    return {
      imcCorporal: "",
      imcWidth: 90,
      color: "",
    };
  }
};
