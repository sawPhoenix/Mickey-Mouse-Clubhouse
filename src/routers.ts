import Welcome from 'pages/Welcome';
import ButtonType from 'pages/ButtonType';
import Algorithm from 'pages/Algorithm';
import Daily from 'pages/Daily';
import Demo from 'pages/Demo';
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
];

export default routers;
