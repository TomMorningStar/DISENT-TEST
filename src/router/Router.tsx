import {
  RouteObject,
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import { Container } from 'react-bootstrap'

import { Home } from '../pages/Home'
import { Detail } from '../pages/Detail'
import { NotFound } from '../pages/NotFound'
import { Path } from '../constants/path'

const routesPublic: RouteObject[] = [
  {
    path: Path.ROOT,
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    path: Path.DETAILS,
    element: <Detail />,
    errorElement: <NotFound />,
  },
]

const routes = createBrowserRouter([...routesPublic])

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Container className="py-4">
      {children}
    </Container>
  );
};

export const Router = () => {
  return (
    <Layout>
      <RouterProvider router={routes} />
    </Layout>
  )
}
