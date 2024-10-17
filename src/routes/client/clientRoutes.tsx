import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { SuspenseWrapper } from '../../components/loading/SuspenseWrap';
import ProtectRoute from '../../components/ProtectRoutes';
import AuthRoute from '../../components/AuthRoutes';
import { CLIENT_ROUTE_PATH } from '../../constant/routes';
import ListProduct from '../../components/Products/ListProduct';

const NotFound = React.lazy(() => import('../../components/NotFound'));

// example of lazy loading
// const Client = React.lazy(() => import('.'));

export const ClientRoutes = () => (
  <Routes>
    {/* AuthRoute */}
    {/* using AuthRoute when the route doesnt need user to sign in to access it */}
    <Route element={<AuthRoute />}>
      <Route
        path={`/${CLIENT_ROUTE_PATH.PRODUCT}`} element={<SuspenseWrapper component={<ListProduct />} />}
      />
      {/*<Route path={`/${CLIENT_ROUTE_PATH.PRODUCT_DETAIL}/:id`} element={<SuspenseWrapper component={<Register />} />} />*/}

    </Route>
    {/* ProtectRoute */}
    {/* using ProtectRoute when the route need user to sign in to access it */}
    <Route element={<ProtectRoute />}></Route>
    {/* Not Found */}
    <Route path="*" element={<NotFound />} />
  </Routes>
);
