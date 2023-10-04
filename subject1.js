const fs = require('fs');

const fileName = process.argv[2];
const k = parseInt(process.argv[3]);

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

    const isKFound = hasSumPair(array, k, count);

    console.log('Y a-t-il des chiffres dont la somme est égale à k avec la version O(n²) ?');
    console.log(isKFound);
    console.log('');
    console.log('Comparaisons réalisées :', count.comparisons);

    const isKFound2 = hasSumPair2(array, k, count);
    
    console.log('');
    console.log('Y a-t-il des chiffres dont la somme est égale à k avec la version O(n) ?');
    console.log(isKFound2);
    console.log('');
    console.log('Comparaisons réalisées :', count.comparisonsSecond);
});

// Exercice 1
function hasSumPair(array, k, count) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      count.comparisons++;
      if (array[i] + array[j] === k) {
        return true;
      }
    }
  }
  return false;
}

// Exercice 3 et 5
function hasSumPair2(array, k, count) {
  const complements = new Set();

  for (let i = 0; i < array.length; i++) {
    const complement = k - array[i];
    count.comparisonsSecond++;

    if (complements.has(complement)) {
      return true;
    }

    complements.add(array[i]);
  }
  
  return false;
}

