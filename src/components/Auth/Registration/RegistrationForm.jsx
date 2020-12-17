import React from 'react';
import { Field, Form as FinalForm } from 'react-final-form';
import { Form } from 'semantic-ui-react';
import { confirmation, email, required } from 'redux-form-validators';

import { Button, Input } from '../../FormControls/FormControls';
import { composeValidators } from '../../../utils/validators';

const RegistrationForm = ({ onSubmit }) => {
	return (
		<FinalForm onSubmit={onSubmit}>
			{({ handleSubmit }) => (
				<Form onSubmit={handleSubmit}>
					<Field
						name="email"
						type="email"
						component={Input}
						placeholder="Email"
						label="Email"
						validate={composeValidators(email(), required())}
					/>
					<Field
						name="password"
						type="password"
						component={Input}
						placeholder="Password"
						label="Password"
						validate={required()}
					/>
					<Field
						name="confirmation"
						type="password"
						component={Input}
						placeholder="Confirm password"
						label="Confirm password"
						validate={confirmation({ field: 'password', fieldLabel: 'Password' })}
					/>

					<Button color='yellow'>Sign up</Button>
				</Form>
			)}
		</FinalForm>
	);
};

export default RegistrationForm;