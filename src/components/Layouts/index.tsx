import React, { useState } from 'react';
import Button from '../../components/PublicComponents/Button'
import classnames from "classnames";
const Layout: React.FC = (props) => {
  const [background, setBackground] = useState(Math.floor(Math.random() * 30) + 1);

  const className_bg = classnames("container", {
    [`bg${background}`]: true
  })
  return (
    <div className={className_bg}  >
       <main className="main">{props.children}</main>
      <div className="changebg_btn">
        <Button btnType="neon" onClick={() => setBackground(background === 31 ?  1: background + 1 )}>切换背景</Button>
      </div>
    </div>
  )
}
export default Layout;