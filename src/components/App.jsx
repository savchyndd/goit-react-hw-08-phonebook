import { useDispatch } from 'react-redux';
import { useAuth } from '../hooks/useAuth';
import { useEffect } from 'react';
import { refreshUser } from 'redux/auth/operations';
import { Route, Routes } from 'react-router-dom';

import Layout from './Layout';
import RestrictedRoute from './RestrictedRoute';
import RegisterPage from './RegisterPage/RegisterPage';
import LoginPage from './LoginPage/LoginPage';
import Contacts from '../Pages/Contacts/Contacts';
import Home from 'Pages/Home/Home';
import PrivateRoute from './PrivateRoute';

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />

        <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/login" component={<RegisterPage />} />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<Contacts />} />
          }
        />
      </Route>
    </Routes>
  );
};
