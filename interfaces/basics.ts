(() => {
  // un tipo no puede expandirse pero una interfaz puede expandirse
  interface Hero {
    name: string;
    age?: number;
    powers: string[];
    getName?: () => string;
  }

  let flash: Hero = {
    name: "Barry Allen",
    age: 24,
    powers: ["Super velocidad", "Viaje en el tiempo"],
  };

  let superman: Hero = {
    name: "Clak Kent",
    age: 60,
    powers: ["Super velocidad"],
    getName() {
      return this.name;
    },
  };
})();
