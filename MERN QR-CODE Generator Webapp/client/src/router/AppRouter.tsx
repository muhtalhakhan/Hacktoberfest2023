import { useRoutes } from 'react-router-dom';
import { APP_ROUTES } from './router';

export const AppRouter = () => {
  const router = useRoutes(APP_ROUTES);

  return router;
};
