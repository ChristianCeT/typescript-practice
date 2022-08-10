(() => {
  //argumentos rest
  const fullName = (firstName: string, ...restArgs: string[]): string => {
    return `${firstName} ${restArgs.join(" ")}`;
  };

  const name = fullName("Christian", "Cervantes", "1111", "Developer");

  console.log({ name });
})();
