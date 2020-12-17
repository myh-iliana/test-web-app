import React from 'react';
import { Form as FinalForm, Field } from 'react-final-form';
import { Form } from 'semantic-ui-react';
import { required, email } from 'redux-form-validators';

import { Button, Input } from '../../FormControls/FormControls';
import { composeValidators } from '../../../utils/validators';

const LoginForm = ({ onSubmit }) => {
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

					<Button color='yellow'>Sign In</Button>
				</Form>
			)}
		</FinalForm>
	);
};

export default LoginForm;
