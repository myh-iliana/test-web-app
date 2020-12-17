import React from 'react';
import { Header, Segment } from 'semantic-ui-react';

import FormMessages from '../../Messages/FormMessages';
import PasswordRecoveryForm from './PasswordRecoveryForm';

const PasswordRecovery = () => {
	const onSubmit = (values) => console.log(values);

	return (
		<>
			<Segment padded attached>
				<Header as="h1">Password recovery</Header>
				<PasswordRecoveryForm onSubmit={onSubmit} />
			</Segment>
			<FormMessages login registration />
		</>
	);
};

export default PasswordRecovery;