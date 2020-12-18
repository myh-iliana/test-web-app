import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Auth from './Auth/Auth';
import Header from './Header/Header';
import UsersList from './UsersList/UsersList';
import PostsList from './PostsList/PostsList';

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

const Routes = () => {
	return (
		<>
			<Header />
			<Switch>
				<Route exact path='/' render={() => <Redirect to={routes.users} />} />
				<Route path={routes.auth} component={Auth} />
				<Route path={routes.users} component={UsersList} />
				<Route path={routes.posts} component={PostsList} />
			</Switch>
		</>
	);
};

export default Routes;