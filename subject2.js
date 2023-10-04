const fs = require('fs');

const fileName = process.argv[2];

fs.readFile(fileName, 'utf8', (error, data) => {
    if (error) {
        console.error(error.message);
        return;
    }

    const array = data.split(' ').map(Number);

    console.log('');
    console.log('Chiffres :');
    console.log(array);
    console.log('');

    let count = { comparisons: 0, comparisonsSecond: 0 };

    const areBuildingsWithView = getBuildingsWithSunsetView(array, count);
    
    console.log('');
    console.log('Quels sont les immeubles avec une vue : ');
    console.log(areBuildingsWithView);
    console.log('');
    console.log('Comparaisons réalisées :', count.comparisons);

    const areBuildingsWithView2 = getBuildingsWithSunsetView2(array, count);
    
    console.log('');
    console.log('Quels sont les immeubles avec une vue 2 : ');
    console.log(areBuildingsWithView2);
    console.log('');
    console.log('Comparaisons réalisées :', count.comparisonsSecond);

});

// Exercice 2 
function getBuildingsWithSunsetView(buildings, count) {
  const buildingsWithSunsetView = [];

  for (let i = 0; i < buildings.length; i++) {
    let hasSunsetView = true;
    for (let j = i + 1; j < buildings.length; j++) {
      count.comparisons++;
      if (buildings[j] >= buildings[i]) {
        hasSunsetView = false;
        break;
      }
    }

    if (hasSunsetView) {
      buildingsWithSunsetView.push(buildings[i]);
    }
  }

  return buildingsWithSunsetView;
}

// Exercice 4 et 6
function getBuildingsWithSunsetView2(buildings, count) {
  const buildingsWithSunsetView = [];
  let maxHeight = 0;

  for (let i = buildings.length - 1; i >= 0; i--) {
    count.comparisonsSecond++;
    if (buildings[i] > maxHeight) {
      buildingsWithSunsetView.unshift(buildings[i]);
      maxHeight = buildings[i];
    }
  }

  return buildingsWithSunsetView;
}