import React from 'react';
import { Field, Form as FinalForm } from 'react-final-form';
import { Form } from 'semantic-ui-react';
import { Button, Input } from '../../FormControls/FormControls';
import { confirmation, required } from 'redux-form-validators';

const PasswordResetForm = ({ onSubmit }) => {
	return (
		<FinalForm onSubmit={onSubmit}>
			{({ handleSubmit }) => (
				<Form onSubmit={handleSubmit}>
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

					<Button color="yellow">Reset</Button>
				</Form>
			)}
		</FinalForm>
	);
};

export default PasswordResetForm;
