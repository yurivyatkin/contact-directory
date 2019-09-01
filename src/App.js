import React from 'react';
import { ItemPage, ListPage, NotFoundPage } from './pages';
import { useRoutes } from 'hookrouter';

const routes = {
  '/': () => <ListPage />,
  '/contacts/:id': ({ id }) => <ItemPage id={id} />,
};

function App() {
  const routeResult = useRoutes(routes);

  return routeResult || <NotFoundPage />;
}

export default App;
