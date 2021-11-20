import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../../components/PublicComponents/Button'
import classnames from "classnames";
const WolCome: React.FC = () => {
  const history = useHistory();
  let testma = new Map();

  const [state, setState] = React.useState(0)

  const update = (val: number) => {
    return val + 1
  }

  return (
    <div>
      <div className="menu_model">
        <Button data-cy="to_Algorithm" type="submit" onClick={() => {
          console.log(history.push('/algorithm'));
        }}>to Algorithm</Button>
        {state}
        <Button data-cy="to_Algorithm" type="submit" onClick={() => {
          for (let i = 0; i < 10; i++) {
            setState(update(state))
          }
        }}>test</Button>
        <Button data-cy="to_Daily" onClick={() => {
          console.log(history.push('/daily'));
        }}>to Daily</Button>
      </div>
    </div>
  )
}
export default WolCome