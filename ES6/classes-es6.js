(() => {
  class Avenger {
    name;
    power;

    constructor(name = "No name", power = 0) {
      this.name = name;
      this.power = power;
    }
  }

  //herencia
  class FlyingAvenger extends Avenger {
    flying;

    constructor(name, power) {
      //llamar al constructor de la clase que extiende
      super(name, power);
      this.flying = true;
    }
  }

  const hulk = new Avenger("Hulk", 9001);
  const falcon = new FlyingAvenger("Falcon", 50);

  console.log(hulk);
  console.log(falcon);
})();
