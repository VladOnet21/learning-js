const logVisibleLightWaves = () => {
  const lightWaves = 'Moonlight';
  const region = 'The Arctic';
  if (region === 'The Arctic') {
    // eslint-disable-next-line no-shadow
    const lightWaves = 'Northern Lights';
    console.log(lightWaves);
  }

  console.log(lightWaves);
};

logVisibleLightWaves();
