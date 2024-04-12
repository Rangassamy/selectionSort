function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }
    [array[i], array[minIndex]] = [array[minIndex], array[i]];
  }
  console.log(array);
}

const array = [1351, 6531, 651, 651, 6651, 351, 6, 2, 1, 5, 3, 6, 5, 29];

selectionSort(array);
