(() => {
  //establecer valor por defecto igualar
  const fullName = (
    firstName: string,
    lastName?: string,
    upper: boolean = false
  ): string => {
    if (upper) {
      return `${firstName} ${lastName || "no lastname"}`.toUpperCase();
    } else {
      return `${firstName} ${lastName || "no lastname"}`;
    }
  };

  const name = fullName("Christian", "Cervantes", true);

  console.log({ name });
})();
