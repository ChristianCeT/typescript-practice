(() => {
  //significa que la funcion no debe terminar exitosamente
  //Luego de la funcion never ya no sigue el codigo
  const error = (message: string): never => {
    throw new Error(message);
  };

  error("Auxilio");
})();
