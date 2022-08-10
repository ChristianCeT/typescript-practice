(() => {
  interface Xmen {
    name: string;
    realName: string;
    mutantPower(id: number): string;
  }

  interface Human {
    age: number;
  }
  // implementes se utiliza para forzar a la clase a implementar algo
  class Mutant implements Xmen, Human {
    public age: number = 0;
    public name: string = "";
    public realName: string = "";

    mutantPower(id: number) {
      return this.name + "" + this.realName;
    }
  }
})();
