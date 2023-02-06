let spaceship = {
    passengers: [{ name: 'space dog' }],
  
    telescope: {
      yearBuilt: 2018,
      model: '91031-XLT',
      focalLength: 2032,
    },
    crew: {
      captain: {
        name: 'Sandra',
        degree: 'Computer Engineering',
        encourageTeam() {
          console.log('We got this!');
        },
        'favorite foods': ['cookies', 'cakes', 'candy', 'spinach'],
      },
    },
    engine: {
      model: 'Nimbus2000',
    },
    nanoelectronics: {
      computer: {
        terabytes: 100,
        monitors: 'HD',
      },
      'back-up': {
        battery: 'Lithium',
        terabytes: 50,
      },
    },
  };
  const capFave = spaceship.crew.captain['favorite foods'][0];
  const firstPassenger = spaceship.passengers[0];

  console.log(capFave);
  console.log(firstPassenger);
  