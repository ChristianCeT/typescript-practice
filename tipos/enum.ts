(() => {
  //valor minimo alto o medio dependiendo
  //del sentido de la enumeracion
  //sentido para establecer valores

  enum AudioLevel {
    min = 1,
    medium,
    max = 10,
  }

  let currentAudio = AudioLevel.max;

  console.log(currentAudio);
  console.log(AudioLevel);
})();
