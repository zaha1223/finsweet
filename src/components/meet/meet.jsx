import React from 'react';
import styles from './meet.module.css';
import { Metcard } from '../metcard/metcard';
import perone from '../../assets/per1.png';
import pertwo from '../../assets/per2.png';
import perthree from '../../assets/per3.png';
import perfour from '../../assets/per4.png';
import logosec from '../../assets/LogoSection.png'

export const Meet = () => {
	return (
		<>
            <img className={styles.logosec} src={logosec}/>
			<div className={styles.color}>
				<h1 className={styles.head}>Meet our team</h1>
				<div className={styles.flex}>
					<Metcard personimg={perone} name='John Smith' lastname='CEO' />
					<Metcard personimg={pertwo} name='Simon Adams' lastname='CTO' />
					<Metcard
						personimg={perthree}
						name='Paul Jones'
						lastname='Design Lead'
					/>
					<Metcard
						personimg={perfour}
						name='Sara Hardin'
						lastname='Project Manager'
					/>
				</div>
			</div>
		</>
	);
};
