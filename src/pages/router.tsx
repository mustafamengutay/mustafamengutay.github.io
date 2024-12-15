import { Route, Routes } from 'react-router';
import pagesData from './pagesData';

export default function Router() {
  const pageRoutes = pagesData.map(({ title, path, element }) => {
    return <Route key={title} path={`/${path}`} element={element} />;
  });

  return <Routes>{pageRoutes}</Routes>;
}
