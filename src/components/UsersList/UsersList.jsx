import React, { useEffect } from 'react';
import { Dimmer, Image, List, Loader, Segment } from 'semantic-ui-react';
import { useStoreActions, useStoreState } from 'easy-peasy';
import { Link, generatePath } from 'react-router-dom';

import styles from './UsersList.module.scss';
import Container from '../Container/Container';
import { routes } from '../routes';

const UsersList = () => {
	const users = useStoreState((state) => state.users.items);
	const isLoading = useStoreState((state) => state.users.isLoading);
	const getUsers = useStoreActions((actions) => actions.users.getAll);

	useEffect(() => {
		getUsers();
	}, []);

	return (
		<Container max={700}>
			<Segment loading={isLoading} className={styles.segment}>
				{/*<Dimmer active={isLoading}>*/}
				{/*	<Loader />*/}
				{/*</Dimmer>*/}

				<List verticalAlign="middle" celled animated>
					{users.map(({ id, avatar, name, username }) => (
						<List.Item key={id} as={Link} to={generatePath(routes.profile, { id })}>
							<Image avatar src={avatar} />
							<List.Content>
								<List.Header>{name}</List.Header>
								{username}
							</List.Content>
						</List.Item>
					))}
				</List>
			</Segment>
		</Container>
	);
};

export default UsersList;
