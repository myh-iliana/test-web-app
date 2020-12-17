import React from 'react';
import { Header, Segment } from 'semantic-ui-react';

import LoginForm from './LoginForm';
import FormMessages from '../../Messages/FormMessages';

const Login = () => {
	const onSubmit = (values) => console.log(values);

	return (
		<>
			<Segment padded attached>
				<Header as="h1">Login</Header>
				<LoginForm onSubmit={onSubmit} />
			</Segment>
			<FormMessages login recovery />
		</>
	);
};

export default Login;
