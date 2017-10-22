function bubbleSort(array) {
  let notSorted = true;
  while (notSorted) {
    notSorted = false;
    array.forEach( function(e,i,a) {
      if (e > a[i+1]) {
        a[i] = a[i+1];
        a[i+1] = e;
        notSorted = true;
      }
    });
  }
  return array;
}