import React from 'react';
import { Form } from 'semantic-ui-react';
import { Field, Form as FinalForm } from 'react-final-form';
import { email, required } from 'redux-form-validators';

import { Button, Input } from '../../FormControls/FormControls';
import { composeValidators } from '../../../utils/validators';

const PasswordRecoveryForm = ({ onSubmit }) => {
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

					<Button color='yellow'>Recover</Button>
				</Form>
			)}
		</FinalForm>
	);
};

export default PasswordRecoveryForm;