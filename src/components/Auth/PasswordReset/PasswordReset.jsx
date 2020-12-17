import React from 'react';
import { Header, Segment } from 'semantic-ui-react';

import FormMessages from '../../Messages/FormMessages';
import PasswordResetForm from './PasswordResetForm';

const PasswordReset = () => {
	const onSubmit = (values) => console.log(values);

	return (
		<>
			<Segment padded attached>
				<Header as="h1">Password reset</Header>
				<PasswordResetForm onSubmit={onSubmit} />
			</Segment>
			<FormMessages login registration />
		</>
	);
};

export default PasswordReset;