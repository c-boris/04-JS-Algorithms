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

    let count = { comparisons: 0 };

    const sortedArray = mergeSort(array, count);

    console.log('Chiffres triées par Merge Sort en récursif :');
    console.log(sortedArray);
    console.log('');
    console.log('Comparaisons réalisées :', count.comparisons);
});

const mergeSort = (array, count) => {
    if (array.length <= 1) {
        return array;
    }

    const middle = Math.floor(array.length / 2);
    const left = array.slice(0, middle);
    const right = array.slice(middle);

    return merge(
        mergeSort(left, count),
        mergeSort(right, count),
        count
    );
};

const merge = (left, right, count) => {
    let result = [];
    let i = 0;
    let j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
        count.comparisons++;
    }

    return result.concat(left.slice(i)).concat(right.slice(j));
};