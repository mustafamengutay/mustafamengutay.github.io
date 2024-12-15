import { routerType } from '../types/router.type';
import Home from './home';

const pagesData: routerType[] = [
  {
    path: '',
    element: <Home />,
    title: 'home',
  },
];

export default pagesData;
