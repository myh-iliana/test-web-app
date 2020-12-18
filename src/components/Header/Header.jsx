import React from 'react';
import { Button, Container, Image, Menu, Popup } from 'semantic-ui-react';
import { Link, NavLink } from 'react-router-dom';

import styles from './Header.module.scss';
import Logo from '../../images/logo.png';
import { routes } from '../routes';

const Header = () => {
	const Avatar = (
		<div className={styles.avatar}>
			<Image
				src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW4OIMCU8ZseqnI8wPK5pIO-ECfHybXZwvpA&usqp=CAU"
				avatar
				spaced
			/>
			<span>Username</span>
		</div>
	);

	return (
		<Container fluid className={styles.container}>
			<Menu inverted borderless attached>
				<Menu.Menu position="left">
					<Menu.Item>
						<Image size="tiny" src={Logo} />
					</Menu.Item>
				</Menu.Menu>

				<Menu.Menu position="right">
					<Menu.Item>
						<NavLink className={styles.link} activeClassName={styles.active} to={routes.users}>
							Users
						</NavLink>
					</Menu.Item>
					<Menu.Item>
						<NavLink className={styles.link} activeClassName={styles.active} to={routes.posts}>
							Posts
						</NavLink>
					</Menu.Item>
				</Menu.Menu>

				<Menu.Menu position="right">
					<Menu.Item>
						<Popup trigger={Avatar} flowing hoverable on="click">
							<Button.Group secondary vertical>
								<Button as={Link} to={routes.profile}>
									Profile
								</Button>
								<Button>Logout</Button>
							</Button.Group>
						</Popup>
					</Menu.Item>
				</Menu.Menu>
			</Menu>
		</Container>
	);
};

export default Header;
