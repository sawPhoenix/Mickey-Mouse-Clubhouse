import React, { useState } from 'react';
import Button from '../../components/PublicComponents/Button';
// import Button from '/components/PublicComponents/Button';
import { Queue, Stack, LinkedList } from "./pubic"; //  数据结构实现
import unionFind from "./example//unionFind";
import sort from "./example//sort";
import classnames from "classnames";
const Algorithm: React.FC = () => {
  let Sort = new sort
  const unionfind = () => {
    let array = 10
    let uf = new unionFind(array)
    console.log(uf.id);
    console.log(uf.connected(1, 3));
    uf.union(1, 2)
    uf.union(3, 2)
    uf.union(4, 2)
    console.log(uf.connected(1, 4));

  }

  const selectionSort = (arr: any[]) => {
   
    let min = 0;
    for (let i = 0; i < arr.length; i++) {
      min = i;
      for (let j = i+1; j < arr.length; j++) {
        if (arr[j] < arr[min]) {
          min = j
        }
       
      }
       Sort.exch(arr,i,min)
    }
    return arr
  }
  console.log(selectionSort([2, 1, 8, 4, 6, 3, 5, 7]));

  const InsertionSort = (arr: any[]) => {
    for (let i = 1; i < arr.length; i++) {
      for (let j = i; j > 0 && Sort.less(arr[j],arr[j-1]) ; j--) {
        Sort.exch(arr,j,j-1)
      }
    }
    return arr
  }
  
  console.log(InsertionSort([2, 1, 8, 4, 6, 3, 5, 7]));
  return (
    <div>
      {/* {selectionSort} */}
    </div>
  )
}
export default Algorithm;