import React from 'react';
import { Button, Header } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import Container from '../Container/Container';

const NotFound = () => {
	return (
		<Container textAlign='center' top={150}>
			<Header as='h1'>404</Header>
			<Header subheader as='h3'>Not Found</Header>
			<Button as={Link} to='/'>To home page</Button>
		</Container>
	);
};

export default NotFound;