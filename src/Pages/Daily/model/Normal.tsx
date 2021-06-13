import React, { useState } from "react";
const Normal = ({data}:any) => {
  
  console.log(data);
  
  return (
    <div>
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