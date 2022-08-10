(() => {
  const hero: string = "Flash";

  const returnName = (): string => {
    return hero;
  };

  const heroName = returnName();
})();
