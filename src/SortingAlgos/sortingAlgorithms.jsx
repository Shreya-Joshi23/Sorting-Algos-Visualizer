export function getMergeSortAnimations(array) {
  const animations = [];
  if (array.length <= 1) return animations;
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
    animations.push([i, j]);
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
    animations.push([i, i]);
    //SWAP
    animations.push([k, auxiliaryArray[i]]);
    array[k++] = auxiliaryArray[i++];
  }
  while (j <= endidx) {
    //COMPARING
    animations.push([j, j]);
    animations.push([j, j]);
    //SWAP
    animations.push([k, auxiliaryArray[j]]);
    array[k++] = auxiliaryArray[j++];
  }
}

export function getBubblesortAnimations(array) {
  const animations = [];
  if (array.length <= 1) return animations;

  let i, j, swapped;
  let n = array.length;

  for (i = 0; i < n - 1; i++) {
    swapped = false;
    for (j = 0; j < n - i - 1; j++) {
      //comparing index j and j+1
      animations.push([j, j + 1,"compare"]);
      if (array[j] > array[j + 1]) {
        //swapping index j and j+1
        animations.push([j, j + 1,"swap"]);
        var temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
        swapped = true;
      }
      animations.push([j,j+1,"revert"]);
    }
    if (swapped == false) break;
  }
  return animations;
}
