import React from 'react';
import { Container as ContainerUI } from 'semantic-ui-react';

import styles from './Container.module.scss';

const Container = ({ children, max, top = 0, ...props }) => {
	return (
		<ContainerUI
			className={`${styles.container} ${styles.maxWidth}`}
			style={{ '--max-width': `${max}px`, '--top': `${top}px` }}
			{...props}
		>
			{children}
		</ContainerUI>
	);
};

export default Container;
