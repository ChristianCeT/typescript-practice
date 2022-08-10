(() => {
  //no hay valor de retorno void

  function callGoku(): void {
    return;
  }

  const callSuperman = (): void => {};

  const a = callGoku();

  console.log(a);
})();
