import React from 'react';
import { Input as InputUI, FormField, Form, Button as ButtonUI } from 'semantic-ui-react';

const FormControls = (Element) => ({ meta, input, label, ...props }) => {
	const hasError = meta.touched && meta.error;

	return (
		<FormField
			control={Element}
			label={label}
			error={hasError ? { content: meta.error, pointing: 'below' } : false}
			{...input}
			{...props}
		/>
	);
};

export const Input = FormControls(InputUI);
export const Button = ({ children, ...props }) => (
	<Form.Field control={ButtonUI} content={children} {...props} />
);
