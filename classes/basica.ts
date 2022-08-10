(() => {
  class Avenger {
    /*  private name: string;
    public team: string;
    public realName?: string; */

    //se pueden acceder a ella haciendo referencia a la clase
    static avgAge: number = 35;
    static getAvgAge() {
      return this.name;
    }

    constructor(
      private name: string,
      private team: string,
      public realName?: string
    ) {}

    public bio() {
      return `${this.name} (${this.team})`;
    }
  }

  const antman: Avenger = new Avenger("Antman", "Capitan");

  /* console.log(antman);

  console.log(Avenger.getAvgAge()); */
})();
