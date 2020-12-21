import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';

import Auth from './Auth/Auth';
import Header from './Header/Header';
import UsersList from './UsersList/UsersList';
import PostsList from './PostsList/PostsList';
import {useStoreState} from 'easy-peasy';

export const routes = {
  auth: '/auth',
  registration: '/auth/registration',
  login: '/auth/login',
  passwordRecovery: '/auth/password-recovery',
  passwordReset: '/auth/password-reset',

  profile: '/profile/:id',
  users: '/users',
  posts: '/posts',
};

export const PrivateRoute = ({component: Component, privateWhenLoggedIn, ...props}) => {
  const isLoggedIn = useStoreState(state => state.auth.isLoggedIn);

  if (privateWhenLoggedIn && isLoggedIn) return <Redirect to={routes.profile} />;

  return (
      <Route {...props}
             render={() => <>
                 {isLoggedIn ? <Component/> : <Redirect to={routes.login}/>}
               </>
             }
      />
  );
};

const Routes = () => {
  return (
      <>
        <PrivateRoute path='/' component={Header} />
        <Switch>
          <Route exact path='/' render={() => <Redirect to={routes.users}/>}/>
          <PrivateRoute privateWhenLoggedIn path={routes.auth} component={Auth}/>
          <PrivateRoute path={routes.users} component={UsersList}/>
          <PrivateRoute path={routes.posts} component={PostsList}/>
        </Switch>
      </>
  );
};

export default Routes;