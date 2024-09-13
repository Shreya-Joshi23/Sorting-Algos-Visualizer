export function getMergeSortAnimations(array) {
  const animations = [];
  if (array.length <= 1) return array;
  const auxiliaryArray = array.slice();
  mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
  return animations;
}

function mergeSortHelper(array, startidx, endidx, auxiliaryArray, animations) {
  if (startidx === endidx) return;
  const mid = Math.floor((startidx + endidx) / 2);
  mergeSortHelper(auxiliaryArray, startidx, mid, array, animations);
  mergeSortHelper(auxiliaryArray, mid + 1, endidx, array, animations);
  merge(array, startidx, mid, endidx, auxiliaryArray, animations);
}

function merge(array, startidx, mid, endidx, auxiliaryArray, animations) {
  let k = startidx;
  let i = startidx;
  let j = mid + 1;
  while (i <= mid && j <= endidx) {
    //push values that are currently been compared
    //COMPARING
    animations.push([i, j]);
    animations.push([i,j]);
    if (auxiliaryArray[i] < auxiliaryArray[j]) {
      //SWAP
      animations.push([k, auxiliaryArray[i]]);
      array[k++] = auxiliaryArray[i++];
    } else {
        //SWAP
      animations.push([k, auxiliaryArray[j]]);
      array[k++] = auxiliaryArray[j++];
    }
  }
  while (i <= mid) {
    //COMPARING
    animations.push([i, i]);
    animations.push([i,i]);
    //SWAP
    animations.push([k, auxiliaryArray[i]]);
    array[k++] = auxiliaryArray[i++];
  }
  while (j <= endidx) {
    //COMPARING
    animations.push([j, j]);
    animations.push([j,j]);
    //SWAP
    animations.push([k, auxiliaryArray[j]]);
    array[k++] = auxiliaryArray[j++];
  }
}
