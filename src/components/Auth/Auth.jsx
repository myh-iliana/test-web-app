import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { routes } from '../routes';
import Registration from './Registration/Registration';
import Login from './Login/Login';
import PasswordRecovery from './PasswordRecovery/PasswordRecovery';
import PasswordReset from './PasswordReset/PasswordReset';
import Container from '../Container/Container';

const Auth = () => {
	return (
		<Container max={450} top={70}>
			<Switch>
				<Route path={routes.registration} component={Registration} />
				<Route path={routes.login} component={Login} />
				<Route path={routes.passwordRecovery} component={PasswordRecovery} />
				<Route path={routes.passwordReset} component={PasswordReset} />
			</Switch>
		</Container>
	);
};

export default Auth;
