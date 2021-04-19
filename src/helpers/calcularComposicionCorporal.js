export const calcularComposicionCorporal = (imc) => {
  if (imc < 5) {
    return {
      consejo: `
        <ul style="list-style:none" >
          <li >Comer con más frecuencia.</li>
          <li>Escoger comidas ricas en nutrientes.</li>
          <li>Tomar batidos y licuados de frutas.</li>
          <li>Elegir productos lácteos enteros.</li>
          <li>Cocinar salsas y sopas con leche en lugar de agua.</li>
          <li>Anotar cuándo y cuánto se bebe.</li>
        </ul>
      `,
      imcWidth: 5,
      masa: "Bajo Peso",
    };
  }

  if (imc >= 5 && imc < 85) {
    return {
      consejo: `
        <ul style="list-style:none" >
          <li>Ejercicio físico. La actividad física regular quema calorías y genera tejido muscular.</li>
          <li>Reduce el tiempo ante la pantalla.</li>
          <li>Ten cuidado con las porciones distorsionadas.</li>
          <li>Come 5 porciones de frutas y verduras por día.</li>
          <li>No te saltees el desayuno.</li>
        </ul>
      `,
      imcWidth: 30,
      masa: "Peso Normal",
    };
  }

  if (imc >= 85 && imc < 95) {
    return {
      consejo: `
        <ul style="list-style:none" >
          <li>Falta de actividad física</li>
          <li>Alimentación inadecuada: exceso en el consumo de alimentos procesados y con alta cantidad de grasa, así como, alta ingesta de refrescos y alcohol.</li>
          <li>Genética</li>
          <li>Estilo de vida: el sedentarismo no ayuda a controlar el peso.</li>
          <li>Algunas enfermedades y medicamentos administrados de forma periódica</li>
        </ul>
      `,
      imcWidth: 59,
      masa: "Sobrepeso",
    };
  }

  if (imc >= 95) {
    return {
      consejo: `
      <ul style="list-style:none" >
        <li>Alimentación saludable</li>
        <li>Aumento de la actividad física</li>
        <li>Terapia conductual</li>
        <li>Reemplazos de comidas/dietas de baja energía</li>
        <li>Medicamentos contra la obesidad</li>
        <li>Cirugía bariátrica</li>
      </ul>
      `,
      imcWidth: 87,
      masa: "Obesidad",
    };
  }
};
