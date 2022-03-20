import Welcome from 'Pages/Welcome';
import ButtonType from 'Pages/ButtonType';
import Algorithm from 'Pages/Algorithm';
import Daily from 'Pages/Daily';
import Demo from 'Pages/Demo';
import ThreeD from 'Pages/ThreeD';
const routers = [
  {
    path: '/',
    component: Welcome,
  },
  {
    path: '/buttonType',
    component: ButtonType,
  },
  {
    path: '/algorithm',
    component: Algorithm,
  },
  {
    path: '/daily',
    component: Daily,
  },
  {
    path: '/demo',
    component: Demo,
  },
  {
    path: '/3d',
    component: ThreeD,
  },
];

export default routers;
