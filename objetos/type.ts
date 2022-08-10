(() => {
  //tipos para obligar y poner reglas a un objeto o variable
  type Hero = {
    name: string;
    age?: number;
    powers: string[];
    getName?: () => string;
  };

  let flash: Hero = {
    name: "Barry Allen",
    age: 24,
    powers: ["Super velocidad", "Viaje en el tiempo"],
  };

  let superman: Hero = {
    name: "Clak Kent",
    age: 60,
    powers: ["Super velocidad"],
  };
})();
