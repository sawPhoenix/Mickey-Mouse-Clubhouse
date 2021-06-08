import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../../components/PublicComponents/Button'
import classnames from "classnames";

const WolCome: React.FC = () => {
  const history = useHistory();
  return (
    <div>
      <div className="test_model">
        <Button onClick={() => { console.log(history.push('/algorithm'));
         }}>to Algorithm</Button>
      </div>
    </div>
  )
}
export default WolCome