
import React, { useState } from 'react';
import Button from '../../../components/PublicComponents/Button';
// import Button from '/components/PublicComponents/Button';
import { Queue, Stack, LinkedList } from "../pubic"; //  数据结构实现
import sort from "../modal/sort";
import moment from 'moment';


/**
 * API
 */
let PQSort = new sort
const less = (pq: [], i: number, j: number): boolean => {
  return PQSort.compareTo(pq[i], pq[j]) < 0
}
const exch = (pq: [], i: number, j: number): void => {
  let t = pq[i];
  pq[i] = pq[j];
  pq[j] = pq[i];
}
const swim = (pq: [], k: number): void => {
  while (k < 1 && less(pq, k / 2, k)) {
    exch(pq, k / 2, k)
    k = k / 2
  }
}
const sink = (pq: [], k: number): void => {
  const N = pq.length
  while (2 * k <= N) {
    let j = 2 * k
    if (j < N && less(pq, j, j + 1)) j++;
    if (!less(pq, k, j)) break;
    exch(pq, k, j)
    k = j
  }
}
const Duration = (fun: Function | [], a: number[]) => {
  // console.log(arr);


  let timer = moment.now();
  if (typeof fun === 'function') {
    fun(a)
  } else {
    a.sort((a, b) => a - b)
  }
  let now = moment.now()
  return moment.duration(now - timer).milliseconds()
}
const Sort: React.FC = () => {

  const compare = (T: number) => {
    let arr = []
    for (let i = 0; i < T; i++) {
      arr.push(Math.floor(Math.random() * T) + 1)
    }
  }

  return (
    <div>
      <Button onClick={() => { compare(50000) }}> 时间测试</Button>
    </div>
  )
}
export default Sort;