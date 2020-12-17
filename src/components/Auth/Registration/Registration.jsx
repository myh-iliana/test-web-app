import React from 'react';
import { Header, Segment } from 'semantic-ui-react';

import FormMessages from '../../Messages/FormMessages';
import RegistrationForm from './RegistrationForm';

const Registration = () => {
	const onSubmit = (values) => console.log(values);

	return (
		<>
			<Segment padded attached>
				<Header as="h1">Registration</Header>
				<RegistrationForm onSubmit={onSubmit} />
			</Segment>
			<FormMessages login registration />
		</>
	);
};

export default Registration;