import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../../components/PublicComponents/Button'
import classnames from "classnames";
// import styles from './index.less';
const WolCome: React.FC = () => {
  const history = useHistory();
  let testma = new Map();
  testma.set('test1','323')
  console.log(testma);
  
  return (
    <div>
      <div className="menu_model">
        {/* <div className={styles.test}></div> */}
        <Button data-cy="to_Algorithm" type="submit" onClick={() => { console.log(history.push('/algorithm'));
         }}>to Algorithm</Button>
        <Button data-cy="to_Daily" onClick={() => { console.log(history.push('/daily'));
         }}>to Daily</Button>
      </div>
    </div>
  )
}
export default WolCome