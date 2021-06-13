import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../../components/PublicComponents/Button'
import classnames from "classnames";

const WolCome: React.FC = () => {
  const history = useHistory();
  return (
    <div>
      <div className="menu_model">
        <Button type="submit" onClick={() => { console.log(history.push('/algorithm'));
         }}>to Algorithm</Button>
        <Button onClick={() => { console.log(history.push('/daily'));
         }}>to Daily</Button>
      </div>
    </div>
  )
}
export default WolCome