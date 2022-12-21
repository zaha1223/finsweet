import React from 'react';
import { ProcessCard } from '../../components';
import styles from './section.module.css'

export const Section = () => {
	return <section>
		<h1 className={styles.secHead}>The process we follow</h1>
		<div className={styles.processFlex}>
			<ProcessCard head='Planning'/>
			<ProcessCard head='Conception'/>
			<ProcessCard head='Design'/>
			<ProcessCard head='Development'/>
		</div>
	</section>;
};
