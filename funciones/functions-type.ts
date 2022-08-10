(() => {
  //inferencia de los tipos de función cuando se declara en typescript
  const addNumbers = (a: number, b: number): number => a + b;
  const greet = (name: string): string => `Hola ${name}`;
  const saveTheWorld = (): string => `El mundo vive`;

  //diciendo na funcion que regresa un numero
  let myFunction: () => string;

  /* myFunction = 10;

  console.log(myFunction); */

  /* myFunction = addNumbers;
  console.log(myFunction(2, 3)); */

  /* myFunction = greet;
  console.log(myFunction("Christian")); */

  myFunction = saveTheWorld;
  console.log(myFunction());
})();
