import React, { useState } from 'react';
import Button from '../../components/PublicComponents/Button'
import classnames from "classnames";
const WolCome: React.FC = () => {
  const [background, setBackground] = useState(Math.floor(Math.random()*30)+ 1);

  const className_bg = classnames("welcome_container", {
    [`bg${background}`]: true
  })
  return (
    <div className={className_bg}  >
      <Button btnType="neon">test</Button>
    </div>
  )
}
export default WolCome