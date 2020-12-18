import React, { useEffect } from 'react';
import { Item, Segment } from 'semantic-ui-react';
import { useStoreActions, useStoreState } from 'easy-peasy';

import Container from '../Container/Container';
import styles from '../UsersList/UsersList.module.scss';

const PostsList = () => {
	const posts = useStoreState((state) => state.posts.items);
	const isLoading = useStoreState((state) => state.posts.isLoading);
	const getPosts = useStoreActions((actions) => actions.posts.getAll);

	useEffect(() => {
		getPosts();
	}, []);

	return (
		<Container max={700}>
			<Segment loading={isLoading} className={styles.segment}>
				<Item.Group divided>
					{posts.map(({ id, title, body, user }) => (
						<Item key={id}>
							<Item.Image size="tiny" src="https://react.semantic-ui.com/images/wireframe/image.png" />

							<Item.Content>
								<Item.Header as="a">{title}</Item.Header>
								<Item.Meta>
									{/*<span className="cinema">{user.username}</span>*/}
								</Item.Meta>
								<Item.Description>{body}</Item.Description>
							</Item.Content>
						</Item>
					))}
				</Item.Group>
			</Segment>
		</Container>
	);
};

export default PostsList;
