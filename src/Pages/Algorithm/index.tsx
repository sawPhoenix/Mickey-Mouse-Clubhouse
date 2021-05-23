import React, { useState } from 'react';
import Button from '../../components/PublicComponents/Button';
import { Queue, Stack, LinkedList } from "./pubic"; //  数据结构实现
import unionFind from "./example//unionFind";
import classnames from "classnames";
const Algorithm: React.FC = () => {
  let array = 10
  let uf = new  unionFind(array)
  console.log(uf.id);
  console.log(uf.connected(1,3));
    uf.union(1,2)
    uf.union(3,2)
    uf.union(4,2)
    console.log(uf.connected(1,4));
    
  return (
    <div>
     
    </div>
  )
}
export default Algorithm;