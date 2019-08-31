import React from 'react';
import { ListPage, NotFoundPage } from './pages';
import { useRoutes } from 'hookrouter';

const routes = {
  '/': () => <ListPage />,
};

function App() {
  const routeResult = useRoutes(routes);

  return routeResult || <NotFoundPage />;
}

export default App;
