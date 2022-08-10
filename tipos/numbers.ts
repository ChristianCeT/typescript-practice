(() => {
  let avengers: number = 10;

  console.log(avengers);

  const villians: number = 20;

  if (avengers < villians) {
    console.log("PROBLEMAS");
  } else {
    console.log("Nos salvamos");
  }

  avengers = Number("55A");

  console.log({ avengers });
})();
