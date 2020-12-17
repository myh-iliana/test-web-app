import React from 'react';
import { Icon, Message } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { routes } from '../routes';

const FormMessages = ({ login, registration, recovery, reset }) => {
	return (
		<Message attached="bottom" warning>
			{login && (
				<div>
					<Icon name="help" />
					Don't have an account yet? <Link to={routes.registration}>Sign up here</Link>.
				</div>
			)}
			{registration && (
				<div>
					<Icon name="help" />
					Already signed up? <Link to={routes.login}>Login here</Link> instead.
				</div>
			)}
			{recovery && (
				<div>
					<Icon name="help" />
					Forgot password? <Link to={routes.passwordRecovery}>Recover it</Link>.
				</div>
			)}
			{reset && (
				<div>
					<Icon name="help" />
					Forgot password? <Link to={routes.passwordReset}>Reset password</Link>.
				</div>
			)}
		</Message>
	);
};

export default FormMessages;
