import { Children, Fragment, Suspense } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import DefaultLayout from '../layouts/defaultLayout';
import { appRoute } from './router';

const AppRouting = () => {
  return (
    <Routes>
      {appRoute.map((route, index) => {
        const Component = route.component;
        const Layout = route.layout === null ? Fragment : DefaultLayout;
        return (
          <Route
            key={route.id}
            path={route.path}
            element={
              <Layout>
                <Component />
              </Layout>
            }
          />
        );
      })}
    </Routes>
  );
};

export default AppRouting;
