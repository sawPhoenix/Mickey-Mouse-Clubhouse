import React, { useState } from 'react';
import Button from '../../components/PublicComponents/Button';
import { Queue, Stack, LinkedList } from "./pubic"; //  数据结构实现
import classnames from "classnames";
const Algorithm: React.FC = () => {
  const [background, setBackground] = useState(Math.floor(Math.random() * 30) + 1);

  const className_bg = classnames("welcome_container", {
    [`bg${background}`]: true
  })
  return (
    <div className={className_bg}  >
      <div className="welcome_changebg_btn">
        <Button btnType="neon" onClick={() => setBackground(background === 31 ? 1 : background + 1)}>切换背景</Button>
      </div>
    </div>
  )
}
export default Algorithm;