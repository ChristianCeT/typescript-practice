(() => {
  const goku: string = "Kakaroto";
  const vegeta: string = "Veggeta";
  const freezer: string = `Personaje: FREEZEER`;

  console.log(`I'm ${goku}`);

  console.log(goku[10]?.toUpperCase() || "No hay nada");
})();
