(() => {
  //tuple definir los valores para los que quiero
  //controlar los valores
  //definir los valores de cada uno de los elementos
  const hero: [string, number, boolean] = ["Dr Strange", 100, true];

  hero[0] = "Goku";
  hero[1] = 50;
  hero[2] = false;

  console.log(hero);
})();
