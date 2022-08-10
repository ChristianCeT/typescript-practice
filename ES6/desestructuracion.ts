(() => {
  type Avengers = {
    nick: string;
    iroman: string;
    vision: string;
    activo: boolean;
    poder: number;
  };

  const avengers: Avengers = {
    nick: "Samuel L. Jackson",
    iroman: "Robert Downey Jr.",
    vision: "Paul Bettany",
    activo: true,
    poder: 1500,
  };

  /* const { poder, vision } = avengers;

  console.log(poder.toFixed(2), vision.toUpperCase()); */

  const printAvengers = ({ iroman, ...resto }: Avengers) => {
    console.log(iroman, resto);
  };

  /* printAvengers(avengers); */

  //desestructuración de arreglos
  const avengersArr: [string, boolean, number] = [
    "Capitan America",
    true,
    150.5,
  ];

  const [capi, iroman, seriaUnNumero] = avengersArr;

  console.log(iroman);
})();
