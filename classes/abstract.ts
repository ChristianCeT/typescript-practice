(() => {
  abstract class Mutante {
    //sirven para crear otras clases
    // especificar una clase o argumento que tenga el tipo extendido
    //no sirve para crear instancias
    constructor(public name: string, public realName: string) {}
  }

  class Xmen extends Mutante {
    salvarMundo() {
      return "Mundo a salvo";
    }
  }
  class Villian extends Mutante {
    conquistarMundo() {
      return "Mundo conquistado";
    }
  }

  const wolverine = new Xmen("wolverine", "logan");
  const magneto = new Villian("magneto", "magnus");

  /*  console.log(wolverine.salvarMundo());
  console.log(magneto.conquistarMundo()); */

  const printName = (character: Mutante) => {
    console.log(character.realName);
  };

  /* printName(wolverine); */
})();
