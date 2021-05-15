import React from 'react'
import img1 from '../../assets/background/1.jpg'
import "./index.css"
import {makeCanvasFullScreen} from "../../utils/sakura"
const WolCome:React.FC = () => {
  let s
  return (
    <div className="welcome_container" style={{backgroundImage: `url(${img1})`}} >
      <canvas id="sakura" />
    </div>
  )
}
export default WolCome
// react