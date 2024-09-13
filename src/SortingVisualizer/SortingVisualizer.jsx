import React, { useEffect, useState } from "react";
import "./SortingVisualizer.css";
import { getMergeSortAnimations } from "../SortingAlgos/sortingAlgorithms";

const SortingVisualizer = () => {
  const [array, setarray] = useState([]);

  useEffect(() => {
    putrandomvaluesinarr();
  },[]);

  function getRandomValue(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  let length = getRandomValue(5, 500);
  function putrandomvaluesinarr() {
    let temp = [];
    for (let i = 0; i < length; i++) {
      temp.push(getRandomValue(1, 1000));
    }
    setarray(temp);
  }

  function mergesort() {
    const animations=getMergeSortAnimations(array);
    for(let i=0;i<animations.length;i++){
        const arrayBars=document.getElementsByClassName('array-bar');
        const isColorChange=i%3!==2;
        if(isColorChange){
            const [barOneIdx,barTwoIdx]=animations[i];
            if(arrayBars[barOneIdx] && arrayBars[barTwoIdx]){
            const barOneStyle=arrayBars[barOneIdx].style;
            const barTwoStyle=arrayBars[barTwoIdx].style;
            const color=i%3===0?"red":"blue"
            setTimeout(()=>{
                barOneStyle.backgroundColor=color
                barTwoStyle.backgroundColor=color
            },i*5)
        }
        }else{
            setTimeout(()=>{
                const [barOneIdx,newHeight]=animations[i];
                const barOneStyle=arrayBars[barOneIdx].style;
                barOneStyle.height=`${newHeight}px`
            },i*5);
        }
    }
  }

  function quicksort() {}

  function bubblesort() {}

  function selectionsort() {}

  function insertionsort() {}

  return (
    <div className="array-container">
      {array.map((val, idx) => (
        <div
          key={idx}
          className="array-bar"
          style={{ backgroundColor: "blue", height: `${val}px` }}
        ></div>
      ))}
      <div>
        <button onClick={putrandomvaluesinarr}>Change array</button>
        <button onClick={quicksort}>Quick sort</button>
        <button onClick={mergesort}>Merge Sort</button>
        <button onClick={bubblesort}>Bubble sort</button>
        <button onClick={selectionsort}>Selection sort</button>
        <button onClick={insertionsort}>Insertion sort</button>
      </div>
    </div>
  );
};

export default SortingVisualizer;
