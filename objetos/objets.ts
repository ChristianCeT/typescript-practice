(() => {
  let flash: {
    name: string;
    age: number;
    powers: string[];
    getName?: () => string;
  } = {
    name: "Barry Allen",
    age: 24,
    powers: ["Super velocidad", "Viaje en el tiempo"],
  };

  let superman: {
    name: string;
    age: number;
    powers: string[];
    getName?: () => string;
  } = {
    name: "Clak Kent",
    age: 60,
    powers: ["Super velocidad"],
  };

  /* flash = {
    name: "Clark Kent",
    age: 50,
    powers: ["Super fuerza"],
    getName() {
      return this.name;
    },
  }; */
})();
