import React, { useState } from "react";
import styles from '../index.less'
const Normal = ({data}:any) => {
  
  console.log(data);
  
  return (
    <div  className={styles.daily_content}>
      <div>
        <h2> {data.title} </h2>
        <div>{data.date}</div>
        {data.content.map((item: string) => (
          <p key={item}>{item}</p>
        ))}
      </div>
    </div>
  )
}
export default Normal