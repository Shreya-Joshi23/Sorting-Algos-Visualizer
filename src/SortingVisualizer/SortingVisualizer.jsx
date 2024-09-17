import React, { useEffect, useState } from "react";
import "./SortingVisualizer.css";
import {
  getBubblesortAnimations,
  getMergeSortAnimations,
} from "../SortingAlgos/sortingAlgorithms";

const SortingVisualizer = () => {
  const [array, setarray] = useState([]);

  useEffect(() => {
    putrandomvaluesinarr();
  }, []);

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
    const animations = getMergeSortAnimations(array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("array-bar");
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        if (arrayBars[barOneIdx] && arrayBars[barTwoIdx]) {
          const barOneStyle = arrayBars[barOneIdx].style;
          const barTwoStyle = arrayBars[barTwoIdx].style;
          const color = i % 3 === 0 ? "red" : "blue";
          setTimeout(() => {
            barOneStyle.backgroundColor = color;
            barTwoStyle.backgroundColor = color;
          }, i * 5);
        }
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * 5);
      }
    }
  }

  function bubblesort() {
    const animations = getBubblesortAnimations(array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("array-bar");
      const [barOneIdx, barTwoIdx, action] = animations[i];
      if (action == "compare") {
        if (arrayBars[barOneIdx] && arrayBars[barTwoIdx]) {
          const barOneStyle = arrayBars[barOneIdx].style;
          const barTwoStyle = arrayBars[barTwoIdx].style;
          setTimeout(() => {
            barOneStyle.backgroundColor = "red";
            barTwoStyle.backgroundColor = "red";
          }, i * 5);
        }
      } else if (action == "swap") {
        if (arrayBars[barOneIdx] && arrayBars[barTwoIdx]) {
          const barOneStyle = arrayBars[barOneIdx].style;
          const barTwoStyle = arrayBars[barTwoIdx].style;
          setTimeout(() => {
            barOneStyle.backgroundColor = "yellow";
            barTwoStyle.backgroundColor = "yellow";
            const barOneHeight = barOneStyle.height.slice(0, -2); // Remove 'px'
            const barTwoHeight = barTwoStyle.height.slice(0, -2);
            
            barOneStyle.height = `${barTwoHeight}px`;
            barTwoStyle.height = `${barOneHeight}px`;
          }, i * 5);
        }
      } else {
        if (arrayBars[barOneIdx] && arrayBars[barTwoIdx]) {
          const barOneStyle = arrayBars[barOneIdx].style;
          const barTwoStyle = arrayBars[barTwoIdx].style;
          setTimeout(() => {
            barOneStyle.backgroundColor = "blue";
            barTwoStyle.backgroundColor = "blue";
          }, i * 5);
        }
      }
    }
  }

  function quicksort() {}

  function selectionsort() {}

  function insertionsort() {}

  function arraysAreEqual(arrayOne, arrayTwo) {
    if (arrayOne.length !== arrayTwo.length) return false;
    for (let i = 0; i < arrayOne.length; i++) {
      if (arrayOne[i] !== arrayTwo[i]) {
        return false;
      }
    }
    return true;
  }

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
