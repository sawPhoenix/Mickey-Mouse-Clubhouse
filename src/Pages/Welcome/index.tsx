import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../../components/PublicComponents/Button';
import classnames from 'classnames';
import styles from './index.less';
const WolCome: React.FC = () => {
  const history = useHistory();
  let testma = new Map();

  const [state, setState] = React.useState(0);

  const update = (val: number) => {
    return val + 1;
  };
  const Foo = {
    me: '',
    init: function (who: any) {
      this.me = who;
    },
    identify: function () {
      return 'I am ' + this.me;
    },
  };
  // let Bar = Object.create(Foo);
  // Bar.speak = function () {
  //   alert('Hello, ' + this.identify() + '.');
  // };
  // var b1 = Object.create(Bar);
  // b1.init('b1');
  // var b2 = Object.create(Bar);
  // b2.init('b2');
  // b1.speak();
  // b2.speak();

  return (
    <div>
      <div className="menu_model">
        <div className={styles.test}></div>
        <Button
          data-cy="to_Algorithm"
          type="submit"
          onClick={() => {
            console.log(history.push('/algorithm'));
          }}
        >
          to Algorithm
        </Button>
        {state}
        <Button
          data-cy="to_Algorithm"
          type="submit"
          onClick={() => {
            for (let i = 0; i < 10; i++) {
              setState(update(state));
            }
          }}
        >
          test
        </Button>
        <Button
          data-cy="to_Daily"
          onClick={() => {
            console.log(history.push('/daily'));
          }}
        >
          to Daily
        </Button>
        <Button
          data-cy="to_Daily"
          onClick={() => {
            console.log(history.push('/demo'));
          }}
        >
          to Demo
        </Button>
      </div>
    </div>
  );
};
export default WolCome;
