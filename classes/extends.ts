(() => {
  class Avenger {
    constructor(public name: string, public realName: string) {
      /*   console.log("Constructor avenger llamado"); */
    }

    //protected se puede acceder a propiedades o clases que extiendan de avenger
    // solo se accede en la misma clase o en las que extiendas

    //private solo se accede si esta dentro de la clases y solo ahi
    protected getFullName(): string {
      return `${this.name} ${this.realName}`;
    }
  }

  class Xmen extends Avenger {
    // se llama tan pronto se instancie la clase extendida
    constructor(name: string, realName: string, public isMutant: boolean) {
      super(name, realName);
      /* console.log("Constructor xmen llamado"); */
    }

    //getter
    get fullName() {
      //es un metodo y tiene que regresar algo
      return `${this.name} - ${this.realName}`;
    }

    set fullName(name: string) {
      //es un metodo que recibe un valor y establece algo
      //se puede usar cierta logica
      if (name.length < 3) {
        throw new Error("El nombre es muy corto");
      }
      this.name = name;
    }
    getFullNameDesdeXmen() {}
  }

  const wolverine = new Xmen("Wolverine", "Logan", true);

  wolverine.fullName = "Christian";
})();
