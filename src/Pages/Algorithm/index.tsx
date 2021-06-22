import React, { useState } from 'react';
import Button from '../../components/PublicComponents/Button';
// import Button from '/components/PublicComponents/Button';
import { Queue, Stack, LinkedList } from "./pubic"; //  数据结构实现
import unionFind from "./modal/unionFind";
import Sort from "./example/Sort";
import PQ from "./example/PQ";

const Algorithm: React.FC = () => {
 
  return (
    <div>
      {/* {selectionSort} */}
      <Sort />
      <PQ />
    </div>
  )
}
export default Algorithm;