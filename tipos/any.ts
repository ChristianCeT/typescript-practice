(() => {
  //acepta cualquier tipo de dato
  let avenger: any = 123;
  let exist;
  let power;

  avenger = "Thor";

  /* console.log(avenger.charAt(0)); */
  //casteo para tratar una variable como string
  console.log((avenger as string).charAt(0));

  avenger = 150.38282;

  //otro tipo de casteo
  console.log(<number>avenger.toFixed(2));

  console.log(power);
})();
