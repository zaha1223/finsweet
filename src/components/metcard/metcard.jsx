import React from 'react';
import styles from './metcard.module.css';

export const Metcard = (prop) => {
	return (
		<div className={styles.box}>
			<img className={styles.pers} src={prop.personimg} />
			<h2 className={styles.name}>{prop.name}</h2>
			<p className={styles.lastname}>{prop.lastname}</p>
		</div>
	);
};
